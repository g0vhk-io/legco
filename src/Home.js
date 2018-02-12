import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';


class Home extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
           <Tabs>
             <Tab label="First"/>
             <Tab label="Second"/>
           </Tabs>
        </AppBar>
      </div>
    );
  }
};

export default Home;
