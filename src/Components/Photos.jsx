import { useState, useEffect, useRef } from 'react';
import './Photos.css';
import PropTypes from 'prop-types';

function Photos(props) {
    const imageRef = useRef(null);
    const photoSize = props.photoSize;
    const [widthStyle, setWidthStyle] = useState(window.innerWidth * photoSize);

    function resizeCard() {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const imageHeight = rect.height;
            const imageTop = rect.top;
            const windowHeight = window.innerHeight;

            const visiblePercentageTop = Math.max(0, (windowHeight - imageTop) / imageHeight);

            if (visiblePercentageTop < 0.7 || visiblePercentageTop > 2.2) {
                setWidthStyle(window.innerWidth * (photoSize*2/3));
            } else {
                setWidthStyle(window.innerWidth * photoSize);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', resizeCard);
        window.addEventListener('resize', resizeCard);

        return () => {
            window.removeEventListener('scroll', resizeCard);
            window.removeEventListener('resize', resizeCard);
        };
    });

    return (
        <div className="photoContainer">
            <img
                ref={imageRef}
                src={props.imageLink}
                style={{ width: `${widthStyle}px`, transition: 'width 0.4s ease' }}
                alt="Photos"
            />
        </div>
    );
}

Photos.propTypes = {
    imageLink: PropTypes.string.isRequired,
    photoSize: PropTypes.number,
};

Photos.defaultProps = {
    
}

export default Photos;
