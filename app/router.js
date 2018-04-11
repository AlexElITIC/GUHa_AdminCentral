import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('crearAdmin');
  this.route('crearUnidad');
  this.route('listaAdmin');
  this.route('inicio');
  this.route('detalles',{path:'/detalles/:id'});
  this.route('editar',{path:'/editar/:housing-unit_id'});
});

export default Router;
