import Component from '@ember/component';

export default Component.extend({
  actions:{
    borrarAdmin(admin){
      admin.destroyRecord()
    },
    edit(admin){
      this.sendAction('edit',admin)
    }
  }
});
