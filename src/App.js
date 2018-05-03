import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
    super(props);
    this.state = {
      activeRoom: null,
    };
  }
  
  setActiveRoom(room) {
    this.setState({activeRoom: room});
  }
  
  render() {
    return (
      <div className="App">
        <aside id="sidebar">
          <h1 className="App-title">Bloc Chat</h1>
          <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)} />
        </aside>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
      </div>
    );
  }
}

export default App;
