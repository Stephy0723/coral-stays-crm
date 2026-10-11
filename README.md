# Coral Stays · Web y CRM

Web de alojamientos en Punta Cana con catálogo, galerías, perfiles de vendedores, mapas, ES/DOP y EN/USD, tema claro/oscuro y CRM de propiedades, consultas, clientes, reservas y disponibilidad.

## Desarrollo

Requiere Node.js >=22.13 y pnpm 11.25.

```sh
pnpm install
pnpm dev
pnpm build
```

El proyecto utiliza Vinext, Cloudflare D1 (binding `DB`) y R2 (`BUCKET`). El esquema y las migraciones están en `db/` y `drizzle/`. El despliegue original usa Sites y autenticación de ChatGPT; fuera de ese entorno hay que configurar bindings, aplicar migraciones y adaptar la autenticación. El acceso inicial del administrador se configura en `app/api/[...path]/route.ts`.

## Estado

Las consultas y solicitudes de reserva se guardan en la base de datos. Los pagos son registros manuales: todavía no hay pasarela de cobro real. El catálogo inicial contiene propiedades de ejemplo. Los datos de producción (clientes, reservas y archivos subidos al CRM) no están incluidos en este repositorio.

## Recursos

Fotos de Unsplash. Vídeo de playa: Michal Marek / Pexels, video 3223480. Recursos locales en `public/assets/`.

Este respaldo incluye la corrección del bloqueo de carga del CRM.
