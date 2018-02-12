import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Timer from './Timer';
import Facebook from './Facebook';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>g0vhk.io</h1>
          <Facebook />
          <Timer />
        </div>
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
