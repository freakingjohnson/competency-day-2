import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import Card, { CardContent } from 'material-ui/Card';
import './App.css';
import FuncCompWithProps from './comps/funcCompWithProps'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'type something here',
      bodyData: [],
      bodyId: '',
      text: '',
      putText: '',
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handlePost = (e) => {
    axios.post('/api/postbody', {
      body: this.state.text
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    axios.get('/api/getbody')
      .then((res) => {
        this.setState({
          bodyData: res.data,
          text: ''
        })
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleDelete = (e) => {
    console.log(this.state.bodyId)
    axios.delete('/api/deletebody/' + e.target.value).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
    axios.get('/api/getbody')
      .then((res) => {
        this.setState({
          bodyData: res.data,
        })
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleText = (e) => {
    this.setState({ text: e.target.value })
    console.log(this.state)
  }

  handlePut = (e) => {
    axios.put('/api/putbody', {
      body: this.state.putText,
      id: e.target.value,
    }).then(function (res) {
      console.log(res)
    }).catch(function (error) {
      console.log(error)
      alert("error! try again")
    })
    axios.get('/api/getbody')
      .then((res) => {
        this.setState({
          bodyData: res.data,
          putText: ''
        })
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handlePutText = (e) => {
    this.setState({ putText: e.target.value })
  }

  componentDidMount() {
    axios.get('/api/getbody')
      .then((res) => {
        this.setState({
          bodyData: res.data,
        })
        console.log(this.state)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    const data = this.state.bodyData
    console.log(data)
    const getData = data && data.map(body => {
      return (
        <Card key={body.id} >
          <CardContent>
            {body.body}
          </CardContent>
          <button value={body.id} onClick={this.handleDelete}>delete</button>
          <button value={body.id} onClick={this.handlePut}>edit</button>
        </Card>
      )
    }
    )
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to={`/funccomp/${this.state.name}`}>link to a functional component</Link>
        <br />
        <input disabled value="disabled input"/>
        <br/>
        <input onChange={this.handleChange} value={this.state.name}/>
        <br />
        <FuncCompWithProps name={this.state.name} />
        <br />
        <p>type below and hit send for stuff</p>
        <input className="input" onChange={this.handleText} value={this.state.text} />
        <button onClick={this.handlePost}>send</button>
        <br />
        <p>type in the box below and hit edit on a item</p>
        <input onChange={this.handlePutText} value={this.state.putText} />
        <br/>
        {data && data.length > 0 ?
          <div>
            {getData}
          </div>
          : <div>refresh if nothing</div>
        }
      </div>
    );
  }
}

export default App;
