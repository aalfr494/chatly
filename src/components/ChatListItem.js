import React, { Component } from 'react';


const ChatListItem = ({messages, username, avatar, time, focused}) => {
	//const messages = props.messages etc just easier to declare all our props this way in ES6;

	//Am using Bootstrap with this since gives us some built in styling with cards etc and responsiveness

	// could not think of elegant way to target username color so will do conditional rendering by name.length

	return (
		<div className="card">
			<div className="card-body">
				<div style={{ background: focused ? "white" : "lightgrey"}}> 
					<div>
						<img className="img-circle" src={avatar} />
					</div>

					<p className="card-text"> 
						{messages}		
					</p>
						
							<div>
								{username.length > 12 ? <p className="long-username-formatting">{username}</p> : <p className="username-formatting">{username}</p>}
								

								<small className="text-muted timestamp-class"><b>
									Posted: {time}</b>
								</small>
							</div>
				</div>
			</div>
		</div>
		);
};

export default ChatListItem;