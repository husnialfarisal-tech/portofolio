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
    image: '/projects/weather.jpg',
    category: 'API',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/husnialfarisal-tech/weather-now',
  },
  {
    id: '2',
    title: 'ShopNext',
    description: 'Modern e-commerce platform with seamless checkout experience.',
    longDescription: 'A full-featured e-commerce platform built with Next.js. Includes product catalog, shopping cart, user authentication, order tracking, and payment integration.',
    image: '/projects/shop.jpg',
    category: 'Next.js',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
    liveUrl: '#',
    githubUrl: 'https://github.com/husnialfarisal-tech/shop-next',
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
    title: 'TaskFlow',
    description: 'Intuitive task management with drag-and-drop functionality.',
    longDescription: 'A powerful todo app with drag-and-drop task organization, categories, due dates, reminders, and local storage for offline access.',
    image: '/projects/taskflow.jpg',
    category: 'React',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'DndKit', 'Zustand'],
    liveUrl: '#',
    githubUrl: 'https://github.com/husnialfarisal-tech/task-flow',
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

export type ProjectCategory = 'All' | 'React' | 'Next.js' | 'API';
