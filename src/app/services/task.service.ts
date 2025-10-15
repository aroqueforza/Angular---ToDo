import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task.interface';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  
  constructor(private http: HttpClient) {}
  
  /**
   * Obtiene las tareas de la API
   * TODO: Implementar el método getTasks
   * - Hacer una petición GET a la API
   * - Limitar el resultado a las primeras 20 tareas usando pipe y map
   * - Retornar el Observable<Task[]>
   * PISTA: usar this.http.get<Task[]>(url).pipe(map(...))
   */
  getTasks(): Observable<Task[]> {
    // TODO: Implementar
    throw new Error('Método no implementado');
  }
}
