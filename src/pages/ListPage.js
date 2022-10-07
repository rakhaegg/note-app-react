import React from "react";
import { Link } from "react-router-dom";
import ActionComponent from "../components/ActionComp";
import ListComponent from "../components/ListComponent";
import Search from "../components/Search";
import PropTypes from 'prop-types';

const ListPage = ({ data, handleSearch ,value}) => {

    const elemen = [{
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    }];
    return (
        <>
            <Search handleSearch={handleSearch} name={"active"} value={value} />
            {data.length === 0 ? <h2>Catatan Kosong</h2>
                :
                <>

                    <ListComponent data={data} />
                </>
            }

            <div className="container-action" >
                <Link to="/notes/new">
                    <ActionComponent icon={elemen} />
                </Link>
            </div>
        </>
    )
}
ListPage.propTypes ={
    data : PropTypes.array.isRequired,
    handleSearch : PropTypes.func.isRequired,
    value : PropTypes.string.isRequired
}
export default ListPage;