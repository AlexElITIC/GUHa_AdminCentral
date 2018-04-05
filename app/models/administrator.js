import DS from 'ember-data';
import Usuario from './usuario';

export default Usuario.extend({
    unidadHab: DS.hasMany('housing-unit'),

});
