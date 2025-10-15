#!/bin/bash

# Script para subir el proyecto a GitHub
# IMPORTANTE: Debes tener GitHub CLI instalado (gh) o configurar tus credenciales de git

echo "📦 Preparando el proyecto Angular-ToDo para GitHub..."

# Inicializar git si no existe
if [ ! -d ".git" ]; then
    git init
    echo "✅ Repositorio git inicializado"
fi

# Agregar todos los archivos
git add .
echo "✅ Archivos agregados al staging"

# Crear commit inicial
git commit -m "feat: Initial commit - Angular technical test base structure

- Angular 18 project setup
- Task list component with TODOs
- HTTP interceptor skeleton
- Custom structural directive skeleton  
- Task service with API integration
- Complete project structure for technical assessment
- 60-minute test with clear requirements"

echo "✅ Commit creado"

echo ""
echo "📝 Ahora necesitas:"
echo "1. Crear un nuevo repositorio en GitHub.com"
echo "2. Ejecutar los siguientes comandos:"
echo ""
echo "git remote add origin https://github.com/TU_USUARIO/Angular-ToDo.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "O si tienes GitHub CLI instalado, ejecuta:"
echo "gh repo create Angular-ToDo --public --source=. --remote=origin --push"
