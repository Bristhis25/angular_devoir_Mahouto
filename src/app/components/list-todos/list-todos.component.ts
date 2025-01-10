import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { Todos } from '../../interfaces/todos';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss',
})
export class ListTodosComponent {
  todosService = inject(TodosService);
  todosList: Todos[] = [];

  constructor() {
    this.todosService.getTodos().then((todos: Todos[]) => {
      this.todosList = todos;
    });
  }
}
