import SingleMessageShow from './MessageShowSingle';
import HoverableDiv from './MessageDisplayWithHover';

function MessageShow({ message }) {
    console.log(`MessageShow ${message}`)
    return <div>
            <SingleMessageShow message={message}/>
            <HoverableDiv message={message}/>
            </div>;
}

export default MessageShow