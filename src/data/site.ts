// Datos de Family Tech. Edita aquí textos, contacto y servicios.
// Los valores PENDIENTE se muestran como "Por confirmar" en la página.

export const PENDIENTE = null

export const empresa = {
  nombre: 'Family Tech',
  razon: 'Family Tech Integrators',
  ruc: '20613563548',
  claim: 'Soluciones tecnológicas integrales para empresas',
  whatsapp: '+51 951 543 639',
  whatsappUrl:
    'https://wa.me/51951543639?text=' +
    encodeURIComponent('Hola Family Tech, quiero agendar una visita técnica.'),
  direccion: 'Doña Gloria 132, Urb. Los Rosales, Surco, Lima',
  correo: 'familytechintegrators@gmail.com',
  horario: '10:00 a.m. – 6:00 p.m.',
  web: PENDIENTE as string | null,
}

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

export type Infra = {
  id: string
  titulo: string
  bajada: string
  detalle: string
  incluye: string[]
  marcas: string[]
  img: string
}

export const infraestructura: Infra[] = [
  {
    id: 'redes',
    titulo: 'Redes y Wi-Fi',
    bajada: 'Cobertura pareja en toda tu sede',
    detalle:
      'Access points, switches y routers configurados para que la señal llegue igual a cada oficina, almacén y sala de reuniones.',
    incluye: ['Estudio de cobertura', 'Access points y controladoras', 'Switches PoE y routers', 'Firewall y VLANs'],
    marcas: ['Cisco', 'Aruba', 'Fortinet', 'Ubiquiti', 'TP-Link Omada', 'MikroTik'],
    img: 'img/redes.webp',
  },
  {
    id: 'cableado',
    titulo: 'Cableado estructurado',
    bajada: 'Puntos de red ordenados y certificados',
    detalle:
      'Patch panel, canaletas y puntos de red ordenados, identificados y certificados, en cobre Cat 6 / 6A y fibra óptica.',
    incluye: ['Puntos Cat 6 / 6A', 'Fibra óptica', 'Patch panel y patch cords', 'Etiquetado y certificación'],
    marcas: ['Panduit', 'CommScope', 'Furukawa', 'Nexans', 'Dixon'],
    img: 'img/cableado.webp',
  },
  {
    id: 'servidores',
    titulo: 'Servidores y racks',
    bajada: 'Tu centro de datos en orden',
    detalle:
      'Instalación y organización de servidores, racks y gabinetes de comunicaciones, con PDU, ventilación y gestión de cables.',
    incluye: ['Servidores rack y torre', 'Racks y gabinetes', 'PDU y ventilación', 'Licenciamiento'],
    marcas: ['Lenovo ThinkSystem', 'Dell PowerEdge', 'HPE ProLiant'],
    img: 'img/servidores.webp',
  },
  {
    id: 'energia',
    titulo: 'Energía y UPS',
    bajada: 'Respaldo ante cortes y picos',
    detalle:
      'Respaldo eléctrico y protección contra cortes, picos y bajones de tensión, dimensionado según la carga real de tus equipos.',
    incluye: ['UPS monofásicas y trifásicas', 'Transformadores de aislamiento', 'Tableros eléctricos', 'Cálculo de autonomía'],
    marcas: ['APC Schneider', 'Vertiv', 'Elise', 'Tripp Lite'],
    img: 'img/ups.webp',
  },
  {
    id: 'camaras',
    titulo: 'Cámaras de seguridad',
    bajada: 'Videovigilancia con grabación continua',
    detalle:
      'Videovigilancia IP con grabación continua y monitoreo de tu local, almacén y equipos desde el celular.',
    incluye: ['Cámaras IP', 'NVR y almacenamiento', 'Monitoreo remoto', 'Analítica de video'],
    marcas: ['Hikvision', 'Dahua'],
    img: 'img/camaras.webp',
  },
  {
    id: 'clima',
    titulo: 'Climatización',
    bajada: 'Oficinas y cuartos de servidores',
    detalle:
      'Instalación y mantenimiento de aire acondicionado para oficinas y cuartos de servidores, calculado según la carga térmica (BTU/h).',
    incluye: ['Aire de confort', 'Aire de precisión', 'Cálculo de carga térmica', 'Mantenimiento'],
    marcas: ['LG', 'Daikin', 'Vertiv'],
    img: 'img/clima.webp',
  },
]

export const soluciones = [
  {
    icon: 'consultoria',
    titulo: 'Consultoría TI',
    texto: 'Estrategia tecnológica, modernización, migración a la nube y adopción de nuevos sistemas.',
  },
  {
    icon: 'ciber',
    titulo: 'Ciberseguridad',
    texto: 'Firewalls, monitoreo continuo y buenas prácticas para proteger la información de tu empresa.',
  },
  {
    icon: 'equipos',
    titulo: 'Venta de equipos',
    texto: 'Laptops, PCs, servidores y equipos de red de marcas líderes, con garantía y asesoría.',
  },
  {
    icon: 'tecnico',
    titulo: 'Servicio técnico',
    texto: 'Mantenimiento preventivo y correctivo de laptops, PCs, impresoras y servidores.',
  },
  {
    icon: 'video',
    titulo: 'Videoconferencia',
    texto: 'Salas de reuniones con Logitech MeetUp: video, audio y conexión simple para equipos híbridos.',
  },
  {
    icon: 'acceso',
    titulo: 'Control de acceso',
    texto: 'Soluciones DESKO de identificación, validación de documentos y kioscos de autoservicio.',
  },
] as const

export const mantenimiento = ['Aires acondicionados', 'UPS', 'Cámaras de seguridad', 'Equipos tecnológicos']

export const razones = [
  { titulo: 'Un solo proveedor', texto: 'Redes, energía, seguridad y equipos con un único responsable.' },
  { titulo: 'Equipo técnico propio', texto: 'Diseñamos, instalamos y configuramos con nuestro personal.' },
  { titulo: 'Marcas líderes', texto: 'Trabajamos con fabricantes reconocidos y garantía real.' },
  { titulo: 'Soporte cercano', texto: 'Contratos de mantenimiento preventivo y correctivo.' },
]

export const proceso = [
  { titulo: 'Diagnóstico', texto: 'Visita técnica y levantamiento de lo que ya tienes y lo que necesitas.' },
  { titulo: 'Diseño', texto: 'Solución a la medida, con opciones según tu presupuesto.' },
  { titulo: 'Instalación', texto: 'Ejecución ordenada y certificada, sin detener tu operación.' },
  { titulo: 'Soporte', texto: 'Acompañamiento continuo y mantenimiento programado.' },
]

export const trabajos = [
  { img: 'img/obra-rack.webp', texto: 'Gabinete de comunicaciones instalado' },
  { img: 'img/obra-patch.webp', texto: 'Patch panel ordenado y peinado' },
  { img: 'img/obra-clima.webp', texto: 'Condensadora LG Dual Inverter' },
  { img: 'img/obra-switch.webp', texto: 'Montaje de switch' },
  { img: 'img/obra-ups.webp', texto: 'Puesta en marcha de UPS' },
  { img: 'img/obra-rack-cctv.webp', texto: 'Rack de CCTV y monitoreo' },
]
