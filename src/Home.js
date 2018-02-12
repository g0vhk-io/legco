import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Timer from './Timer';
import Facebook from './Facebook';
import { withStyles } from 'material-ui/styles';


const styles = () => ({
  jumbotron: {
    padding: '0.5em',
    backgroundColor: '#d6d810',
    backgroundImage: 'url(/assets/gov_bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#FFF',
  },
  container: {
  },
  appBar: {
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
         <AppBar position="static" className={classes.appBar}>
           <div className={classes.jumbotron}>
             <h1>g0vhk.io
             <Facebook />
             </h1>
             <Timer />
           </div>
           <Tabs>
             <Tab label="First"/>
             <Tab label="Second"/>
           </Tabs>
        </AppBar>
      </div>
    );
  }
};

export default withStyles(styles)(Home);
