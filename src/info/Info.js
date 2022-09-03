import self from "../img/self.png"
import mock1 from "../img/elmochat.png"
import mock2 from "../img/pcprodz.png"
import mock3 from "../img/rocdz.png"
import mock4 from "../img/firestore.png"
import mock5 from "../img/auth.png"
import mock6 from "../img/portfolio.png"


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
            label: 'podcasts',
            emoji: '🎙️'
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
            title: "ELMO-CHAT",
            live: "https://elmo-chat-web.web.app/",
            source: "https://github.com/mouayed-keziz/ElMOU-CHAT",
            image: mock1
        },
        {
            title: "PCPRODZ",
            live: "http://pcprodz.herokuapp.com/",
            image: mock2
        },
        {
            title: "ROC-DZ",
            live: "roc-dz.netlify.app",
            source: "https://github.com/mouayed-keziz/Ecommerce-website",
            image: mock3
        },
        {
            title: "Firebase RealtimeDB Template",
            live: "https://react-and-firebase-template.web.app/",
            source: "https://github.com/mouayed-keziz/firebase-quickstart-react",
            image: mock4
        },
        {
            title: "Firebase Auth Template",
            live: "https://fir-auth-react-e955e.web.app/",
            source: "https://github.com/mouayed-keziz/firebase-auth-quickstart-react",
            image: mock5
        },
        {
            title: "This Portfolio",
            live: "https://mouayed-keziz.web.app/",
            source: "https://github.com/mouayed-keziz/mouayed-keziz-portfolio",
            image: mock6
        }
    ]
}
