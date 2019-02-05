import React, { Component } from 'react';
import ChatListItem from './ChatListItem';


// ChatList component, we are going to map through each element in the messages array and pass down certain props
// to or=ur chat list item component

const ChatList = (props) => {
	const chatItems = props.messages.map((IM) => {
		return  (
			<ChatListItem
				messages={IM.message} 
				key={IM.timestamp} 
				username={IM.username}
				avatar={IM.image}
				time={IM.timestamp}
				focused={IM.focused}
			/>
		);
	});

	return (
		<ul className="col-md-4 list-group">
		{chatItems}

		</ul>

		);
};

export default ChatList;