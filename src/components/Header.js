import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Header = ({ data_title, data_nav ,handle}) => {

    return (
        <header>
            <h1 onClick={handle}><Link to={data_title.url}>{data_title.text}</Link></h1>
            <nav className="nav-container">
                <ul>
                    {data_nav.map((data, i) => {
                        return (
                            <li key={i.toString} onClick={handle}>
                                <Link to={data.url}>{data.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
export default Header;

Header.propTypes = {
    data_title: PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired,
    data_nav: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })).isRequired,
    handle : PropTypes.func.isRequired

}