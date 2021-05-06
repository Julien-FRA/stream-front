import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import './Stream.css';

function Stream() {

    const [state, setState] = useState({ message: '', name: '' })
    const [chat, setChat] = useState([])
    // const [playing, setPlaying] = useState(false);

    // const HEIGHT = 500;
	// const WIDTH = 500;

    // const startVideo = () => {
	// 	setPlaying(true);
	// 	navigator.getUserMedia(
	// 		{
	// 			video: true,
	// 		},
	// 		(stream) => {
	// 			let video = document.getElementsByClassName('app__videoFeed')[0];
	// 			if (video) {
	// 				video.srcObject = stream;
	// 			}
	// 		},
	// 		(err) => console.error(err)
	// 	);
	// };

    // const stopVideo = () => {
	// 	setPlaying(false);
	// 	let video = document.getElementsByClassName('app__videoFeed')[0];
	// 	video.srcObject.getTracks()[0].stop();
	// };


    const socketRef = useRef()

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:3000")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

    const onTextChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({name, message}, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}

    return (
        <section className="section-stream">
            {/* <div className="div-stream">
            <div className="app">
			<div className="app__container">
				<video
					height={HEIGHT}
					width={WIDTH}
					muted
					autoPlay
					className="app__videoFeed"
				></video>
			</div>
			<div className="app__input">
				{playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}
			</div>
		    </div>
            </div> */}
            <div className="card">
                <form onSubmit={onMessageSubmit}>
                    <h1>Chat en ligne</h1>
                    <div className="name-field">
                        <TextField
                            name="name"
                            onChange={e => onTextChange(e)}
                            value={state.name}
                            label="Name" />
                    </div>
                    <div>
                        <TextField
                            name="message"
                            onChange={e => onTextChange(e)}
                            value={state.message}
                            id="outline-multiline-static"
                            variant="outlined"
                            label="Message" />
                    </div>
                    <button>Envoyer un message</button>
                </form>
                <div className="render-chat">
                    <h1>Messages du chat :</h1><br />
                    {renderChat()}
                </div>
            </div>
        </section>
    );
    console.log(renderChat())
}



export default Stream;