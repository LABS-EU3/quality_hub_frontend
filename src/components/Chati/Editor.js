import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';
import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import styled from 'styled-components';
import Terminal from '../Code/Terminal';
import { isEqual } from 'lodash';
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import {
  mapLanguageToId,
  mapLanguageToEditorState,
} from '../../utils/executionHelpers';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 75vh;
  width: 100vw;

  .code-header-container {
    height: 12%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 2em;
  }

  .code-body-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const EditorContainer = styled.div`
  width: 50%;
  height: 100%;

  .codemirror {
    height: 100%;
  }
`;

const InterfaceContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .toggle-button {
    height: 52px;
    width: 52px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      // html: '',
      // css: '',
      // js: '',
      output: '',
      editorState: '',
      language: 'javascript',
      channelName:
        this.props.user.role_id === 1
          ? `${this.props.user.email}-${this.props.peerId}`
          : `${this.props.peerId}-${this.props.user.email}`,
    };

    this.pusher = new Pusher('9ebd578e6fc08eeb098e', {
      cluster: 'eu',
      forceTLS: true,
    });

    this.channel = this.pusher.subscribe(this.state.channelName);
  }

  // componentDidUpdate() {
  //   this.runCode();
  // }

  componentDidMount() {
    this.setState({
      id: pushid(),
    });

    this.channel.bind('text-update', data => {
      const { id } = this.state;
      if (data.id === id) return;

      this.setState({
        editorState: data.editorState,
        output: data.output,
        language: data.language,
      });
    });
  }

  syncUpdates = () => {
    const data = { ...this.state };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}editor/update`, {
        update: data,
        channelName: this.state.channelName,
      })
      .catch(console.error);
  };

  invokeCode = (code, param, value) => {
    return `
    ${code}
    console.log(${param}(${value}));
    `;
  };

  testCode = (testCase, value) => {
    axios
      .post('https://api.judge0.com/submissions?wait=false', {
        source_code: `${this.invokeCode(
          this.state.editorState,
          testCase,
          value,
        )}`,
        language_id: `${mapLanguageToId(this.state.language)}`,
      })
      .then(res => {
        setTimeout(() => {
          axios
            .get(
              `https://api.judge0.com/submissions/${res.data.token}`,
            )
            .then(res => {
              if (res.data.stdout) {
                this.setState({
                  output: `${this.state.output}Against test input of ${value}, your code returned: ${res.data.stdout}`,
                });
                // setOutput(
                //   prevArr =>
                //     `${prevArr}Against test input of ${value}, your code returned: ${res.data.stdout}`,
                // );
              } else if (res.data.compile_output) {
                // setOutput(`Error:  + ${res.data.compile_output}`);
                this.setState({
                  output: `Error:  + ${res.data.compile_output}`,
                });
              } else {
                // setOutput('Unable to run code');
                this.setState({
                  output: `Error:  + ${res.data.compile_output}`,
                });
              }
            })
            .catch(err => {});
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  logCode = () => {
    axios
      .post('https://api.judge0.com/submissions?wait=false', {
        source_code: `${this.state.editorState}`,
        language_id: `${mapLanguageToId(this.state.language)}`,
      })
      .then(res => {
        console.log(res);
        setTimeout(() => {
          axios
            .get(
              `https://api.judge0.com/submissions/${res.data.token}`,
            )
            .then(res => {
              console.log(res);
              if (res.data.stdout) {
                this.setState({ output: res.data.stdout });
                // setOutput(res.data.stdout);
              } else if (res.data.compile_output) {
                this.setState({ output: res.data.compile_output });

                // setOutput(res.data.compile_output);
              } else if (res.data.stderr) {
                this.setState({ output: res.data.stderr });
                // setOutput(res.data.stderr);
              } else {
                alert('Unable to run code');
              }
            })
            .catch(err => {});
        }, 2000);
      })
      .catch(err => {});
  };

  // const testResultsSquare = [25, 100, 5513104];
  // const squareSolution = el => el * el;

  checkTests = (testCases, expectedValues, solution) => {
    if (
      isEqual(
        testCases.map(el => solution(el)),
        expectedValues,
      )
    ) {
      return true;
    }
    return false;
  };

  handlePost = () => {
    // setOutput([]);
    const testCasesSquare = [5, 10, 2348];
    this.setState({ output: [] });
    if (mapLanguageToId(this.state.language) === 63) {
      // setOutput(`Running tests...\n`);
      this.setState({ output: `Running tests...\n` });
      testCasesSquare.forEach(el => this.testCode('square', el));
    } else {
      this.logCode();
    }
  };

  handleSelection = event => {
    // setLanguage(event.target.value);
    this.setState({ language: event.target.value });
    // setEditorState(mapLanguageToEditorState(event.target.value));
    this.setState({
      editorState: mapLanguageToEditorState(event.target.value),
    });
  };

  // runCode = () => {
  //   const { html, css, js } = this.state;

  //   const iframe = this.refs.iframe;
  //   const document = iframe.contentDocument;
  //   const documentContents = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //       <title>Document</title>
  //       <style>
  //         ${css}
  //       </style>
  //     </head>
  //     <body>
  //       ${html}

  //       <script type="text/javascript">
  //         ${js}
  //       </script>
  //     </body>
  //     </html>
  //   `;

  //   document.open();
  //   document.write(documentContents);
  //   document.close();
  // };

  render() {
    // const { html, js, css } = this.state;
    // const codeMirrorOptions = {
    //   theme: 'material',
    //   lineNumbers: true,
    //   scrollbarStyle: null,
    //   lineWrapping: true,
    // };

    return (
      // <div className='App'>
      //   <section className='playground'>
      //     <div className='code-editor html-code'>
      //       <div className='editor-header'>HTML</div>
      //       <CodeMirror
      //         value={html}
      //         options={{
      //           mode: 'htmlmixed',
      //           ...codeMirrorOptions,
      //         }}
      //         onBeforeChange={(editor, data, html) => {
      //           this.setState({ html }, () => this.syncUpdates());
      //         }}
      //       />
      //     </div>
      //     <div className='code-editor css-code'>
      //       <div className='editor-header'>CSS</div>
      //       <CodeMirror
      //         value={css}
      //         options={{
      //           mode: 'css',
      //           ...codeMirrorOptions,
      //         }}
      //         onBeforeChange={(editor, data, css) => {
      //           this.setState({ css }, () => this.syncUpdates());
      //         }}
      //       />
      //     </div>
      //     <div className='code-editor js-code'>
      //       <div className='editor-header'>JavaScript</div>
      //       <CodeMirror
      //         value={js}
      //         options={{
      //           mode: 'javascript',
      //           ...codeMirrorOptions,
      //         }}
      //         onBeforeChange={(editor, data, js) => {
      //           this.setState({ js }, () => this.syncUpdates());
      //         }}
      //       />
      //     </div>
      //   </section>
      //   <section className='result'>
      //     <iframe title='result' className='iframe' ref='iframe' />
      //   </section>
      // </div>
      <FlexContainer>
        <div className='code-header-container'>
          <InterfaceContainer>
            <h1>Code Editor</h1>
            <FormControl>
              <InputLabel>Select Programming Language</InputLabel>
              <Select
                style={{ width: '20em' }}
                value={this.state.language}
                onChange={this.handleSelection}
              >
                <MenuItem value='javascript'>Javascript</MenuItem>
                <MenuItem value='python'>Python</MenuItem>
                <MenuItem value='java'>Java</MenuItem>
                <MenuItem value='c'>C</MenuItem>
                <MenuItem value='cpp'>C++</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Select Coding Challenge</InputLabel>
              <Select readOnly style={{ width: '20em' }} value=''>
                <MenuItem value='square'>Square a number</MenuItem>
                <MenuItem value='add'>Add two numbers</MenuItem>
                <MenuItem value='fizzbuzz'>Fizzbuzz</MenuItem>
                <MenuItem value='reverse'>Reverse a string</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={this.handlePost}>Run Code</Button>
          </InterfaceContainer>
        </div>
        <div className='code-body-container'>
          <EditorContainer>
            <CodeMirror
              className='codemirror'
              value={this.state.editorState}
              options={{
                mode: `${
                  this.state.language === 'java' ||
                  this.state.language === 'c' ||
                  this.state.language === 'cpp'
                    ? 'clike'
                    : this.state.language
                }`,
                theme: 'material',
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ editorState: value }, () =>
                  this.syncUpdates(),
                );
                // this.setState({ js }, () => this.syncUpdates());
              }}
              onChange={(editor, data, value) => {}}
              editorDidMount={editor => {
                editor.setSize('100%', '100%');
              }}
            />
          </EditorContainer>
          <Terminal initialText='$  ' output={this.state.output} />
        </div>
      </FlexContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    peerId: state.interviewReducer.peerId,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(App);