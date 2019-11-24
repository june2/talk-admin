import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { API_URL } from './../config';


class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const request = new Request(
      `${API_URL}/users/update/admin`, {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${localStorage.getItem('token')}`
      },
    })
    return fetch(request)
      .then(res => {
        if (res.status < 200 || res.status >= 300) {
          console.error(res.statusText);
        }
        // return res.json();
      })
    // .then((data) => {
    //   console.log(data)
    // });
  }


  render() {
    return (
      <Card >
        <Typography variant="headline" component="h2">          
        </Typography>
      </Card>
    );
  }
}

const styles = {
  card: {
    float: 'left',
    margin: '-20px 20px 0 15px',
    zIndex: 100,
    borderRadius: 3,
  },
  icon: {
    float: 'right',
    width: 54,
    height: 54,
    padding: 14,
    color: '#fff',
  },
};

export default withStyles(styles)(Point);