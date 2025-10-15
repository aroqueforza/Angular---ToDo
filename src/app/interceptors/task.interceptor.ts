import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable()
export class TaskInterceptor implements HttpInterceptor {
  
  /**
   * Intercepta todas las peticiones HTTP
   * TODO: Implementar los siguientes requisitos:
   * 1. Clonar la request y agregar el header 'X-App-Version': '1.0.0'
   * 2. Agregar un delay de 1500ms a la respuesta usando pipe y delay
   * 3. Capturar errores y mostrarlos en consola con formato:
   *    "[ERROR HTTP]: Status {status} - URL: {url}"
   * 4. Re-lanzar el error después de loguearlo
   * 
   * PISTAS:
   * - Usar pipe con delay(1500) y catchError
   * - En catchError, loguear el error y usar throwError para re-lanzarlo
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO: Implementar
    
    // Paso 1: Clonar la request y agregar header
    
    // Paso 2: Pasar la request clonada al siguiente handler
    // Paso 3: Agregar delay y manejo de errores con pipe
    
    throw new Error('Método no implementado');
  }
}
