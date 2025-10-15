import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  loading = false;
  currentFilter: 'all' | 'completed' | 'pending' = 'all';
  private taskSubscription?: Subscription;
  
  constructor(private taskService: TaskService) {}
  
  /**
   * TODO: Implementar ngOnInit
   * 1. Establecer loading = true
   * 2. Llamar al servicio para obtener tareas
   * 3. Suscribirse y asignar las tareas al array this.tasks
   * 4. Establecer loading = false cuando termine (tanto en success como en error)
   * 5. En caso de error, mostrarlo en console.error
   * 6. Guardar la suscripción en this.taskSubscription
   */
  ngOnInit(): void {
    // TODO: Implementar
  }
  
  /**
   * TODO: Implementar ngOnDestroy
   * Desuscribirse de taskSubscription si existe
   */
  ngOnDestroy(): void {
    // TODO: Implementar
  }
  
  /**
   * TODO: Implementar toggleTask
   * Cambiar el estado completed de la tarea recibida
   */
  toggleTask(task: Task): void {
    // TODO: Implementar
  }
  
  /**
   * TODO: Implementar getter completedCount
   * Retornar el número de tareas completadas
   * PISTA: usar filter sobre this.tasks
   */
  get completedCount(): number {
    // TODO: Implementar
    return 0;
  }
  
  /**
   * TODO: Implementar getter pendingCount
   * Retornar el número de tareas pendientes
   */
  get pendingCount(): number {
    // TODO: Implementar
    return 0;
  }
  
  /**
   * TODO: Implementar getter totalCount
   * Retornar el total de tareas
   */
  get totalCount(): number {
    // TODO: Implementar
    return 0;
  }
}
