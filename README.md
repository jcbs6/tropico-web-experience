# Trópico Restobar — Sitio web oficial

Sitio web desarrollado para **Trópico Restobar**, restaurante ubicado en Playa de San Juan (Alicante).

🌐 **Web en producción:** (https://www.tropicorestobar.com)

---

## 📋 Sobre el proyecto

Desarrollo completo del sitio web del restaurante, desde el diseño de la interfaz hasta el despliegue en producción. El sitio está orientado a presentar el establecimiento, su propuesta gastronómica y facilitar el contacto y las reservas a los clientes.

El proyecto se desarrolló como un encargo real para un cliente, cubriendo todo el ciclo: definición de requisitos, diseño, implementación, integración con servicios externos, despliegue y mantenimiento.

---

## ✨ Funcionalidades

- Diseño responsive (móvil, tablet y escritorio)
- Soporte multiidioma (ES / EN)
- Carta online
- Galería de imágenes
- Sistema de reservas
- Formulario de contacto
- Integración con Google Reviews (valoraciones en tiempo real)
- Integración con redes sociales
- Optimización SEO básica
- Despliegue con routing SPA

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|------------|
| Frontend | React + TypeScript |
| Build tool | Vite |
| Estilos | Tailwind CSS |
| Testing | Vitest |
| Despliegue | Vercel |
| API externa | Google Places API (reviews) |

---

## 🏗️ Arquitectura

El proyecto sigue una estructura modular basada en componentes React:

tropico-web-experience/
│
├── api/ → Serverless function (Google Reviews)
│ └── google-reviews.ts
│
├── public/ → Recursos estáticos
│
├── src/ → Código fuente (componentes, páginas, lógica)
│
├── index.html → Punto de entrada
├── vite.config.ts → Configuración de Vite
├── tailwind.config.ts → Configuración de Tailwind
├── vercel.json → Configuración de routing SPA
└── package.json → Dependencias y scripts

## 👨‍💻 Mi rol
Diseño y desarrollo completo del sitio web para un cliente real:

- Definición de la estructura y contenidos con el cliente
- Diseño de la interfaz y experiencia de usuario
- Implementación frontend con React + TypeScript + Tailwind
- Integración con Google Places API para mostrar valoraciones
- Soporte multiidioma
- Despliegue en Vercel y configuración de dominio
- Mantenimiento y actualizaciones posteriores a la publicación      

## 📄 Licencia
Todos los derechos reservados. Proyecto desarrollado para Trópico Restobar.
El código se publica únicamente con fines de portfolio profesional.
