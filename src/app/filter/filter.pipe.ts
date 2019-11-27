import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

import * as formFiltro from './filter.accion';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filtro: formFiltro.filtrosValidos ): Todo[] {

    console.log(todos);
    console.log(filtro);

    switch ( filtro ) {
      
      case 'completados':
        return todos.filter( todos => todos.completado === true); // tambien puede ser todos => todos.completado ya que eso retorna un true, ahi se hace la validación
      
      case 'pendientes':
        return todos.filter( todos => todos.completado === false); // tambien puede ser todos => !todos.completado  el simbolo ! valida que sean los diferentes de completado
      
      default:
        return todos;

    }



    return todos;
  }

}
