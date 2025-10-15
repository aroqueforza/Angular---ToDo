import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFilterDirective } from './directives/task-filter.directive';
import { TaskInterceptor } from './interceptors/task.interceptor';

/**
 * Módulo principal de la aplicación
 * TODO: Verificar que todos los componentes, directivas y servicios estén correctamente registrados
 */
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFilterDirective  // La directiva debe estar declarada aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    // Necesario para hacer peticiones HTTP
    FormsModule         // Necesario para usar ngModel en los formularios
  ],
  providers: [
    // TODO: Verificar que el interceptor esté correctamente registrado
    // IMPORTANTE: No olvidar multi: true
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TaskInterceptor,
      multi: true  // CRÍTICO: multi debe ser true para interceptores
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
