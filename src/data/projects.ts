export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'React' | 'Next.js' | 'API';
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'WeatherNow',
    description: 'Real-time weather application with beautiful visualizations and 7-day forecasts.',
    longDescription: 'A comprehensive weather app built with React and OpenWeather API. Features include current conditions, hourly forecasts, air quality index, and beautiful animated weather icons.',
    image: '/projects/blog.PNG',
    category: 'API',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/husnialfarisal-tech/weather-now',
  },
  {
  id: '2',
  title: 'KKNKU',
  description: 'Platform pendaftaran KKN mahasiswa dengan sistem verifikasi dan pengelolaan data terintegrasi.',
  longDescription: 'Aplikasi web untuk memudahkan mahasiswa mendaftar KKN secara online. Dilengkapi fitur verifikasi mahasiswa, pengelolaan data peserta, manajemen dokumen, dan laporan data lengkap untuk admin.',
  image: '/projects/KKNKU.PNG',
  category: 'PHP',
  techStack: ['HTML', 'CSS', 'PHP', 'MySQL', 'phpMyAdmin'],
  liveUrl: undefined,
  githubUrl: 'https://github.com/husnialfarisal-tech/kknku',
},
  {
    id: '3',
    title: 'BlogSpace',
    description: 'Developer-focused blog platform with MDX support and dark mode.',
    longDescription: 'A modern blog platform supporting MDX for rich content. Features include syntax highlighting, table of contents, reading time estimation, and SEO optimization.',
    image: '/projects/blog.jpg',
    category: 'Next.js',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'GrayMatter', 'Rehype'],
    liveUrl: '#',
    githubUrl: 'https://github.com/husnialfarisal-tech/blog-space',
  },
  {
    id: '4',
    title: 'MovieDB',
    description: 'Discover movies and TV shows with TMDB API integration.',
    longDescription: 'A movie discovery app featuring search, filtering by genre, detailed movie information, cast details, and personalized watchlist functionality.',
    image: '/projects/movie.jpg',
    category: 'API',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'TMDB API', 'React Query'],
    liveUrl: '#',
    githubUrl: 'https://github.com/husnialfarisal-tech/movie-db',
  },
  {
    id: '5',
  title: 'Kamunara',
  description: 'Website perusahaan outsourcing software development & layanan digital terpercaya.',
  longDescription: 'Kamunara adalah perusahaan outsourcing yang bergerak sebagai penyedia layanan Software, berspesialisasi pada pengembangan Website & Aplikasi Mobile. Dibangun dengan tampilan modern dan profesional.',
  image: '/projects/KAMUNARA.PNG',
  category: 'React',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://kamunara.com',
  githubUrl: 'https://github.com/husnialfarisal-tech/weather-now',
  },
  {
    id: '6',
    title: 'DevFolio',
    description: 'Portfolio website template for developers with animations.',
    longDescription: 'This portfolio website itself! Built with Next.js 16, featuring smooth animations, dark mode, responsive design, and modern UI components.',
    image: '/projects/portfolio.jpg',
    category: 'Next.js',
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide'],
    liveUrl: '#',
    githubUrl: 'https://github.com/husnialfarisal-tech/dev-folio',
  },
];

export type ProjectCategory = 'All' | 'React' | 'Next.js' | 'API' | 'PHP';
