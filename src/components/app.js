import React, { Component } from 'react';
import ChatList from './ChatList';





class App extends Component {
	constructor() {
		super();
		this.state = {
			messages: [],
			transcriptdate: []
		};
	}

	componentDidMount() {

		// use fetch API to pull data, was going to use Axios but fetch is built in

		fetch('https://api.myjson.com/bins/1geede')
		.then(response => response.json())
		.then(data =>  {
			//console.log(data.data.messages[1].message)
			// just tested here to see if we could pull up the second message in the string

			console.log(data.data.conversationDate)

			const messages = data.data.messages;

			const transcriptDate = data.data.conversationDate;

			this.setState(() => ({messages: messages, transcriptdate: transcriptDate}));

			//console.log("chatmessages constant", messages);

			//was using to debug and make sure messages data object was being outputted to console

			// will call our ChatList component and pass down the messages prop as state and send that down to ChatList component
		});

	}



	render() {
		return (
    		<div>
    			<header className="header-class">
    				<h1>Chat Transcript</h1>
    				<h6 className="transcript-date">{this.state.transcriptdate}</h6>
    			</header>
    			<div className="start-messages"></div>
    			<ChatList messages={this.state.messages} />
      		</div>
    	);
  	}
}

export default App;