import React, { Component } from 'react';
import { Button, Chip, TextField } from 'react-md';

class ReactMdPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      list: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      list: [...this.state.list, this.state.value],
      value: '',
    });
  }

  render() {
    return (
      <div id="react-md-page" style={{ padding: '20px' }}>
        <TextField
          id="value-field"
          label="What's on your mind"
          helpText="Type something here"
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />

        <Button style={{ marginRight: '5px' }} raised primary label="Submit" onClick={this.handleSubmit}/>

        <Button raised secondary label="Clear" onClick={() => this.setState({ value: '' })}/>

        <hr/>

        { this.state.list.length > 0 && <p>Click a chip to remove it</p> }

        { this.state.list.map((listValue, key) => (
          <Chip style={{ marginRight: '5px' }} key={key} label={listValue} onClick={() => {
            const index = this.state.list.indexOf(listValue);
            this.setState({ list: [
              ...this.state.list.slice(0, index),
              ...this.state.list.slice(index + 1),
            ] });
          }} />
        )) }
      </div>
    );
  }
}

export default ReactMdPage;