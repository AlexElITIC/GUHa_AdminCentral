import DS from 'ember-data';
import Usuario from './user';

export default Usuario.extend({
    unidadHab: DS.belongsTo('unit'),

    pagos: DS.hasMany('payment'),
    solicitudes: DS.hasMany('request'),
    alertas: DS.hasMany('alert')
});
