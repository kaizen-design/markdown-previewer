import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      markdown: placeholder
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
        <nav className="navbar justify-content-center navbar-dark bg-gradient-dark shadow-sm">
          <span className="navbar-brand mb-0 h1">Markdown Previewer</span>
        </nav>
        <main role="main" className="App container my-auto pt-3 pt-lg-4">
          <div className="row h-100">
            <div className="col-lg-6 h-100 d-flex flex-column align-items-center justify-content-center mb-3 mb-lg-0">
              <Title title="Editor" />
              <Editor markdown={this.state.markdown}
                      onChange={this.handleChange} />
            </div>
            <div className="col-lg-6 h-100 d-flex flex-column align-items-center justify-content-center mb-3 mb-lg-0">
              <Title title="Preview" />
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

const Title = (props) => {
  return (
    <h6 className="w-100 py-2 px-3 mb-0 bg-gradient-secondary text-white rounded-top shadow-sm"
        dangerouslySetInnerHTML={{__html: props.title}} />
  )
};

const Editor = (props) => {
  return (
    <textarea id="editor"
              className="h-100 w-100 p-3 rounded-bottom shadow-sm"
              value={props.markdown}
              onChange={props.onChange}/>
  )
};

const Preview = (props) => {
  return (
    <div id="preview"
         className="h-100 w-100 p-3 border rounded-bottom shadow-sm"
         dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
  )
};

const placeholder = '**Markdown Placeholder**';

export default App;
