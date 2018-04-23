import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { inject as service } from "@ember/service";

export default Component.extend(FindQuery, {
  store: service(),
  firebaseApp: service(),
  listaAdmin: computed(function() {
    let administradoresList = [];

			return this.get('store').findAll('administrator').then((administradores)=>{
					administradores.forEach((administrator)=>{
						administradoresList.pushObject(administrator)
					})
					return administradoresList;
			})
  }),
  selectedAdmin: computed(function(){
    if(this.get('model.admin2Obj')){
    return this.get('model.admin2Obj')}
    else {return null}
  }),

  selectedAdmin1: computed(function(){
    if(this.get('model.admin1Obj'))
    return this.get('model.admin1Obj')
    else return null
  }),

  actions:{
    probarCoordenadas(){
      var model = this.get('model');
      let latitud = this.get('latitud');
      let longitud = this.get('longitud');

      this.set('model.latitud',latitud);
      this.set('model.longitud',longitud);

    },
    guardarUnidad(unidad){

      unidad.set('admin1',this.get('selectedAdmin1.id'))
      unidad.set('admin2',this.get('selectedAdmin.id'))
      unidad.save().then(()=>{
        this.set('latitud','');
        this.set('longitud','');
        this.sendAction('guardarUnidad',unidad)
      })
    },
    didSelectImage(files){
    			let ctrl = this;
    			let reader = new FileReader();
    			reader.onloadend = Ember.run.bind(this, function(){
    				var dataURL = reader.result;
    				var output = document.getElementById('output');
    				// output.src = dataURL;
    				this.set('file', files[0]);
    				var metadata = {
    	 				contentType: 'image/png'
    	 			};
    				var storageRef = this.get('firebaseApp').storage().ref();
    	 			var path = 'images/distribuidos/' + this.get('model.id') + '.png';
    	 			var uploadTask = storageRef.child(path).put(this.get('file'), metadata);
    	 			uploadTask.on('state_changed', function(snapshot){
    				var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    					console.log('Upload is ' + progress + '% done');
    					console.log(snapshot.state);
    				}, function(error) {
              console.log(error)
    					}, function() {
    						var downloadURL = uploadTask.snapshot.downloadURL;
    						ctrl.get('model').set('imageUrl', downloadURL);
    						ctrl.get('model').save()
    						ctrl.set('file', '');
    						ctrl.set('selectedCategory', '');
    						// ctrl.set(document.getElementById('output').src, '');
    						ctrl.set('days', '');
    						ctrl.set('isDisabled', true);
    	 				});
    			})
    			//debugger;
    			reader.readAsDataURL(files[0]);
     			console.log(this.get('file'))

     		}
}
});
