import Component from '@ember/component';
import {computed} from "@ember/object";

export default Component.extend({
  admin1Real: computed('unit.admin1.content', function(){
    return this.get('unit.admin1.content')
  }),

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
