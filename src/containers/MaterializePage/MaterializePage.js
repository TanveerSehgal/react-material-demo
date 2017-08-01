import React, { Component } from 'react';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Chip from '../../components/Chip';

class MaterializePage extends Component {
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
      <div id="materialize-page" style={{ padding: '20px' }}>
        <form onSubmit={this.handleSubmit}>
          <InputField
            name="valueField"
            value={this.state.value}
            label="Try me!"
            onChange={({ target: { value } }) => this.setState({ value })}
          />

          <Button label="submit" onClick={this.handleSubmit}/>
        </form>

        <hr/>

        { this.state.list.length > 0 && <p>Click to remove a chip</p> }

        { this.state.list.map((listValue, key) => (
          <Chip key={key} value={listValue} onClick={() => {
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

export default MaterializePage;