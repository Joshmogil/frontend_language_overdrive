import "./css/message.css"

function SingleMessageShow({ message }) {
    return <div className="message-to-container">
            <div className="filler-div"></div>
            <div className="message-to"> {message.message}</div>
            </div>;
    
}

export default SingleMessageShow