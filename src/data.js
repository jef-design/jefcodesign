import project from './assets/images/Projects/project-gnews.png';
import project1 from './assets/images/Projects/project-voodu.png';
import project3 from './assets/images/Projects/project-restcountries.png'
import project2 from './assets/images/Projects/project-social.jpg';
import project4 from './assets/images/Projects/project-bookmark.jpg';
import project5 from './assets/images/Projects/project-manage.jpg';
import project6 from './assets/images/Projects/project-disney.png';
import project0 from './assets/images/Projects/project-ecom.png';
import projectbinder from './assets/images/Projects/project-binder.png';
import bindermobile from './assets/images/Projects/binder/binder-mobile.png'
import binderdesktop from './assets/images/Projects/binder/binder-desktop.png'
import gnewsmobile from './assets/images/Projects/google-news/gnews-mobile.png'
import gnewsdesktop from './assets/images/Projects/google-news/gnews-desktop.png'
import ecommobile from './assets/images/Projects/google-news/gnews-mobile.png'
import ecomdesktop from './assets/images/Projects/ecommerce/ecom-desktop.png'
import voodumobile from './assets/images/Projects/voodu/voodu-mobile.png'
import voodudesktop from './assets/images/Projects/voodu/voodu-desktop.png'
import socialmobile from './assets/images/Projects/social/social-mobile2.png'
import socialdesktop from './assets/images/Projects/social/social-media-desktop-dark.png'
import restcountriesdesktop from './assets/images/Projects/rest-countries/rest-countries-desktop.png'
import restcountriesmobile from './assets/images/Projects/rest-countries/rest-countries-mobile.png'
import bookmarkmobile from './assets/images/Projects/bookmark/bookmark-mobile2.png'
import bookmarkdesktop from './assets/images/Projects/bookmark/bookmark-desktop2.png'
import managemobile from './assets/images/Projects/manage/manage-mobile2.png'
import managedesktop from './assets/images/Projects/manage/manage-desktop2.png'
import disneymobile from './assets/images/Projects/disney-plus/disney-mobile.png'
import disneydesktop from './assets/images/Projects/disney-plus/disney-desktop.png'


export const data = [
    {
        img: project,
        mobile_view: gnewsmobile,
        desktop_view: gnewsdesktop,
        alt: 'Google News',
        title: 'Google News',
        description: 'A clone of Google News Website is a news aggregator service developed by Google. It presents a continuous flow of links to articles organized from thousands of publishers. this clone has a google authentication using next-auth',
        publish_date: 'August 23,2021',
        platform: 'Web / Mobile',
        category: 'Entertainment',
        tech_use: [
            {name: 'Next.js'},
            {name: 'Next-Auth'},
            {name: 'Tailwind CSS'},
            {name: 'Redux'},
            {name: 'Heroicons'},
            {name: 'API'}, 
        ],
        status: 'Deployed',
        site_link: 'https://news-nextjs-app.vercel.app/',
        og_url: 'https://jeffcodesign.vercel.app/project/google%20news',
        github_repo: 'https://github.com/jef-design/news-nextjs-app'
    },
    {
        img: projectbinder,
        mobile_view: bindermobile,
        desktop_view: binderdesktop,
        alt: 'Binder',
        title: 'Binder',
        description: 'Binder a social media website built using MERN Stack is a dynamic and interactive platform designed for users to connect and share with others. this project provides a responsive and engaging user experience, complete with user profiles, posts, comments, active status and real-time updates.',
        publish_date: 'August 30, 2022',
        platform: 'Web',
        category: 'Social Media',
        tech_use: [
            {name: 'Reactjs'},
            {name: 'Vitejs'},
            {name: 'Tailwind'},
            {name: 'Nodejs'},
            {name: 'Express'},
            {name: 'MongoDB'},
             
        ],
        status: 'Deployed',
        site_link: 'https://binder-mern.vercel.app/',
        og_url: 'https://binder-mern.vercel.app/',
        github_repo: 'https://github.com/'
        // github_repo: 'https://github.com/jef-design/voodu-movie'
    },
    {
        img: project6,
        mobile_view: disneymobile,
        desktop_view: disneydesktop,
        alt: 'Disney+',
        title: 'Disney+',
        description: 'Disney+ clone, It includes content from Walt Disney Studios,Marvel Studios, Pixar, Star-wars, National Geographic and more. consuming TMDB API Built with Reactjs by Vitejs',
        publish_date: 'January 24,2023',
        platform: 'Web / Mobile',
        category: 'Entertainment',
        tech_use: [
            // {name: 'HTML'},
            // {name: 'CSS'},
            {name: 'React.js'},
            {name: 'Vite.js'},
            {name: 'Firestore'},
            {name: 'SCSS'},
            {name: 'Redux  Toolkit'},
            {name: 'API'}, 
        ],
        status: 'Deployed',
        site_link: 'https://disney-plus-cloned.netlify.app/',
        og_url: 'https://disney-plus-cloned.netlify.app/',
        github_repo: 'https://github.com/'
        // github_repo: 'https://github.com/jef-design/voodu-movie'
    },
    {
        img: project0,
        mobile_view: null,
        desktop_view: ecomdesktop,
        alt: 'Ecommerce',
        title: 'Ecommerce',
        description: 'Simple Ecommerce shop built with Php and MySql',
        publish_date: '0ct 24,2022',
        platform: 'Web',
        category: 'Ecommerce',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS/SCSS'},
            {name: 'Php'},
            {name: 'MySql'},
            {name: 'Javascript'},
            {name: 'JQuery'},
            {name: 'Ajax'},
             
        ],
        status: 'Undeploy',
        site_link: 'https://jeffcodesign.vercel.app/project/google-news',
        og_url: 'https://jeffcodesign.vercel.app/project/google-news',
        github_repo: 'https://github.com/'
        // github_repo: 'https://github.com/jef-design/voodu-movie'
    },
    
    {
        img: project3,
        mobile_view: restcountriesmobile,
        desktop_view:restcountriesdesktop,
        alt: 'Country Info',
        title: 'CountryInfo',
        description: 'CountryInfo provides a  information about the world\'s nations consuming REST COUNTRIES API. These calls allow users to retrieve all available countries or to retrieve a given country or country code.Built with Reactjs',
        publish_date: 'August 18,2021',
        platform: 'Web / Mobile',
        category: 'Entertainment',
        tech_use: [
            {name: 'React.js'},
            {name: 'Styled-Components'},
            {name: 'Redux'},
            {name: 'API'}, 
        ],
        status: 'Deployed',
        site_link: 'https://countryinfoo.netlify.app/',
        og_url: 'https://jeffcodesign.vercel.app/project/countryinfo',
        github_repo: 'https://github.com/jef-design/rest-countries'
    },
    {
        img: project1,
        mobile_view: voodumobile,
        desktop_view: voodudesktop,
        alt: 'Voodu',
        title: 'Voodu',
        description: 'A movie website that shows details and trailers of movies, tv shows and people using TMDB API Built with Reactjs and Redux',
        publish_date: 'March 28,2021',
        platform: 'Web / Mobile',
        category: 'Entertainment',
        tech_use: [
            // {name: 'HTML'},
            // {name: 'CSS'},
            {name: 'React.js'},
            {name: 'SCSS'},
            {name: 'Redux'},
            {name: 'API'}, 
        ],
        status: 'Deployed',
        site_link: 'https://vooduu-demo.netlify.app/',
        og_url: 'https://jeffcodesign.vercel.app/project/voodu',
        github_repo: 'https://github.com/'
        // github_repo: 'https://github.com/jef-design/voodu-movie'
    },
    {
        img: project2,
        mobile_view: socialmobile,
        desktop_view: socialdesktop,
        alt: 'Social Media Dashboard',
        title: 'Social Media Dashboard',
        description: 'A Social Media Dashboard challenge with theme switcher(light & dark) from front-end mentor',
        publish_date: 'February 4,2021',
        platform: 'Web / Mobile',
        category: 'Social Media',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'Javascript'},
        ],
        status: 'Deployed',
        site_link: 'https://socialmediadashboard00.netlify.app/',
        og_url: 'https://jeffcodesign.vercel.app/project/social%20media%20dashboard',
        github_repo: 'https://github.com/jef-design/social-media-dashboard'
    }
    ,
    {
        img: project4,
        mobile_view: bookmarkmobile,
        desktop_view: bookmarkdesktop,
        alt: 'Bookmark Landing Page',
        title: 'Bookmark Landing Page',
        description: 'A simple Bookmark Landing Page with tabbed features section and FAQ accordion.',
        publish_date: 'Febuary 15,2021',
        platform: 'Web / Mobile',
        category: 'Landing Page',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'SCSS'},
            {name: 'Javascript'},
            {name: 'Figma'},
        ],
        status: 'Deployed',
        site_link: 'https://jef-design.github.io/bookmark-landing-page/',
        og_url: 'https://jeffcodesign.vercel.app/project/bookmark%20landing%20page',
        github_repo: 'https://github.com/jef-design/bookmark-landing-page'
    }
    ,
    {
        img: project5,
        mobile_view: managemobile,
        desktop_view: managedesktop,
        alt: 'Manage Landing Page',
        title: 'Manage Landing Page',
        description: 'A Manage landing page with fully responsive testimonial section from front-end mentor challenge.',
        publish_date: 'January 29,2021',
        platform: 'Web / Mobile',
        category: 'Landing Page',
        tech_use: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'SCSS'},
            {name: 'Javascript'},
            {name: 'Figma'},
        ],
        status: 'Deployed',
        site_link: 'https://manage-fm.netlify.app/',
        og_url: 'https://jeffcodesign.vercel.app/project/manage%20landing%20page',
        github_repo: 'https://github.com/jef-design/manage'
    }
]