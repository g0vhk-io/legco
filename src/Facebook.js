import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';



const styles = () => ({
  container: {
    overflow: 'hidden',
    float: 'right',
  }
});

class Facebook extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className="fb-like" data-href="https://www.facebook.com/g0vhk.io/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
      </div>
    );
  }
}

export default withStyles(styles)(Facebook);
