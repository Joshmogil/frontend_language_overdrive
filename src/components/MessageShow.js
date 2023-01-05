function MessageShow({ message }) {
    return <div>
            <div>{message.message}</div>
            <div>{message.response}</div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Hover Me
    </div>
            <div>{message.translatedResponse}</div>
            </div>;
}

export default MessageShow