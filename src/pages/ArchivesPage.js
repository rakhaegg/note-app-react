import React from "react";
import ListComponent from "../components/ListComponent";
import Search from "../components/Search";
import PropTypes from 'prop-types';

const ArchivesPage = ({ data , handleSearch ,value}) => {

    return (
        <>
         <Search handleSearch={handleSearch} name={"archive"} value={value}/>
            {data.length === 0 ? <h2>Arsip Kosong</h2>
                :
                <ListComponent data={data} />
            }
        </>
    )
}
ArchivesPage.propTypes={
    data : PropTypes.array.isRequired,
    handleSearch : PropTypes.func.isRequired,
    value : PropTypes.string.isRequired
}
export default ArchivesPage;