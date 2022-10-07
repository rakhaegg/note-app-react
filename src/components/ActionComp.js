import React from "react";
import PropTypes from 'prop-types';


const ActionComponent = ({ icon }) => {
    return (
        <>
            {icon.map((data, i) => {

                return (
                    <button key={i.toString()} className="item-action" onClick={data.handle === undefined ? null : data.handle}>
                        {data.icon}
                    </button>
                )
            })}
        </>
    )
}
ActionComponent.propTypes = {
    icon: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node.isRequired
    })).isRequired
}
export default ActionComponent;
