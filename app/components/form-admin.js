import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { inject as service } from "@ember/service";
export default Component.extend({
  session: Ember.inject.service(),
  store: service(),
  firebase: service('firebaseApp'),
  actions:{
    SelectImage(files){
      console.log('entrando')
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
				var storageRef = this.get('firebase').storage().ref();
	 			var path = 'images/distribuidos/' + this.get('myModel.id') + '.png';
	 			var uploadTask = storageRef.child(path).put(this.get('file'), metadata);
	 			uploadTask.on('state_changed', function(snapshot){
				var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
					console.log(snapshot.state);
				}, function(error) {
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

 		},
    guardarAdmin(admin){
      this.get('firebase').auth().createUserWithEmailAndPassword(admin.get('email'), this.get('password')).then((user)=>{
        admin.set('uid',user.uid);
        admin.save().then(()=>{
          this.sendAction('guardarAdmin',admin)
        })
})

    }
  }
});
