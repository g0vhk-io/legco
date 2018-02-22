import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  jumbotron: {
    padding: '0.5em',
    backgroundColor: '#AAA',
    backgroundImage: 'url(/assets/gov_bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#FFF',
  },
  container: {
  },
  appBar: {
  },
});


class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
         <AppBar position="static" className={classes.appBar}>
           <div className={classes.jumbotron}>
             <h1><div>立法會</div></h1>
           </div>
        </AppBar>
      </div>

    );
  }
}

export default withStyles(styles)(Home);
