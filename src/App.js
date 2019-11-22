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
      <div className="h-100 d-flex flex-column">
        <nav className="navbar justify-content-center navbar-dark bg-gradient-dark shadow-sm">
          <span className="navbar-brand mb-0 h1">Markdown Previewer</span>
        </nav>
        <main role="main" className="App container h-100 pt-3 pt-lg-4">
          <div className="row h-100">
            <div className="col-lg-6 h-100 mb-3 mb-lg-0">
              <div className="d-flex flex-column h-100">
                <Title title="Editor" />
                <Editor markdown={this.state.markdown}
                        onChange={this.handleChange} />
              </div>
            </div>
            <div className="col-lg-6 h-100 mb-3 mb-lg-0">
              <div className="d-flex flex-column h-100">
                <Title title="Preview" />
                <Preview markdown={this.state.markdown} />
              </div>
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
              className="w-100 p-3 rounded-bottom shadow-sm"
              value={props.markdown}
              onChange={props.onChange}/>
  )
};

const Preview = (props) => {
  return (
    <div id="preview"
         className="w-100 p-3 border rounded-bottom shadow-sm"
         dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
  )
};

const placeholder =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
