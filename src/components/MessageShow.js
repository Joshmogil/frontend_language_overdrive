function MessageShow({ message }) {
    return <div>
            <div>{message.message}</div>
            <div>{message.response}</div>
            </div>;
}

export default MessageShow