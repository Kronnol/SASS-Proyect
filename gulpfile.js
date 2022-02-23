/* Estas tareas son funciones de JS , se comunican con la API de GULP y realizan ciertas acciones*/


/* llamamos la primer tarea */
/* para llamar a la tarea se escribe en consola:
gulp yaquielnombredelatarea
ejemplo:

gulp tarea

antes de mandarla a llamar tenemos que hacer la tarea disponible
*/
function tarea(){
    console.log('desde la primer tarea');
}


/* para poner disponible la tarea gulp 
lo que hace el exports es ponerla disponible para ejecutarla desde la terminal

el exports.nuevatarea es el nombre de la tarea y el

= tarea; es la tarea asociada con ese comando

*/

exports.nuevatarea = tarea;

