import MessageShow from './MessageShow';


function MessageDisplay({ messages }) {
    const renderedMessages = messages.map((message) => {
        return <MessageShow message={message}/>;
    });
    return <div>{renderedMessages}</div>;
}

export default MessageDisplay