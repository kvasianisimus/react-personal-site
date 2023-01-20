import { GitHub, LinkedIn } from '@material-ui/icons';

export const heroInfo = {
  name: 'Vasiliy Karelin',
  image: '/images/myImage.jpeg',
  title: [
    'JavaScript Developer',
    'Layout Designer',
    'React Developer',
  ],
  contacts: [
    {
      id: 1,
      name: 'GitHub', 
      icon: GitHub,
      username: 'kvasianisimus',
      link: 'https://github.com/kvasianisimus',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedIn,
      username: 'kvasianisimus',
      link: 'https://www.linkedin.com/in/kvasianisimus/',
    },
  ],
};

export const resumes = [
  {
    id: 1,
    year: 'November 2021 - May 2022',
    role: 'Layout designer',
    companyName: 'Marketing plant',
    companyUrl: 'https://combinat38.ru/',
    description: 
      'Resolved customer queries and problems using effective communication and providing step-by-step solutions.  Made a responsive layouts with modern UI/UX trends. Achieved service time and quality targets'
  },
  {
    id: 1,
    year: 'June 2022 - December 2022',
    role: 'React developer',
    companyName: 'EPICMID OÜ',
    companyUrl: 'https://epicdrop.one/',
    description:
      'Took part in the young startup. Made a styled components with React Material-UI library'
  },
  {
    id: 1,
    year: 'December 2022 - Present time',
    role: 'React developer',
    companyName: 'Side project',
    companyUrl: '#',
    description:
      'Creating our own telegram bot shop in cooperate with another backend engineer. Currently in development'
  }
];

