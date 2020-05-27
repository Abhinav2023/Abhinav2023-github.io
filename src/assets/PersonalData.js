import profilePiPicture from './images/profilepic.jpeg'
import portfolio from './images/portfolio.png'
import logo from './images/logo.png'
import bg2 from './images/bg-2.jpg'

const personData = {
    about:{
            name:`Abhinav Bansal`,
            phone: `919414633674`,
            email:`abhinavbansal231101@gmail.com`,
            address:`Sawai Madhopur (India)`,
            profession:[`Programmer`,`Web Developer`],
            profilePiPicture,
            logo
        },

    backgroundSlides:{
        slideOne:`https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`,
        slideTwo:bg2,
        slideThree:`https://res.cloudinary.com/djcgm2m7l/image/upload/v1576064278/photo-1496031867413-058d7da89c63_wv4amj.jpg`
    },

    socialMedias:[
        {
            url:`https://www.linkedin.com/in/abhinav-bansal-a14843172/`,
            icon:`fab fa-linkedin-in`,
            name:`LinkedIn`
        },
        {
            url:`https://github.com/abhinav2023`,
            icon:`fab fa-github`,
            name:`Github`
        },
        {
            url:`https://twitter.com/Abhinav12492780`,
            icon:`fab fa-twitter`,
            name:`Twitter`
        },
		{
            url:`https://www.instagram.com/abhinav23bansal/`,
            icon:`fab fa-instagram`,
            name: `Instagram`
        },
		{
            url:`https://www.facebook.com/abhinav.bansal.5682/`,
            icon:`fab fa-facebook-official`,
            name: `Facebook`
        }
    ],

    background:[
        {
            school:``,
            url:``,
            experience:`I love to make responsive websites. I was also a Core Team Member of Acoustic and Media Society, IIIT Allahabad.`
        },
        {
            school:``,
            url:``,
            experience:`My name is Abhinav Bansal. I am a web developer and currently in fifth semester in IIIT Allahabad.`
        },
        {
            school:``,
            url:``,
            experience:`Every morning I'm a new version of myself and I'm top fun of playing Ping pong `
        },

    ],

    skills:[
        {
            name:`frontend`,
            language:[`HTML5`,`CSS3`,`JavaScript`,`React`,`Bootstrap 4` ],
            icon:`fas fa-laptop-code`
        },
        {
            name:`backend`,
            language:[`Node`, `Express`,`GraphQL`,`Socket.io`],
            icon:`fas fa-code`
        },
        {
            name:`database`,
            language:[`MongoDB`,`MYSQL`],
            icon:`fas fa-database`
        },
        {
            name:`version control`,
            language:[`Git`,`Github`],
            icon:`fas fa-code-branch`
        },
        {
            name:`cloud`,
            language:[`Heroku`, `Netlify`,`Firebase`],
            icon:`fas fa-cloud`
        }
    ],
    
    projects:[
        {
            title:"Mountain Travel",
            technologies:['Node', `Bootstrap`,`Mongodb`,`Express`,`Ejs`,`MongoDB Atlas`, `Heroku`],
            about:`A Travelling Website`,
            image:`https://res.cloudinary.com/djcgm2m7l/image/upload/v1576063204/Screenshot_from_2019-12-11_16-41-07_grsev6.png`,
            url:`https://sleepy-hollows-51902.herokuapp.com/`
        },
        {
            title:"Expensify",
            technologies:['React', `Bootstrap`,`Nodejs`,`Mongodb`,`Express`, `Firebase`,`Google Cloud Platform`],
            about:`A web app that manages your daily expenses`,
            image:`https://res.cloudinary.com/djcgm2m7l/image/upload/v1590602096/expensify_z40lyg.png`,
            url:`https://expensify-app-abhinav.herokuapp.com/`
        },
        {
            title:"PG-Mate",
            technologies:['Node', `Bootstrap`,`Mongodb`,`Express`,`Ejs`,`MongoDB Atlas`, `Heroku`],
            about:`A web app that helps customers to find their perfect rooms`,
            image:`https://res.cloudinary.com/djcgm2m7l/image/upload/v1590602048/IMG_20200527_232125_taqvmg.jpg`,
            url:`https://pg-mate.herokuapp.com/`
        },
        {
            title:" Portfolio",
            technologies:['React', `Bootstrap`,`Netlify`],
            about:`personal portfolio about me `,
            image:portfolio,
            url:`https://abhinav2023.netlify.app/`
        }
  ]
};

export default personData;