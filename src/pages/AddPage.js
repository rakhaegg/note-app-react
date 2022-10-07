import React from "react";
import { useNavigate } from "react-router-dom";
import ActionComponent from "../components/ActionComp";

import PropTypes from 'prop-types';

const AddPage = ({ handleTitle, handleBody , handleSubmit}) => {

    const navigate = useNavigate();
    const icon = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>,
            handle: function () {
                handleSubmit();
                navigate("/");
            }
        }
    ]
    return (
        <div className="container-add-page">
            <div className="item-input">
                <input className="input-title" placeholder="Title Rahasia" onInput={handleTitle} />
                <div className="input-body"  contentEditable data-placeholder="Tulis Sini" onInput={handleBody}/>
            </div>
            <div className="container-action" >
                <ActionComponent icon={icon} />
            </div>
        </div>

    )
}
AddPage.propTypes={
    handleTitle : PropTypes.func.isRequired,
    handleBody : PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired
}
export default AddPage;