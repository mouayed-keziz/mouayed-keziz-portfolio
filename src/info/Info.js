import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];



export const info = {
    firstName: "Mouayed",
    lastName: "Keziz",
    initials: "Dev",
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💻',
            text: 'passionate about computer science'
        },
        {
            emoji: '🌎',
            text: 'based in Algeria'
        },
        {
            emoji: "💼",
            text: "Student at ESTIN Bejaia-Algeria"
        },
        {
            emoji: "📧",
            text: "m_keziz@estin.dz"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/keziz.mouayed",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/m.o.u.a.y.e.d/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/mouayed-keziz",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mouayed-keziz-bb2862232/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Hello! I'm Mouayed. I'm a computer science student at ESTIN, I believe artificial intelligence wont rule us all one day. You should hire me!",
    skills:
    {
        proficientWith: ['javascript', 'react', "express", "mongoDB", "redux", 'python', 'java', "kotlin", "react native", "linux", "heroku & netlify", "brainJS", 'github', 'git', 'bootstrap', 'html5', 'css3', 'scss', 'mern stack', 'flutter', "materialUI", "MantineUI", "chakraUI", 'firebase', 'supabase'],
        exposedTo: ['machine learning', "networking"]
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'music',
            emoji: '🎧'
        },
        {
            label: 'violin',
            emoji: '🎻'
        },

    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}
