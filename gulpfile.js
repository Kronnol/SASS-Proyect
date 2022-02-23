/* Estas tareas son funciones de JS , se comunican con la API de GULP y realizan ciertas acciones*/


/* llamamos la primer tarea */
/* para llamar a la tarea se escribe en consola:
gulp yaquielnombredelatarea
ejemplo:

gulp tarea

antes de mandarla a llamar tenemos que hacer la tarea disponible
todas las tareas de gulp toman un call back
*/
/* function tarea(done){
    console.log('desde la primer tarea');
    done();
}

exports.nuevatarea = tarea;
 */
/* para poner disponible la tarea gulp 
lo que hace el exports es ponerla disponible para ejecutarla desde la terminal
el exports.nuevatarea es el nombre de la tarea y el
= tarea; es la tarea asociada con ese comando

para compilar sass con gulp se utiliza este comando para instalar dependencias 
npm i --save-dev gulp-sass

para compilar se utilizan las dependencias
para extraer las dependencias se utiliza la palabra require 
require va directo a la carpeta de gulp sass
*/

const {src,dest,watch} = require('gulp'); //cuando se retornan multiples funciones se utilizan las llaves 
/* para identificar un archivo, gulp nos da la funcion src 
    para almacenar ese archivo, gulp nos da dest
*/ 
const sass = require('gulp-sass')(require('sass'));//retorna una sola funcion
/* 'gulp-sass'solamente es el conector del paquete sass
    hay que especificarle el archivo de 'sass' que tiene el conocimiento para compilarlo bien 
*/

function css(done){
    //identificar archivo sass a compilar con gulp
    src('src/scss/app.scss')
        .pipe(sass()) // con el pipe le decimos que esta es la siguiente accion//compilarlo
        .pipe(dest('build/css'));//y aqui//almacenarla   
    done();
}

/* para evitar estar compilando la hoja de css cada que hagamos un cambio podemos agregar un -watch con gulp de la siguiente manera*/
/* se crea una funcion  */
function dev(done){

    watch('src/scss/app.scss',css);
    //watch() toma 2 parametros//// 1.a que archivo le voy a dar el watch 2. que funcion esta asociada a ese watch
    done();
}

exports.css = css;
exports.dev = dev;





