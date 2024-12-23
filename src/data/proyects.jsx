import one_logo from '../assets/images/proyect_logos/onecode.webp';
import mapu_logo from '../assets/images/proyect_logos/mapukimun_logo.webp';
import quantum_logo from '../assets/images/proyect_logos/quantum_logo.webp';
import eride_logo from '../assets/images/proyect_logos/eride-logo.webp';
import tailPalette from '../assets/images/proyect_logos/paleteLogo.webp';

import mapuImg from '../assets/images/proyect_images/mapu.webp';
import tailwindImg from '../assets/images/proyect_images/pallete.webp';
import oneCodeImg from '../assets/images/proyect_images/oncecode.webp';
import quantumImg from '../assets/images/proyect_images/quantum.webp';
import erideImg from '../assets/images/proyect_images/eride_image.webp';

import { NextjsSVg, TailwindSvg, MongodbSVg, ReactSvg, TypescriptSvg, NodejsSvg, JestSvg } from '../assets/svg/SocialIcons';

export const PROYECT_CARDS = [
  {
    title: 'Mapu Kimun',
    subtitle: { es: 'Colección de especies de Neuquén', eng: 'Neuquen species collection' },
    description: {
      es: '¡Descubrí Neuquén como nunca antes! Una recopilación única de flora y fauna con filtros, juegos interactivos y datos diarios sobre especies fascinantes.',
      eng: 'Discover Neuquen like never before! A unique collection of flora and fauna with filters, interactive games, and daily insights on fascinating species.',
    },
    href: '/mapukimun',
    website: 'https://mapukimun.vercel.app/',
    image: mapuImg,
    date: '10/2024',
    logo: mapu_logo,
    video: undefined,
    github: undefined,
    stack: [
      { image: <NextjsSVg />, name: 'NextJs' },
      { image: <TailwindSvg />, name: 'Tailwind' },
      { image: <MongodbSVg />, name: 'MongoDb' },
      { image: <TypescriptSvg />, name: 'Typescript' },
      { image: <NodejsSvg />, name: 'NodeJs' },
    ],
    docs: {
      title: 'Mapukimun',
      about: '',
      stack: ['']
    }
  },
  {
    title: 'OneCode',
    subtitle: { es: 'Javascript Sandbox', eng: 'Javascript Playground' },
    description: {
      es: 'Este playground de JS, construido con Monaco, permite realizar fetching de datos, agregar snippets y guardar tu código localmente, todo de forma sencilla y enfocada.',
      eng: 'This playground, built with Monaco, allows data fetching, adding snippets, and saving your code locally, all in a simple and focused way.',
    },
    image: oneCodeImg,
    date: '12/2024',
    logo: one_logo,
    video: undefined,
    github: 'https://github.com/pa-ku/one_code',
    documentation: 'eride',
    href: undefined,
    website: 'https://1code.vercel.app/',
    stack: [
      { image: <ReactSvg />, name: 'React' },
      { image: <TailwindSvg />, name: 'Tailwind' },
      { image: <MongodbSVg />, name: 'MongoDb' },
      { image: <JestSvg />, name: 'Jest' },
    ],
  },
  {
    title: 'E-ride',
    subtitle: { es: 'Tienda de monopatines eléctricos', eng: 'Electric scooter store' },
    description: {
      es: 'Ecommerce de monopatines eléctricos con compras online a través de Mercado Pago, validación de usuarios, gestión de favoritos y una interfaz administrativa con funcionalidad CRUD para productos. ',
      eng: 'Electric scooter e-commerce with online purchases through Mercado Pago, user validation, favorites management, and an admin interface with CRUD functionality for products.',
    },
    image: erideImg,
    date: '01/2024',
    logo: eride_logo,
    video: undefined,
    github: 'https://github.com/pa-ku/eride_client',
    documentation: 'eride',
    href: undefined,
    website: 'https://eridestore.vercel.app/',
    stack: [
      { image: <ReactSvg />, name: 'React' },
      { image: <TailwindSvg />, name: 'Tailwind' },
      { image: <NodejsSvg />, name: 'NodeJS' },
      { image: <MongodbSVg />, name: 'MongoDb' },
    ],
  },
  {
    title: 'Quantum Ui',
    subtitle: { es: 'Sistema de diseño ', eng: 'Design system' },
    description: {
      es: 'Design system enfocado en facilitar el uso de componentes con Tailwind y React. Ofrece elementos diseñados con accesibilidad en mente, priorizando etiquetas HTML nativas y logrando alta configurabilidad con el menor código posible.',
      eng: 'Design system focused on facilitating the use of components with Tailwind and React. It offers elements designed with accessibility in mind, prioritizing native HTML tags and achieving high configurability with minimal code.',
    },
    date: '06/2024',
    image: quantumImg,
    logo: quantum_logo,
    video: undefined,
    github: 'https://github.com/pa-ku/quantum_design',
    href: undefined,
    website: 'https://quantumui.netlify.app',
    stack: [
      { image: <ReactSvg />, name: 'React' },
      { image: <TailwindSvg />, name: 'Tailwind' },
    ],
  },
  {
    title: 'Tail Palette',
    subtitle: { es: 'Creador de paletas de colores', eng: 'Color palette creator' },
    description: {
      es: '¡Crea tu paleta en un solo lugar! Ingresa un color y obtén toda la estructura lista para usar con variables CSS o Tailwind. Además, puedes extraer colores directamente de una imagen.',
      eng: 'Create your palette in one place! Enter a color and get the entire structure ready to use with CSS or Tailwind variables. Additionally, you can extract colors directly from an image.',
    },
    image: tailwindImg,
    date: '07/2024',
    logo: tailPalette,
    video: undefined,
    github: 'https://github.com/pa-ku/tailwind_palete',
    href: undefined,
    website: 'https://tailpalette.vercel.app/',
    stack: [
      { image: <ReactSvg />, name: 'React' },
      { image: <TailwindSvg />, name: 'Tailwind' },
    ],
  },
];
