import MessageShow from './MessageShow';


function MessageDisplay({ messages }) {
    const renderedMessages = messages.map((message) => {
        console.log(message)
        return <MessageShow message={message}/>;
    });
    return <div>{renderedMessages}</div>;
}

export default MessageDisplay