import { createRoot } from 'react-dom/client'
import PhotoContainer from './Components/PhotoContainer'
import HeaderComponent from './Components/HeaderComponent';
import LinkContainer from './Components/LinkContainer';
import BackgroundBlob from './Components/BackgroundBlob';

const photoArrayOne = [{id: 1, link: "/images/01.jpg"},
    {id: 2, link: "/images/02.jpg"},
    {id: 3, link: "/images/03.jpg"},
    {id: 4, link: "/images/04.jpg"},
    {id: 5, link: "/images/05.jpg"},
    {id: 6, link: "/images/06.jpg"},
];

const linkArrayOne = [{id: 1, link: "https://www.instagram.com/reaganjustn/", icon: "/images/instagram.png"}, 
{id: 2, link: "https://github.com/Sukimasai", icon: "/images/github.png"},
{id:3, link: "https://sukimasai.github.io/sunflower/", icon: "/images/flower.png"},
]

createRoot(document.getElementById('root')).render(
    <>
        <HeaderComponent />
        <PhotoContainer linkList={photoArrayOne}/>
        <LinkContainer linkArray={linkArrayOne} />
        <BackgroundBlob />
    </>
)
