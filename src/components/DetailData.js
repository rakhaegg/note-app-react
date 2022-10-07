import React from "react";
import PropTypes from 'prop-types';

const DetailData = ({ data }) => {

    return (
        <>  
            <div>
                <div className="item-detail-title">{data.title}</div>
                <div className="item-detail-date">{new Date(data.createdAt).toDateString()}</div>
                <div className="item-detail-body">{data.body}</div>
            </div>
        </>
    )
}

PropTypes.propTypes = {
    data: PropTypes.shape({
        id :PropTypes.string.isRequired,   
        title: PropTypes.string.isRequired,
        body : PropTypes.string.isRequired, 
        createdAt: PropTypes.string.isRequired,
        archived : PropTypes.bool.isRequired,
    }),
 
};
export default DetailData;