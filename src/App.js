import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBR5YCcQq87gd5OFZ9bV8Yl8FDqb8Cxx2o",
    authDomain: "bloc-chat-react-f8425.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-f8425.firebaseio.com",
    projectId: "bloc-chat-react-f8425",
    storageBucket: "",
    messagingSenderId: "874191295469"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRoom: null,
      user: null
    };
  }
  
  setActiveRoom(room) {
    this.setState({activeRoom: room});
  }

  setUser(user) {
    this.setState({user: user});
  }
  
  render() {
    return (
      <div className="App">
        <aside id="sidebar">
          <h1 className="App-title">Bloc Chat</h1>
          <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)} user={this.state.user}/>
        </aside>
        <aside id="sidebar-bottom">
           <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user}/>
        </aside>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
