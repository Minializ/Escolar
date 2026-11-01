# 📚 Gestión Integral Escolar

Sistema completo de administración escolar que centraliza el registro y administración de materias, alumnos, calificaciones, asistencias, maestras y directora.

## 📋 Características

✅ Registro y gestión de alumnos  
✅ Administración de materias asignadas a maestras  
✅ Gestión de calificaciones con reportes descargables (PDF/Excel)  
✅ Control de asistencias con gráficas  
✅ Sistema de roles (maestras, directora, administrador)  
✅ Autenticación JWT segura  
✅ Gráficas interactivas de rendimiento  
✅ API documentada con Swagger  

## 🛠 Tecnologías

### Frontend
- **Angular 18** - Framework principal
- **Angular Material** - Componentes UI
- **NGX-Charts** - Gráficas interactivas
- **jsPDF & SheetJS** - Exportación de reportes

### Backend
- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para BD
- **JWT** - Autenticación
- **Swagger** - Documentación API

### Base de Datos
- **MySQL** - Base de datos relacional

## 📦 Instalación

### Requisitos previos
- Node.js 18+ (descargar de https://nodejs.org)
- MySQL 8.0+
- npm o yarn

### Pasos de instalación

1. **Clonar/Descargar el proyecto**
```bash
cd c:\Proyectos\Escuela
```

2. **Crear archivo `.env`**
```bash
cp .env.example .env
```
Editar `.env` con tus credenciales de BD

3. **Instalar dependencias**
```bash
npm install
```

4. **Iniciar en desarrollo**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
# El servidor estará en http://localhost:3000
# Documentación: http://localhost:3000/api/docs
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
# La app estará en http://localhost:4200
```

## 📁 Estructura del Proyecto

```
gestion-integral-escolar/
├── frontend/                 # Aplicación Angular
│   ├── src/
│   │   ├── app/             # Componentes principales
│   │   ├── assets/          # Recursos estáticos
│   │   └── main.ts          # Entrada de la app
│   ├── package.json
│   └── tsconfig.json
├── backend/                  # API NestJS
│   ├── src/
│   │   ├── modules/         # Módulos de features
│   │   ├── common/          # Utilidades compartidas
│   │   ├── app.module.ts    # Módulo principal
│   │   └── main.ts          # Entrada de la app
│   ├── package.json
│   └── tsconfig.json
├── .env.example
└── package.json             # Configuración del monorepo
```

## 🚀 Scripts disponibles

### Desde la raíz del proyecto:
```bash
npm run dev          # Inicia backend y frontend en paralelo
npm run build        # Compila frontend y backend
npm run test         # Ejecuta tests de ambos
npm run lint         # Ejecuta linting en ambos
```

### Backend específico:
```bash
npm run dev --workspace=backend      # Modo desarrollo
npm run build --workspace=backend    # Compilar
npm test --workspace=backend         # Tests
```

### Frontend específico:
```bash
npm run dev --workspace=frontend     # Modo desarrollo
npm run build --workspace=frontend   # Compilar
npm test --workspace=frontend        # Tests
```

## 🔐 Variables de entorno

Crear `.env` basado en `.env.example`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=gestion_escolar
JWT_SECRET=tu-clave-secreta-muy-segura
NODE_ENV=development
```

## 📊 Módulos Backend (por implementar)

- `users` - Gestión de usuarios y autenticación
- `alumnos` - CRUD de alumnos
- `materias` - Gestión de materias
- `calificaciones` - Registro de calificaciones
- `asistencias` - Control de asistencias
- `reportes` - Generación de reportes

## 🎨 Componentes Frontend (por implementar)

- `dashboard` - Panel principal
- `alumnos` - Gestión de alumnos
- `materias` - Gestión de materias
- `calificaciones` - Ingreso y visualización de calificaciones
- `asistencias` - Control de asistencias
- `reportes` - Generación y descarga de reportes

## 🔧 Configuración de BD

1. Crear BD en MySQL:
```sql
CREATE DATABASE gestion_escolar;
USE gestion_escolar;
```

2. Las tablas se crearán automáticamente con TypeORM en modo desarrollo

## 📖 Documentación API

Una vez iniciado el backend, acceder a:
```
http://localhost:3000/api/docs
```

## 🧪 Testing

```bash
# Tests unitarios backend
npm test --workspace=backend

# Tests unitarios frontend
npm test --workspace=frontend

# Con cobertura
npm run test:cov --workspace=backend
```

## 📝 Próximos pasos

1. Implementar módulos del backend
2. Crear componentes del frontend
3. Integrar autenticación JWT
4. Implementar exportación de reportes
5. Agregar gráficas de asistencia y desempeño
6. Configurar CI/CD

## 🤝 Contribuir

Por favor, crear una rama por feature:
```bash
git checkout -b feature/nombre-feature
git commit -m "feat: descripción del cambio"
git push origin feature/nombre-feature
```

## 📄 Licencia

MIT

## 👤 Autor

Ramón Corona

---

**¡Proyecto listo para desarrollar! 🚀**
