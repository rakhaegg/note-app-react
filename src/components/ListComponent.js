import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ListComponent = ({ data }) => {
    return (
        <>

            <div className="container-list-page">
                {data.map((data) => {
                    return (
                        <div key={data.id} className="item-list">
                            <Link to={`/notes/${data.id}`}>
                                <div>{data.title}</div>
                            </Link>
                            <div>{new Date(data.createdAt).toDateString()}</div>
                            <div>{data.body}</div>
                        </div>

                    )
                })}
            </div>


        </>
    )
}
ListComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired
    }))
}
export default ListComponent