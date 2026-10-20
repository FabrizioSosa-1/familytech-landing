# Family Tech · Landing page

React + Vite + Tailwind CSS + TypeScript + lucide-react.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ listo para subir a Vercel, Netlify o cualquier hosting
```

- Textos, servicios, marcas y contacto: `src/data/site.ts`
  (correo, dirección, horario y web están en `null` y se muestran como "Por confirmar").
- Fotos y logo: `public/img/` (salen del brochure; reemplaza el archivo con el mismo nombre para cambiar una foto).
- Secciones: `src/components/Sections.tsx`. Shell, navegación e indicadores: `src/App.tsx`.

## Higgsfield API (generación de imagen/video/audio con IA)

Funciones serverless en `api/higgsfield/` que exponen la API de Higgsfield
(https://docs.higgsfield.ai) sin exponer la API key al navegador. Funcionan
con **cualquier modelo** de Higgsfield: el modelo se pasa como parámetro, no
está hardcodeado.

1. Copia `.env.example` a `.env` y pon tu `HF_CREDENTIALS`
   (`tu-api-key-id:tu-api-key-secret`, desde https://console.higgsfield.ai).
   En Vercel, agrégala como variable de entorno del proyecto (no se sube a git).
2. Desde el frontend, usa `src/lib/higgsfield.ts`:

   ```ts
   import { generate, pollUntilDone } from "./lib/higgsfield";

   const { request_id } = await generate("higgsfield-ai/soul/v2/standard", {
     prompt: "Editorial portrait in soft daylight",
   });
   const result = await pollUntilDone(request_id);
   if (result.status === "completed") {
     console.log(result.images?.[0]?.url);
   }
   ```

   El id de modelo (`"higgsfield-ai/soul/v2/standard"` en el ejemplo) se
   descubre en https://console.higgsfield.ai — cualquiera que figure ahí
   funciona igual, solo cambia el string y el `input` según lo que pida ese
   modelo.
3. Rutas disponibles: `POST /api/higgsfield/generate` (envía el trabajo),
   `GET /api/higgsfield/status?request_id=...` (consulta estado/resultado),
   `POST /api/higgsfield/cancel` (cancela uno que sigue en cola).
