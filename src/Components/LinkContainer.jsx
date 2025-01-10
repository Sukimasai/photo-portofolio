import LinkComponent from './LinkComponent';
import PropTypes from 'prop-types';
import './LinkContainer.css';

function LinkContainer(props){
    const linkList = props.linkArray.map(link => <div key={link.id} className='linkList'>
                                                    <LinkComponent link={link.link} icon={link.icon} />
                                                </div>);

    return(
        <div className='linkContainer'>
            {linkList}
        </div>
    )
}

LinkContainer.propTypes = {
    linkArray: PropTypes.array.isRequired,
};

export default LinkContainer;