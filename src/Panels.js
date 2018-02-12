import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

class Panels extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0};
  }

  handleChange(event, value)  {
    this.setState({ value: value });
  };

  render() {
    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
          <Tab label="首頁"/>
          <Tab label="其他項目"/>
        </Tabs>
      </div> 
    );
  }
};

export default Panels;
