import DS from 'ember-data';
import Usuario from './usuario';

export default Usuario.extend({
    unidadHab: DS.belongsTo('unidad-hab'),

    pagos: DS.hasMany('payment'),
    solicitudes: DS.hasMany('request'),
    alertas: DS.hasMany('alert')
});
