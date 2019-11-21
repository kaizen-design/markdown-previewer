import React from 'react';
import './scss/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="h-100 d-flex flex-column justify-content-between">
        <nav className="navbar justify-content-center navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Markdown Previewer</a>
        </nav>
        <main role="main" className="App container my-auto">
          <div className="row h-100">
            <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center">
              <h2>Editor</h2>
            </div>
            <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center">
              <h2>Preview</h2>
            </div>
          </div>
        </main>
        <footer className="text-center py-3">
          <div className="container">
            <small>Designed & built by <a href="#" target="_blank">Denis B.</a></small>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
