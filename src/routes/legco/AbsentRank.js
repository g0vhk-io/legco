import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import 'isomorphic-fetch';
import { Line } from 'rc-progress';

const styles = theme => ({
  card: {
    width: '9rem',
  },
  details: {},
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '5rem',
    height: '5rem',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  root: {
    marginLeft: '0.5rem',
    float: 'left',
  },
});

class AbsentRank extends Component {
  static absentColorFunc(percent) {
    let progressColor = 'orange';
    if (percent > 25) progressColor = 'red';
    return progressColor;
  }

  static speakColorFunc() {
    return 'green';
  }

  constructor(props) {
    super(props);
    this.state = { data: [], speak: [] };
  }

  componentWillMount() {
    fetch('https://api.g0vhk.io/legco/absent_rank/').then(res => {
      res.json().then(data => {
        this.setState({ ...this.state, data });
      });
    });
    fetch('https://api.g0vhk.io/legco/speak_rank/').then(res => {
      res.json().then(data => {
        this.setState({ ...this.state, speak: data });
      });
    });
  }

  renderRow(row, colorFunc) {
    const { classes } = this.props;
    const percent = Math.round(100.0 * row.total / row.max);
    const progressColor = colorFunc(percent);
    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <CardMedia
                className={classes.cover}
                image={`http://g0vhk.io${row.image}`}
                title={row.name}
              />
              {row.name} {row.total}次 <br />
              <Line
                percent={percent}
                strokeWidth="10"
                trailWidth="10"
                strokeColor={progressColor}
                trailColor="#D3D3D3"
              />
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { data, speak } = this.state;
    return (
      <div>
        <div className={classes.root}>
          <h2>最常缺席議員</h2>
          {data.map(r => this.renderRow(r, AbsentRank.absentColorFunc))}
        </div>
        <div className={classes.root}>
          <h2>最常發言議員</h2>
          {speak.map(r => this.renderRow(r, AbsentRank.speakColorFunc))}
        </div>
      </div>
    );
  }
}

AbsentRank.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(AbsentRank);
