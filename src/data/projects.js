/**
 * Featured projects — drives the Projects section grid and filtering.
 * `category` maps to the filter tabs: fullstack | frontend | ai
 */
export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'ai', label: 'Python & AI' },
]

export const projects = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    category: 'frontend',
    categoryLabel: 'Frontend & UI',
    description:
      'Modern responsive portfolio with a warm, glassmorphism design, interactive elements, and smooth animations to showcase projects and skills.',
    image: 'assets/projects/portfolio_website.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yRaccoon/cs_portfolio',
    demoUrl: 'https://yraccoon.github.io/cs_portfolio/',
  },
  {
    id: 'arduino-dht11-monitor',
    title: 'Arduino DHT11 to C# Serial Monitor',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description:
      'Real-time temperature and humidity monitoring system with an Arduino DHT11 sensor and a custom C# desktop application for live data visualization.',
    image: 'assets/projects/arduino_dht11_monitor.png',
    tags: ['Arduino', 'C#', '.NET', 'Serial Comms'],
    githubUrl: 'https://github.com/yRaccoon/arduino_dht11_monitor',
    demoUrl: null,
  },
  {
    id: 'class-schedule-creator',
    title: 'Class Schedule Creator',
    category: 'frontend',
    categoryLabel: 'Frontend & UI',
    description:
      'A playful gingerbread-themed weekly schedule app built with React, TypeScript, Tailwind CSS, and Vite. Add classes, view a calendar grid or list, and export to PDF.',
    image: 'assets/projects/class-schedule-creator.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/yRaccoon/class-schedule-creator',
    demoUrl: 'https://yraccoon.github.io/class-schedule-creator/',
  },
  {
    id: 'skin-check',
    title: 'SkinCheck: Skin Disease Detector',
    category: 'ai',
    categoryLabel: 'Python & AI',
    description:
      'A web-based skin disease detection system using YOLOv8 for object detection and Flask for backend API integration.',
    image: 'assets/projects/skin_check.png',
    tags: ['Python', 'Flask', 'YOLOv8', 'OpenCV'],
    githubUrl: 'https://github.com/yRaccoon/SkinCheck',
    demoUrl: null,
  },
  {
    id: 'pdf-merger',
    title: 'PDF Merger Desktop Application',
    category: 'ai',
    categoryLabel: 'Python & AI',
    description:
      'A user-friendly desktop application for merging multiple PDF files with a drag-and-drop interface, preview functionality, and batch processing.',
    image: 'assets/projects/pdf_merger.png',
    tags: ['Python', 'CustomTkinter', 'Pypdf', 'Pillow'],
    githubUrl: 'https://github.com/yRaccoon/pdf_merger',
    demoUrl: null,
  },
  {
    id: 'to-do-app',
    title: 'Gingerbread To-Do App',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description:
      'A task management application built with Flask and the Sheety API for seamless Google Sheets integration, wrapped in a warm gingerbread theme.',
    image: 'assets/projects/to-do-app.png',
    tags: ['Python', 'Flask', 'Sheety API', 'Google Sheets'],
    githubUrl: 'https://github.com/yRaccoon/to-do-app',
    demoUrl: null,
  },
  {
    id: 'internship-tracker',
    title: 'Internship Tracker',
    category: 'frontend',
    categoryLabel: 'Frontend & UI',
    description:
      'An offline-first web app for logging internship hours with a color-coded calendar, progress dashboard, CSV import/export, and printable monthly reports.',
    image: 'assets/projects/internship_tracker.png',
    tags: ['HTML5', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
    githubUrl: 'https://github.com/yRaccoon/internship-tracker',
    demoUrl: 'https://yraccoon.github.io/internship_tracker/',
  },
  {
    id: 'aurora-blog',
    title: 'Aurora Blog',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description:
      'A beautiful aurora-themed blog application with glassmorphism design, full CRUD operations, category-based organization, and animated SVG particle effects.',
    image: 'assets/projects/blog_app.png',
    tags: ['Node.js', 'Express', 'EJS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yRaccoon/blog-app',
    demoUrl: null,
  },
  {
    id: 'covid-sea-dashboard',
    title: 'COVID-19 SEA Analytics Dashboard',
    category: 'ai',
    categoryLabel: 'Python & AI',
    description:
      'A data analytics dashboard for COVID-19 trends in Southeast Asia with interactive visualizations, trend analysis, and predictive modeling.',
    image: 'assets/projects/sea_covid_analysis.png',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/yRaccoon/sea_covid_analysis',
    demoUrl: null,
  },
]
