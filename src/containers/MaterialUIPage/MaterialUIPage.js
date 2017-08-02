import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { TextField, RaisedButton, Card, CardHeader } from 'material-ui';

class MaterialUIPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightTheme: true,
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
      <div style={{ padding: '20px', background: this.state.lightTheme ? 'white' : 'black' }}>
        <MuiThemeProvider muiTheme={getMuiTheme(this.state.lightTheme ? lightBaseTheme : darkBaseTheme)}>
          <div>
            <RaisedButton
              label="Switch themes"
              primary={true}
              fullWidth={true}
              onClick={() => { this.setState({ lightTheme: !this.state.lightTheme }); }}
            />

            <hr/>

            <form onSubmit={this.handleSubmit}>
              <TextField
                name="create-element"
                hintText="Add to card list"
                value={this.state.value}
                onChange={({ target: { value } }) => this.setState({ value })}
              />

              <RaisedButton
                label="Add Card"
                primary={true}
                onClick={this.handleSubmit}
              />
            </form>

            <hr/>

            { this.state.list.map((list, key) => (
              <Card key={key} containerStyle={{ margin: '10px 0' }}>
                <CardHeader
                  title={list}
                />
              </Card>
            )) }
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MaterialUIPage;