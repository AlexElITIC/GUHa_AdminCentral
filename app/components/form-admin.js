import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { inject as service } from "@ember/service";
import { isNone } from '@ember/utils';
export default Component.extend({
  session: Ember.inject.service(),
  store: service(),
  firebase: service('firebaseApp'),
  actions:{
    SelectImage(files){
			let ctrl = this;
			let reader = new FileReader();
			reader.onloadend = Ember.run.bind(this, function(){
				var dataURL = reader.result;
				var output = document.getElementById('output');
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
						ctrl.set('days', '');
						ctrl.set('isDisabled', true);
	 				});
			})
			
			reader.readAsDataURL(files[0]);
 			console.log(this.get('file'))

 		},
    guardarAdmin(admin){
      console.log(admin)
      if (isNone(admin.get('uid'))) {
        this.get('firebase').auth().createUserWithEmailAndPassword(this.get('email'), this.get('password')).then((user)=>{
          admin.set('email',this.get('email'));
          admin.set('uid',user.uid);
          admin.save().then(()=>{
            this.sendAction('guardarAdmin',admin)
          })
  })
      }
      else {
        admin.save().then(()=>{
          this.sendAction('guardarAdmin',admin)
        })
      }

    }
  }
});
