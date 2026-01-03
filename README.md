<p align="center">
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/festival-culture-religion/tickets-icon.svg"
       alt="Concert seat reservation / tickets"
       width="180"/>
</p>

<h1 align="center">SeatGuard: Frontend Reservation Platform</h1>

<p align="center">
  Aplicación web moderna construida con Angular 20 y SSR para la plataforma de venta de entradas de conciertos con bloqueo de asientos en tiempo real.
</p>
      
***
## Table of contents

- [Descripción general](#descripción-general)
- [⚙️ Características principales](#️caracteristicas-principales)
- [🏛️ Arquitectura del sistema](#️arquitectura-del-sistema)
  - [Flujo de datos](#flujo-de-datos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [🛠️ Stack tecnológico](#️stack-tecnologico)
- [🧪 Guía de desarrollo y pruebas](#guía-de-desarrollo-y-pruebas)
  - [🔧 Configuración del entorno](#configuracion-del-entorno)
  - [🔄 Flujo de desarrollo](#flujo-de-desarrollo)
- [🚀 Guía de instalación y ejecución](#guía-de-instalación-y-ejecución)
- [☁️ Guía de despliegue](#️guia-de-despliegue)
- [🛠️ Scripts y automatizaciones](#️scripts-y-automatizaciones)
- [Contribuciones](#contribuciones)
  - [Convenciones de Commits](#convenciones-de-commits)
- [Licencia](#licencia)
- [📬 Contacto](#contact-anchor)

## Descripción general

**SeatGuard Frontend** es la aplicación cliente moderna de la plataforma SeatGuard, diseñada para proporcionar una experiencia de usuario excepcional en la compra de entradas de conciertos. Construida con **Angular 20** y renderizado del lado del servidor (SSR), esta aplicación se integra perfectamente con los microservicios backend para ofrecer una plataforma de reservas robusta, intuitiva y de alto rendimiento.

La aplicación implementa las mejores prácticas de desarrollo moderno, incluyendo **arquitectura basada en componentes**, **gestión de estado reactiva con Signals**, **interceptores HTTP para autenticación**, y **optimización para SEO** con Server-Side Rendering. Su diseño responsive y moderna interfaz construida con **TailwindCSS** garantiza una experiencia consistente en todos los dispositivos.

***

<a id="️caracteristicas-principales"></a>
## ⚙️ Características principales

- **Arquitectura Angular Moderna**: Construida con Angular 20, Signals y Zoneless Change Detection para rendimiento óptimo.
- **Server-Side Rendering (SSR)**: Implementación completa de SSR para mejor SEO y tiempo de carga inicial.
- **Sistema de Autenticación Seguro**: Gestión de tokens JWT con interceptores HTTP automáticos y guards de ruta.
- **Gestión de Estado Reactiva**: Uso extensivo de Signals para gestión de estado local y global.
- **Arquitectura Modular**: Estructura clara con separación de responsabilidades (features, core, shared).
- **Integración con Microservicios**: Conexión optimizada con Auth Service (NestJS) y Booking Service (Go).
- **Sistema de Proxy Integrado**: Configuración automática para manejar llamadas HTTP en producción.
- **Optimización para Producción**: Build optimizado con budgets, lazy loading y compresión de assets.
- **Testing Completo**: Configuración de Karma/Jasmine para testing unitario y de componentes.
- **Desarrollo Moderno**: Soporte para Hot Module Replacement, TypeScript estricto y Prettier.

***

<a id="️arquitectura-del-sistema"></a>
## 🏛️ Arquitectura del sistema

El siguiente diagrama ilustra la arquitectura del frontend y su integración con los servicios backend:

```
graph TD
    subgraph "Cliente"
        Browser["Navegador Web"]
    end

    subgraph "SeatGuard Frontend (Angular SSR)"
        App["Aplicación Angular"]
        Router["Router + Guards"]
        Interceptor["Auth Interceptor"]
        Services["Services Layer"]
        Components["Component Tree"]
    end

    subgraph "Backend Services"
        AuthService["Auth Service :3000"]
        BookingService["Booking Service :4000"]
    end

    subgraph "External APIs"
        Stripe["Stripe Checkout"]
    end

    Browser -- HTTP/HTTPS --> App
    App -- Navigation --> Router
    Router -- Guards --> Components
    Components -- HTTP Requests --> Interceptor
    Interceptor -- Auth Headers --> Services
    Services -- API Calls --> AuthService
    Services -- API Calls --> BookingService
    Services -- Payment Sessions --> Stripe
```

## Flujo de datos
- **Autenticación**: Flujo completo de login/logout con gestión de tokens JWT y redirección automática.
- **Navegación**: Sistema de rutas protegidas con guards (AuthGuard, NoAuthGuard) y lazy loading.
- **Gestión de Estado**: Signals para estado local y httpResource para datos del servidor.
- **Peticiones HTTP**: Interceptor automático que añade headers de autenticación y maneja proxy en producción.
- **Renderizado**: SSR para páginas públicas y CSR para contenido dinámico post-autenticación.

## Estructura del proyecto
```
seatguard-reservation-frontend/
├── src/
│   ├── app/
│   │   ├── core/                     # Lógica central reutilizable
│   │   │   ├── guards/               # Route Guards (Auth, NoAuth)
│   │   │   ├── interceptors/         # HTTP Interceptors
│   │   │   └── services/             # Servicios globales (SEO, Headers)
│   │   ├── features/                 # Módulos de funcionalidad
│   │   │   ├── auth/                 # Autenticación y registro
│   │   │   ├── events/               # Listado y detalle de eventos
│   │   │   ├── checkout/             # Proceso de compra
│   │   │   ├── my-tickets/           # Gestión de tickets del usuario
│   │   │   └── seats/                # Selección de asientos
│   │   ├── shared/                   # Componentes y utilidades compartidas
│   │   │   ├── layouts/              # Layouts principales
│   │   │   ├── components/           # Componentes UI reutilizables
│   │   │   └── interfaces/          # Tipos TypeScript compartidos
│   │   ├── app.config.ts             # Configuración de la aplicación
│   │   ├── app.routes.ts             # Definición de rutas
│   │   └── app.ts                    # Componente raíz
│   ├── environments/                 # Variables de entorno
│   ├── server.ts                     # Configuración SSR
│   └── main.ts                       # Punto de entrada
├── scripts/                          # Scripts de automatización
├── public/                           # Assets estáticos
├── api/                              # API routes para SSR
├── vercel.json                       # Configuración de despliegue
└── angular.json                      # Configuración de Angular CLI
```

<a id="️stack-tecnologico"></a>
## 🛠️ Stack tecnológico

### Frontend Core
- **Angular 20.3.0**: Framework principal con Signals y Zoneless
- **TypeScript 5.9.2**: Tipado estático y desarrollo robusto
- **RxJS 7.8.0**: Programación reactiva para gestión de streams

### UI y Estilos
- **TailwindCSS 4.1.18**: Framework de CSS utility-first
- **Angular SSR**: Renderizado del lado del servidor
- **PostCSS**: Procesamiento de CSS

### Desarrollo y Testing
- **Angular CLI**: Herramientas de desarrollo y scaffolding
- **Karma + Jasmine**: Framework de testing unitario
- **Prettier**: Formateo de código consistente

### Despliegue y Optimización
- **Vercel**: Plataforma de despliegue con SSR
- **Express**: Servidor para producción SSR
- **Angular Build Optimizer**: Optimización de bundles

<a id="guía-de-desarrollo-y-pruebas"></a>
## 🧪 Guía de desarrollo y pruebas

---

<a id="configuracion-del-entorno"></a>
## 🔧 Configuración del entorno

### Variables de Entorno

El proyecto utiliza variables de entorno configuradas automáticamente mediante scripts:

```bash
# Variables principales
production=true                            # Indica si se está en producción, o no
apiUrl=http://localhost:3000               # Auth Service
apiBookingServiceUrl=http://localhost:4000 # Booking Service
appName=SeatGuard Reservation Frontend     # Nombre de la aplicación
version=1.0.0                              # Version de la aplicación
localStorageKey=tokenAccess                # Key para localStorage
xInternalSecret=your_secret_key            # Header de seguridad
```

### Archivos de Configuración

- `environments/environement.template.ts`: Plantilla de variables
- `scripts/set-envs.js`: Script para generar archivos de entorno
- `vercel.json`: Configuración de despliegue y rewrites

---

<a id="flujo-de-desarrollo"></a>
## 🔄 Flujo de desarrollo

### 1. Configuración Inicial

```bash
# Clonar repositorio
git clone https://github.com/Lucascabral95/seatguard-reservation-frontend.git
cd seatguard-reservation-frontend

# Instalar dependencias
npm install

# Configurar entorno (opcional, usa defaults)
cp src/environments/environement.template.ts src/environments/environment.ts
```

### 2. Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run start

# Acceder a http://localhost:4200
```

### 3. Testing

```bash
# Ejecutar tests unitarios
npm run test

# Tests en modo CI (headless)
npm run test:ci

# Watch mode para desarrollo
npm run test -- --watch
```

---

<a id="guía-de-instalación-y-ejecución"></a>
## 🚀 Guía de instalación y ejecución

### Prerrequisitos

- Node.js 18+ 
- Angular CLI 20.3.7+
- Git

### Instalación Completa

```bash
# 1. Clonar el repositorio
git clone https://github.com/Lucascabral95/seatguard-reservation-frontend.git
cd seatguard-reservation-frontend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno (opcional)
npm run envs

# 4. Iniciar desarrollo
npm run start
```

### Comandos Disponibles

```bash
# Desarrollo
npm start              # Servidor de desarrollo (localhost:4200)
npm run build          # Build de producción
npm run watch          # Build en modo watch

# Testing
npm test               # Ejecutar tests
npm run test:ci        # Tests para CI/CD

# SSR
npm run build:ssr      # Build con SSR
npm run serve:ssr      # Servidor SSR
```

<a id="️guia-de-despliegue"></a>
## ☁️ Guía de despliegue

### Despliegue en Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desplegar
vercel

# 3. Configurar variables de entorno en Vercel
# - AWS_ALB_URL: URL del load balancer
# - X_INTERNAL_SECRET: Secreto interno
# - LOCAL_STORAGE_KEY: Key de localStorage
```

### Despliegue Manual

```bash
# 1. Build para producción
npm run envs
npm run build:ssr

# 2. Servir archivos
npm run serve:ssr

# 3. Configurar proxy reverso (nginx/apache) para apuntar a localhost:4000
```

### Variables de Entorno en Producción

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `AWS_ALB_URL` | URL del Load Balancer AWS | `http://localhost` |
| `X_INTERNAL_SECRET` | Header de seguridad | `SECRET_DEFAULT_LOCAL` |
| `LOCAL_STORAGE_KEY` | Key para localStorage | `tokenAccess` |
| `VERSION` | Versión de la aplicación | `1.0.0` |

<a id="️scripts-y-automatizaciones"></a>
## 🛠️ Scripts y automatizaciones

### Scripts Principales

```bash
# Desarrollo
npm start              # Iniciar servidor desarrollo
npm run build          # Build producción
npm run watch          # Build con watch

# Entorno
npm run envs           # Generar archivos de entorno

# Testing
npm test               # Tests unitarios
npm run test:ci        # Tests para CI

# SSR
npm run build:ssr      # Build con SSR
npm run serve:ssr      # Servidor SSR
```

### Configuración Automática

El script `scripts/set-envs.js` genera automáticamente los archivos de entorno basándose en:
- Variables de entorno del sistema
- Configuración de AWS ALB
- Valores por defecto para desarrollo

### Proxy y Rewrites

La configuración `vercel.json` maneja:
- Proxy automático para llamadas HTTP externas
- Rewrites para SSR
- Serving de assets estáticos
- Manejo de rutas de Angular

***

## Contribuciones

¡Las contribuciones son bienvenidas! Seguí estos pasos:

1. Hacé un fork del repositorio.
2. Creá una rama para tu feature o fix (`git checkout -b feature/nueva-funcionalidad`).
3. Realizá tus cambios y escribí pruebas si es necesario.
4. Hacé commit y push a tu rama (`git commit -m "feat: agrega nueva funcionalidad"`).
5. Abrí un Pull Request describiendo tus cambios.

### Convenciones de Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan la lógica)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

---

## Licencia

Este proyecto está bajo la licencia **MIT**.

---

<a id="contact-anchor"></a>
## 📬 Contacto

- **Autor:** Lucas Cabral
- **Email:** lucassimple@hotmail.com
- **LinkedIn:** [https://www.linkedin.com/in/lucas-gastón-cabral/](https://www.linkedin.com/in/lucas-gastón-cabral/)
- **Portfolio:** [https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/](https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/)
- **Github:** [https://github.com/Lucascabral95](https://github.com/Lucascabral95/)

---

<p align="center">
  Desarrollado con ❤️ por Lucas Cabral
</p>
