import Component from '@ember/component';

export default Component.extend({
  actions:{
    guardarAdmin(admin){
      admin.save().then(()=>{
        this.sendAction('guardarAdmin',admin)
      })
    }
  }
});
