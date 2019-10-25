import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { API_URL } from '../config';
import ImagesField from '../components/ImagesField';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      to: '',
      data: [],
      text: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  send() {
    console.log(this.state.user, this.state.to)
    const request = new Request(`${API_URL}/messages/admin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      },
      body: `user=${this.state.user}&to=${this.state.to}&text=${this.state.text}&room=${this.props.record.id}`
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          alert(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  setUser(value) {
    let to = this.props.record.users.filter(e => e.id !== value);
    this.setState({ user: value, to: to[0].id })
  }

  fetchData() {
    const id = this.props.record.id;
    const resource = this.props.resource;
    const request = new Request(
      `${API_URL}/${resource}/${id}/messages/admin`, {
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
        return res.json();
      })
      .then((data) => {
        console.log(data);
        let arr = this.state.data.concat(data.docs);
        this.setState({ data: arr });
      });
  }

  render() {
    return (
      <Paper >

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{'메시지 보내는 유저 선택'}</TableCell>
              <TableCell>{'텍스트 입력'}</TableCell>
              <TableCell>{'버튼'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow >
              <TableCell style={{ width: '200px' }}>
                <Select
                  value={this.state.user}
                  onChange={(e) => this.setUser(e.target.value)}
                  style={{ width: '200px' }}
                  size="small"
                >
                  {this.props.record.users.map((item, i) =>
                    <MenuItem value={item.id} key={i}>{item.name}</MenuItem>
                  )}
                </Select>
              </TableCell>
              <TableCell>
                <TextField
                  id="standard-uncontrolled"
                  style={{ width: '100%' }}
                  onChange={(e) => this.setState({ text: e.target.value })}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" component="span" onClick={() => this.send()}>
                  send
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{'날짜'}</TableCell>
              <TableCell>{'보낸 유저'}</TableCell>
              <TableCell>{'이미지'}</TableCell>
              <TableCell>{'메시지'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((item, i) =>
              <TableRow key={i}>
                <TableCell>{moment(item.updatedAt).format('YYYY-MM-DD hh:mm')}</TableCell>
                <TableCell>{(item.user) ? item.user.name : null}</TableCell>
                <TableCell>
                  {(item.user && item.user.images.length > 0) ? <img src={item.user.images[0]} style={{ width: '60px' }} /> : null}
                </TableCell>
                <TableCell>{item.text}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Paper >
    );
  }
}

export default Chat;