import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFilterDirective } from './directives/task-filter.directive';
import { TaskInterceptor } from './interceptors/task.interceptor';

/**
 * Módulo principal de la aplicación
 */
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFilterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    // TODO: Registrar el interceptor HTTP aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
