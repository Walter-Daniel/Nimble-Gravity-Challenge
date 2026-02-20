# Nimble Gravity — Challenge

Aplicación React + TypeScript + Vite que muestra una lista de candidatos y permite postularse a ofertas de trabajo.

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

| Variable            | Descripción                          |
| ------------------- | ------------------------------------ |
| `VITE_BASE_URL`     | URL base de la API (sin slash final) |
| `VITE_APP_ID`       | ID de la aplicación                  |
| `VITE_CANDIDATE_ID` | ID del candidato                     |
| `VITE_UUID`         | UUID de sesión o entidad             |

Ejemplo:

```env
VITE_BASE_URL=https://api.ejemplo.com
VITE_APP_ID=mi-app-id
VITE_CANDIDATE_ID=123
VITE_UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

> Las variables deben tener el prefijo `VITE_` para ser expuestas al cliente por Vite.

## Scripts disponibles

| Comando           | Descripción                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo      |
| `npm run build`   | Compila TypeScript y genera el bundle |
| `npm run preview` | Previsualiza el build de producción   |
| `npm run lint`    | Ejecuta ESLint                        |

## Estructura del proyecto

```
src/
├── components/       # Componentes React
│   ├── CandidatesList.tsx
│   └── Form.tsx
├── config/
│   └── env.ts        # Variables de entorno tipadas
├── App.tsx
└── main.tsx
```
