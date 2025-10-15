/**
 * Interface para el modelo de Tarea
 * Representa la estructura de datos de una tarea de la API
 */
export interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
