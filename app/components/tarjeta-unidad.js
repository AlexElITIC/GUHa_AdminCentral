import Component from '@ember/component';

export default Component.extend({
  actions:{
    borrarUnidad(unit){
      unit.destroyRecord()
    },
    goDetails(unit){
      this.sendAction('goDetails',unit)
    },
    edit(unit){
      this.sendAction('edit',unit)
    }
  }
});
