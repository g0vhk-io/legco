import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
  },
  button: {
    float: 'left',
  },
  toolbar: {
    display: 'block',
    minHeight: '0',
  }
};



class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Button className={classes.button} color="inherit">首頁</Button>
            <Button className={classes.button} color="inherit">會議</Button>
            <Button className={classes.button} color="inherit">法案</Button>
            <Button className={classes.button} color="inherit">政黨</Button>
            <Button className={classes.button} color="inherit">議員</Button>
            <Button className={classes.button} color="inherit">質詢</Button>
            <Button className={classes.button} color="inherit">開放數據</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}



export default withStyles(styles)(Menu);
