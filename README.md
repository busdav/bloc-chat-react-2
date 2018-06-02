Bloc Chat
Bloc Chat is a real-time chat application using Firebase and ReactJS. 

Chat rooms
The left sidebar in Bloc Chat holds the list of active chat rooms in the order they were created. Users can create new chat rooms by clicking the "New Room" button. Each new chat room will appear at the bottom of the list.

Chatting
To chat, users must first enter a chat room. Once inside, the room's name will be displayed at the top of the chat window on the right with a messaging bar at the bottom of the window. Type a message into the messaging bar and click the "send" button. New messages will appear below the previous messages. 

Timestamps
Each message is timestamped by the Firebase server.

Firebase database
Bloc Chat uses firebase database to hold two main objects: rooms and messages. These are connected through a unique room key — that is, each room has an identification number, and each message will include a roomId key with a value that matches the corresponding room's identifcation number. 

This project was built for Bloc's Web Development Program.
