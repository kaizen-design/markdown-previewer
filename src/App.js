import React from 'react';
import './scss/App.scss';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      markdown: '**Markdown Placeholder**'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div className="h-100 d-flex flex-column justify-content-between">
        <nav className="navbar justify-content-center navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Markdown Previewer</a>
        </nav>
        <main role="main" className="App container my-auto pt-4">
          <div className="row h-100">
            <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center">
              <Editor markdown={this.state.markdown}
                      onChange={this.handleChange} />
            </div>
            <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center">
              <Preview markdown={this.state.markdown} />
            </div>
          </div>
        </main>
        <footer className="text-center py-3">
          <div className="container">
            <small>
              Designed & built by <a href="https://github.com/kaizen-design" target="_blank" rel="noopener noreferrer">Denis B.</a>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

const Editor = (props) => {
  return (
    <textarea id="editor"
              className="h-100 w-100 p-3"
              value={props.markdown}
              onChange={props.onChange}/>
  )
};

const Preview = (props) => {
  return (
    <div id="preview"
         className="h-100 w-100 p-3 border" dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
  )
};

export default App;
