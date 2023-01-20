import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles/portfolio';

const projects = [
  {
    image: '/images/skincare.png',
    name: 'Skincare website',
    description: `Skincare cosmetics website \
    build with react and experementing with useState hook`,
    tools: ['javascript', 'react',],
    live: 'https://kvasianisimus.github.io/react-skincare-page/',
    source: 'https://github.com/kvasianisimus/react-skincare-page',
  },
  {
    image: '/images/reactWeatherApp.png',
    name: 'Weather App',
    description: `A simple react weather app with API and a simple user-friendly UI`,
    tools: ['javascript', 'react'],
    live: 'https://kvasianisimus.github.io/react-weater-api/',
    source: 'https://github.com/kvasianisimus/react-weater-api',
  },
  {
    image: '/images/portfolioUsingReact.png',
    name: 'My Portfolio Website',
    description: `Portfolio Website \
    about me. In this project i \
    used react for front end and 'Material-UI'`,
    tools: ['javascript', 'react'],
    live: 'https://bright-kelpie-1cd00a.netlify.app/',
    source: 'https://github.com/kvasianisimus/react-personal-site.git',
  },
  {
    image: '/images/gymWebsite.png',
    name: 'Gym website',
    description: `Fitness website react project build with animate on scroll library`,
    tools: ['javascript', 'react'],
    live: 'https://kvasianisimus.github.io/gym-website/',
    source: 'https://github.com/kvasianisimus/gym-website',
  },
  {
    image: '/images/musicSchool.png',
    name: 'Music School',
    description: `Commertial website for my friends from Mmotion music school build on Tilda`,
    tools: ['Tilda'],
    live: 'https://mmotionschool.ru/',
  },
  {
    image: '/images/telegram.png',
    name: 'Telegram bot shop',
    description: `This is real commertial fullstack shop build with node js. Currently in development `,
    tools: ['javascript', 'react', 'nodejs'],
  },
];
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Projects
      </Typography>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.projectName}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.projectDescription}
                  >
                    {project.description}
                  </Typography>

                  {/* Tools */}
                  {project.tools.map((tool, i) => (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{
                        marginRight: '5px',
                        height: '18px',
                        background: 'rgb(95 176 71)',
                      }}
                      key={i}
                    >
                      {tool}
                    </Button>
                  ))}
                  {/* end */}
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.button}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  target="blank"
                  href={project.live}
                >
                  Live Demo
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  style={{ background: '#589084' }}
                  target="blank"
                  href={project.source}
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* end */}
      </Grid>
    </Box>
  );
};

export default Portfolio;
