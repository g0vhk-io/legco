import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import 'whatwg-fetch'; 

const styles = () => ({
  container: {
  },
  column: {
    position: 'relative',
    bottom: '0',
    float: 'left',
    width: '50%',
    height: '100%'
  },
  chat: {
    width: '80%',
    height: '50vh',
    border: '0'
  }
});

class Panels extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0};
  }

  componentWillMount() {
    fetch('https://api.g0vhk.io/gov/consultation/').then(res => {
      res.json().then(data => {
        this.setState({... this.state ,consultation: data});
      });
    });
    fetch('https://api.g0vhk.io/news/').then(res => {
      res.json().then(data => {
        this.setState({... this.state , news:data});
      });
    });

  }

  handleChange(event, value)  {
    this.setState({...this.state, value: value });
  };

  renderConsultation() {
    const { classes } = this.props;
    const { consultation } = this.state;
    return (
        <div>
          <h2>現正刊登的諮詢文件</h2> 
          <Table>
            <TableHead>
               <TableRow>
                 <TableCell>諮詢文件</TableCell><TableCell>截止日期</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
            { consultation && 
              consultation.results.map( r => {
                return (
                  <TableRow key={r.key}>
                    <TableCell>
                      <a href={r.link}>
                        {r.title}
                      </a>
                    </TableCell>
                    <TableCell>
                      {r.date}
                    </TableCell>
                  </TableRow>);
              })
            }
            </TableBody>
          </Table>
        </div>
    );
  }

  renderNews() {
    const { classes } = this.props;
    return (
      <div>
        <h2>聊天室</h2>
        <iframe src="https://gitter.im/g0vhk-io/Lobby/~embed" className={classes.chat}/>
      </div>
    ); 
  }

  renderMain() {
    const { classes } = this.props;
    const { news } = this.state;
    return (
       <div className={classes.container}>
        <div>
          <h2>最新消息</h2>
          <Table>
            <TableBody>
            { news && 
              news.results.map( r => {
                return (<TableRow key={r.id}><TableCell><div dangerouslySetInnerHTML={{__html:r.text_ch}}></div></TableCell></TableRow>);
              })
            }
            </TableBody>
          </Table>

        </div>
       </div>
    );
  }

  render() {
    const { state } = this;
    const show = state.value == 0
    return (
      <div>
        <AppBar position="static">
          <Tabs value={ state.value} onChange={this.handleChange.bind(this)}>
            <Tab label="最新消息"/>
            <Tab label="聊天室"/>
            <Tab label="現正刊登的諮詢文件"/>
          </Tabs>
        </AppBar>
        { state.value == 1  && this.renderNews()}
        { state.value == 0  && this.renderMain()}
        { state.value == 2  && this.renderConsultation()}
      </div> 

    );
  }
};

export default withStyles(styles)(Panels);
