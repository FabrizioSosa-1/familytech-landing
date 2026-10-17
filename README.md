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
