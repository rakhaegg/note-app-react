
import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import AddPage from './pages/AddPage';
import ArchivesPage from './pages/ArchivesPage';
import DetailPageWrapper from './pages/DetailPage';
import ListPage from './pages/ListPage';
import { addNote, archiveNote, deleteNote, getActiveNotes, getArchivedNotes, getNote, unarchiveNote } from './utils/local-data';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

const AppWrapper = () => {
  const [keywordParams, setKeyword] = useSearchParams();
  const parameter = keywordParams.get("keyword") || "";


  function updateStateByParameter(value) {
    setKeyword({
      keyword: value
    })
  }


  return <App handleParam={updateStateByParameter} keyword={parameter} />
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: getArchivedNotes(),
      notArchive: getActiveNotes(),
      title: '',
      body: '',
      keyword: this.props.keyword || '',

    }
    this.onUpdateArchive = this.onUpdateArchive.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.handleTitleForm = this.handleTitleForm.bind(this);
    this.handleBodyForm = this.handleBodyForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updateKeyword = this.updateKeyword.bind(this);
  }
  handleSearch(value) {

    this.setState({
      keyword: value
    })
    this.props.handleParam(value);
  }
  handleSubmit() {
    addNote({
      title: this.state.title,
      body: parser(this.state.body)
    })
    this.setState({
      archive: getArchivedNotes(),
      notArchive: getActiveNotes(),
    })
  }

  handleBodyForm(event) {
    this.setState({
      body: event.target.innerHTML
    });
  }
  handleTitleForm(event) {
    this.setState({
      title: event.target.value
    });
  }
  onDeleteNote(id) {
    deleteNote(id);
    this.setState({
      archive: getArchivedNotes(),
      notArchive: getActiveNotes(),
    });
  }
  onUpdateArchive(id) {

    if (getNote(id).archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    this.setState({
      archive: getArchivedNotes(),
      notArchive: getActiveNotes(),
    });
  }
  updateKeyword() {
    this.setState({
      keyword: ""
    })
  }
  render() {

    return (
      <div className='main-container'>
        <Header data_title={{
          text: "Aplikasi Catatan",
          url: "/"
        }}
          data_nav={[
            {
              text: "Arsip",
              url: "/archives"
            }
          ]} handle={this.updateKeyword} />
        <main>
          <Routes>
            <Route path="/" element={<ListPage data={
              this.state.keyword === "" ? this.state.notArchive :
                getActiveNotes().filter(data => data.title.toLowerCase().includes(this.state.keyword.toLowerCase()))
            }
              handleSearch={this.handleSearch} value={this.state.keyword} />} />
            <Route path="/archives" element={<ArchivesPage data={
              this.state.keyword === "" ? this.state.archive :
                getArchivedNotes().filter(data => data.title.toLowerCase().includes(this.state.keyword.toLowerCase()))

            } handleSearch={this.handleSearch} value={this.state.keyword} />} />



            <Route path="/notes/new" element={<AddPage handleTitle={this.handleTitleForm} handleBody={this.handleBodyForm} handleSubmit={this.handleSubmit} />} />
            <Route path='/notes/:id' element={<DetailPageWrapper handleUpdate={this.onUpdateArchive} handleDelete={this.onDeleteNote} handleKeyword={this.updateKeyword}/>} />
            <Route path='*' element={
              <>
                <h3>404</h3>
                <h4>Page not found</h4>
              </>
            }/>
          </Routes>
        </main>
      </div>
    );
  }
}
App.propTypes = {
  handleParam : PropTypes.func.isRequired,
  keyword : PropTypes.string.isRequired,

}
export default AppWrapper;
