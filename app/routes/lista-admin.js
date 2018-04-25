import Route from '@ember/routing/route';

export default Route.extend({
  model(){
      return this.get('store').findAll('administrator')

  },
  setupController(controller){
    this._super(...arguments)
    controller.set('selectedAdmin', undefined)
  }
});
