import MessageShow from './MessageShow';


function MessageDisplay({ messages }) {
    const renderedMessages = messages.map((message, i) => {
        console.log(`MessageDisplay ${message}`)
        return <div key={i}>
                <MessageShow message={message}/>
                </div> ;
    });
    return <div>{renderedMessages}</div>;
}

export default MessageDisplay