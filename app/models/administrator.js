import DS from 'ember-data';
import Usuario from './user';

export default Usuario.extend({
    unidadHab: DS.hasMany('unit'),

});
