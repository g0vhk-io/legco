import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  container: {
    fontSize:'15pt',
    width: '100%',
    textAlign: 'right',
  },
  right: {
    float: 'right',
  }
});

class Timer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.1.0/jquery.countdown.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flipcountdown/3.0.5/jquery.flipcountdown.min.css"></link>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/flipcountdown/3.0.5/jquery.flipcountdown.min.js"></script>
        <script type="text/javascript" src="/assets/clock.js"/>
        五十年不變倒數器<br/>
        &nbsp;
        <div id="count_down_second" className={classes.right}></div>
        <div className={classes.right}>分鐘</div>
        <div id="count_down_min" className={classes.right}></div>
        <div className={classes.right}>小時</div>
        <div id="count_down_hour" className={classes.right}></div>
        <div className={classes.right}>日</div>
        <div id="count_down_day" className={classes.right}></div>
        <div className={classes.right}>年</div>
        <div id="count_down_year" className={classes.right}></div>
      </div>         
    );
  }
};

export default withStyles(styles)(Timer);
