
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActionComponent from "../components/ActionComp";
import DetailData from "../components/DetailData";
import archive from "../components/icons/Archive";
import archiveOff from "../components/icons/ArchiveOff";
import { getNote } from "../utils/local-data";
import PropTypes from 'prop-types';

function DetailPageWrapper({ handleUpdate, handleDelete, handleKeyword }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const handle = [
        function () {
            handleUpdate(id);
            handleKeyword();
            navigate("/");
        },
        function () {
            handleDelete(id);
            handleKeyword();
            navigate("/");
        }
    ]
    return <DetailPage id={id} handle={handle} />
}
DetailPageWrapper.propTypes = {
    handleUpdate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleKeyword: PropTypes.func.isRequired
}
class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        }

    }

    render() {
    
        const iconArchiveOrNote =  this.state.note !== undefined ? this.state.note.archived ? archiveOff : archive : null;
        const elemen_graphic =
            [{
                icon: iconArchiveOrNote,
                handle: this.props.handle[0]
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>,
                handle: this.props.handle[1]
            }
            ]


        return (
            <div className="container-detail-page">{
                this.state.note === undefined ? <>
                    <h2>404</h2>
                    <h3>Page not found</h3>
                </> :
                    <>
                        <h3>Detail Page</h3>
                        <DetailData data={this.state.note} />
                        <div className="container-action" >
                            <ActionComponent icon={elemen_graphic} />
                        </div>
                    </>
            }

            </div>
        )
    }
}
DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    handle: PropTypes.array.isRequired,
}
export default DetailPageWrapper;