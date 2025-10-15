import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Task } from '../models/task.interface';

/**
 * Directiva estructural para filtrar tareas
 * Uso: <div *appTaskFilter="task; filter: currentFilter">
 */
@Directive({
  selector: '[appTaskFilter]'
})
export class TaskFilterDirective {
  private hasView = false;
  private currentTask: Task | null = null;
  private currentFilter: 'all' | 'completed' | 'pending' = 'all';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  /**
   * Input principal: recibe la tarea
   * TODO: Implementar la lógica para mostrar/ocultar el elemento
   * Cuando se recibe una tarea, evaluar si debe mostrarse según el filtro actual
   */
  @Input() set appTaskFilter(task: Task) {
    this.currentTask = task;
    // TODO: Llamar al método que actualiza la vista
  }

  /**
   * Input secundario: recibe el filtro
   * TODO: Implementar la lógica cuando cambia el filtro
   */
  @Input() set appTaskFilterFilter(filter: 'all' | 'completed' | 'pending') {
    this.currentFilter = filter;
    // TODO: Llamar al método que actualiza la vista
  }

  /**
   * TODO: Implementar método privado updateView()
   * Este método debe:
   * 1. Verificar si la tarea actual debe mostrarse según el filtro
   * 2. Si debe mostrarse y no hay vista: crear la vista con this.viewContainer.createEmbeddedView(this.templateRef)
   * 3. Si no debe mostrarse y hay vista: limpiar con this.viewContainer.clear()
   * 
   * Lógica del filtro:
   * - 'all': mostrar siempre
   * - 'completed': mostrar solo si task.completed === true
   * - 'pending': mostrar solo si task.completed === false
   */
  private updateView(): void {
    // TODO: Implementar la lógica de filtrado
  }
}
