import { createRoot } from 'react-dom/client'
import PhotoContainer from './Components/PhotoContainer'
import HeaderComponent from './Components/HeaderComponent';
import LinkContainer from './Components/LinkContainer';
import BackgroundBlob from './Components/BackgroundBlob';

const photoArrayOne = [{id: 1, link: "/photo-portofolio/images/01.jpg"},
    {id: 2, link: "/photo-portofolio/images/02.jpg"},
    {id: 3, link: "/photo-portofolio/images/03.jpg"},
    {id: 4, link: "/photo-portofolio/images/04.jpg"},
    {id: 5, link: "/photo-portofolio/images/05.jpg"},
    {id: 6, link: "/photo-portofolio/images/06.jpg"},
];

const linkArrayOne = [{id: 1, link: "https://www.instagram.com/reaganjustn/", icon: "/photo-portofolio/images/instagram.png"}, 
{id: 2, link: "https://github.com/Sukimasai", icon: "/photo-portofolio/images/github.png"},
{id:3, link: "https://sukimasai.github.io/sunflower/", icon: "/photo-portofolio/images/flower.png"},
]

createRoot(document.getElementById('root')).render(
    <>
        <HeaderComponent />
        <PhotoContainer linkList={photoArrayOne}/>
        <LinkContainer linkArray={linkArrayOne} />
        <BackgroundBlob />
    </>
)
