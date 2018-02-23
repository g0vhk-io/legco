import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import 'whatwg-fetch'; 
import { Progress } from 'react-sweet-progress';
//import "react-sweet-progress/lib/style.css";

const styles = theme =>  ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
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
  }
});

class AbsentRank extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    fetch('https://api.g0vhk.io/legco/absent_rank/').then(res => {
      res.json().then(data => {
        this.setState({data: data});
      });
    });
  }

  renderRow(row) {
    const { classes } = this.props;
    const percent = Math.round(100.0 * row.total / row.max );
    let progressStatus = "active";
    if (row. percent > 30)
      progressStatus = "danger" ;
    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">
                {row.name}
              </Typography>
                <Progress
                  percent={percent}
                  status={progressStatus} 
                  style={{width: '200em'}}
                  theme= {{active: {
                    color: '#fbc630'
                  }}}
                />
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={"http://g0vhk.io" + row.image}
            title={row.name}
          />
        </Card>
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.root}>
        <h2>最常缺席議員</h2>
        {data.map(r => this.renderRow(r))}
      </div>      
    );
  }
}

export default withStyles(styles, { withTheme: true })(AbsentRank);
