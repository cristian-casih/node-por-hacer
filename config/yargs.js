const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'dddd'

};
const completado = {
    default: true,
    alias: 'c',
    desc: 'dddd'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar el elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}