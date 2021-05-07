import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { ReactFlvPlayer } from 'react-flv-player';
import TextField from "@material-ui/core/TextField";
import "./Stream.css";

function Stream() {
	const [state, setState] = useState({ message: "", name: "" });
	const [chat, setChat] = useState([]);

	const socketRef = useRef();

	useEffect(() => {
		socketRef.current = io.connect("http://localhost:3000");
		socketRef.current.on("message", ({ name, message }) => {
			setChat([...chat, { name, message }]);
		});
		return () => socketRef.current.disconnect();
	}, [chat]);

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const onMessageSubmit = (e) => {
		const { name, message } = state;
		socketRef.current.emit("message", { name, message });
		e.preventDefault();
		setState({ message: "", name });
	};

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		));
	};

	return (
		<section className="section-stream">
			<div className="card">
				<ReactFlvPlayer
					url="ws://localhost:8000/live/stream.flv"
					heigh="800px"
					width="800px"
					isMuted={true}
				/>
			</div>
			<div className="card">
				<form onSubmit={onMessageSubmit}>
					<h1>Chat en ligne</h1>
					<div className="name-field">
						<TextField
							name="name"
							onChange={(e) => onTextChange(e)}
							value={state.name}
							label="Name"
							className="input-chat"
						/>
					</div>
					<div>
						<TextField
							name="message"
							onChange={(e) => onTextChange(e)}
							value={state.message}
							id="outline-multiline-static"
							className="input-chat"
							label="Message"
						/>
					</div>
					<button>Envoyer un message</button>
				</form>
				<div className="render-chat">
					<h1>Messages du chat :</h1>
					<br />
					{renderChat()}
				</div>
			</div>
		</section>
	);
}

export default Stream;