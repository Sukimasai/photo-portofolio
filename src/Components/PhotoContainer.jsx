import Photos from "./photos";
import PropTypes from 'prop-types';
import './PhotoContainer.css';
import { useEffect, useState } from "react";

function PhotoContainer(props){
    const linkList = props.linkList;
    const [divideSize, setDivideSize] = useState(window.innerWidth > 768 ? 0.3 : 0.9);
    const imagelist = linkList.map(images => <ul key={images.id} className="photoList">
                                                <Photos photoSize={divideSize} imageLink={images.link}/>
                                              </ul>
                                                );

    const resizeHandler = () => {
      setDivideSize(window.innerWidth > 768 ? 0.3 : 0.9);
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
    }, []);

    return(
        <>
          <div className="photoContainer">
            {imagelist}
          </div>
        </>
 )
}

PhotoContainer.propTypes = {
    linkList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired
      })
    ).isRequired,
    photoSize: PropTypes.number,
  };
  

export default PhotoContainer;