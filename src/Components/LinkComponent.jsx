import PropTypes from 'prop-types';
import './LinkComponent.css';

function LinkComponent(props){
    return (
        <a href={props.link} target='blank'>
            <img src={props.icon} alt='Icon' className='iconImage'/>
        </a>
    )
}

LinkComponent.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string,
};

export default LinkComponent;