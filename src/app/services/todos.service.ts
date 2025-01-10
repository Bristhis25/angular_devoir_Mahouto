import { Injectable } from '@angular/core';
import { Todos } from '../interfaces/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  getTodos = async (): Promise<Todos[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await response.json()) ?? [];
  };
}
