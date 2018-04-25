import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findAll('unit')
  },
  setupController(controller){
    this._super(...arguments)
    controller.set('selectedUnit', undefined)
  }
});
