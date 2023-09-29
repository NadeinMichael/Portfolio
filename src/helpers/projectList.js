import airpodsLending from '../img/projects/airpods-lending.jpg';
import airpodsLendingBig from '../img/projects/airpods-lending-big.jpg';

import travel from '../img/projects/travel.jpg';
import travelBig from '../img/projects/travel-big.jpg';

import movie from '../img/projects/movie.jpg';
import movieBig from '../img/projects/movie-big.jpg';

import employees from '../img/projects/employees.jpg';
import employeesBig from '../img/projects/employees-big.jpg';

const projects = [
  {
    id: 0,
    title: 'Airpods lending',
    skills: 'HTML, CSS, @media, JS',
    img: airpodsLending,
    imgBig: airpodsLendingBig,
    gitHubLink: 'https://github.com/NadeinMichael/airpods-lending',
    deploy: 'https://nadeinmichael.github.io/airpods-lending/',
  },
  {
    id: 1,
    title: 'Travel lending',
    skills: 'HTML, CSS, @media',
    img: travel,
    imgBig: travelBig,
    gitHubLink: 'https://github.com/NadeinMichael/responsive-website-Travel-',
    deploy: 'https://nadeinmichael.github.io/responsive-website-Travel-/',
  },
  {
    id: 2,
    title: 'Movies explorer App',
    skills: 'HTML, CSS, @media, React, Node js, Express',
    img: movie,
    imgBig: movieBig,
    gitHubLink: 'https://github.com/NadeinMichael/movies-explorer',
    deploy: 'https://nadeinmichael.github.io/movies-explorer/',
  },
  {
    id: 3,
    title: 'Employees App',
    skills: 'React, Node js, Express, Ant design, Redux RTK, TypeScript',
    img: employees,
    imgBig: employeesBig,
    gitHubLink: 'https://github.com/NadeinMichael/Employees',
    // deploy: 'https://nadeinmichael.github.io/movies-explorer/',
  },
];

export { projects };
