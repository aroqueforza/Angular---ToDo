# Prueba Técnica Angular - Gestor de Tareas

## 📋 Descripción
Aplicación de gestión de tareas que consume una API REST. El candidato debe completar la implementación siguiendo los requisitos técnicos especificados.

## ⏱️ Tiempo
**60 minutos**

## 🚀 Instrucciones de Inicio

1. **Clonar o descargar el repositorio**
```bash
git clone [url-del-repo]
cd Angular-ToDo
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar la aplicación**
```bash
ng serve
```

4. **Abrir en el navegador**
```
http://localhost:4200
```

## 📝 Tareas a Completar

### ✅ Requisitos Funcionales
1. **Listado de Tareas**: Consumir y mostrar las primeras 20 tareas de la API
2. **Cambio de Estado**: Permitir marcar/desmarcar tareas como completadas
3. **Filtrado**: Implementar filtro por estado (Todas/Completadas/Pendientes)
4. **Estadísticas**: Mostrar contador de tareas totales, completadas y pendientes

### 🔧 Requisitos Técnicos

#### 1. Servicio de Tareas (`task.service.ts`)
- [ ] Implementar método `getTasks()` que:
  - Haga petición GET a `https://jsonplaceholder.typicode.com/todos`
  - Limite resultado a 20 tareas
  - Retorne `Observable<Task[]>`

#### 2. Interceptor HTTP (`task.interceptor.ts`)
- [ ] Implementar la lógica del interceptor con los siguientes requisitos:
  - Agregar header `'X-App-Version': '1.0.0'` a todas las peticiones
  - Simular delay de 1500ms en las respuestas
  - Capturar y loguear errores con formato: `[ERROR HTTP]: Status {status} - URL: {url}`
- [ ] Registrar el interceptor correctamente en `app.module.ts`

#### 3. Directiva Estructural (`task-filter.directive.ts`)
- [ ] Implementar directiva `*appTaskFilter` que:
  - Reciba una tarea y un filtro
  - Muestre/oculte elementos según el filtro
  - Use `TemplateRef` y `ViewContainerRef`
  - Sintaxis: `*appTaskFilter="task; filter: currentFilter"`

#### 4. Componente Principal (`task-list.component.ts`)
- [ ] Implementar `ngOnInit()` para cargar tareas
- [ ] Implementar `toggleTask()` para cambiar estado
- [ ] Implementar getters para estadísticas
- [ ] Manejar correctamente las suscripciones

## 🎯 Criterios de Evaluación

| Aspecto | Peso | Descripción |
|---------|------|-------------|
| **Funcionalidad** | 30% | La aplicación funciona correctamente |
| **Interceptor** | 25% | Implementación correcta del interceptor |
| **Directiva Estructural** | 25% | Directiva funcionando con TemplateRef/ViewContainerRef |
| **Arquitectura** | 10% | Separación de responsabilidades |
| **Código Limpio** | 10% | TypeScript, manejo de Observables |

## 💡 Pistas Generales

- **RxJS**: Recuerda usar operadores como `pipe`, `map`, `delay`, `catchError`
- **Interceptores**: Necesitan ser registrados como providers con una configuración especial
- **Directivas Estructurales**: Requieren `TemplateRef` y `ViewContainerRef` para manipular el DOM
- **Observables**: No olvides manejar las suscripciones para evitar memory leaks

## ⚠️ Errores Comunes a Evitar

1. **Interceptor**: Debe ser registrado correctamente en el módulo
2. **Directiva**: El `@Input` debe implementarse de forma especial para funcionar con `*`
3. **Servicio**: Retornar Observables, no suscribirse dentro del servicio
4. **Componente**: Gestionar correctamente el ciclo de vida de las suscripciones

## 📦 Estructura del Proyecto
```
src/app/
├── components/
│   └── task-list/
│       ├── task-list.component.ts
│       ├── task-list.component.html
│       └── task-list.component.css
├── services/
│   └── task.service.ts
├── interceptors/
│   └── task.interceptor.ts
├── directives/
│   └── task-filter.directive.ts
├── models/
│   └── task.interface.ts
└── app.module.ts
```

## 🔍 Archivos a Modificar

Los siguientes archivos contienen comentarios `// TODO:` que indican qué implementar:

1. **`src/app/services/task.service.ts`**
   - Implementar llamada a la API

2. **`src/app/interceptors/task.interceptor.ts`**
   - Implementar lógica del interceptor

3. **`src/app/directives/task-filter.directive.ts`**
   - Implementar lógica de filtrado

4. **`src/app/components/task-list/task-list.component.ts`**
   - Implementar métodos del componente

5. **`src/app/app.module.ts`**
   - Registrar el interceptor en el array de providers

## 🏁 Validación de la Entrega

### El proyecto está completo cuando:
- ✅ Se muestran 20 tareas de la API
- ✅ Se puede cambiar el estado de las tareas
- ✅ El filtro funciona correctamente
- ✅ Las estadísticas se actualizan en tiempo real
- ✅ Se ve "Cargando..." durante 1.5 segundos (interceptor)
- ✅ En la consola se ve el header personalizado en las peticiones
- ✅ Los errores HTTP se loguean en la consola

### Para verificar el interceptor:
1. Abrir las DevTools del navegador (F12)
2. Ir a la pestaña Network
3. Verificar que las peticiones tienen el header `X-App-Version: 1.0.0`
4. Verificar que hay un delay de 1.5 segundos

## 📚 Recursos Permitidos

- Documentación oficial de Angular: https://angular.io/docs
- Documentación de RxJS: https://rxjs.dev/
- Documentación de TypeScript: https://www.typescriptlang.org/docs/

## ❌ NO Permitido

- Usar librerías externas no incluidas
- Modificar `app.module.ts` (excepto para verificar el interceptor)
- Cambiar la estructura de carpetas
- Usar ChatGPT, Copilot u otras IAs durante la prueba

---

**¡Buena suerte! 🍀**

*Recuerda: El código ya tiene la estructura base. Solo necesitas completar los TODOs.*
