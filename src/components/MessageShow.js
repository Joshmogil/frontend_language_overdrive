import "./css/display.css"

import SingleMessageShow from './MessageShowSingle';
import HoverableDiv from './MessageDisplayWithHover';

function MessageShow({ message }) {
    console.log(`MessageShow ${message}`)
    return <div>
            <SingleMessageShow message={message}/>
            <div className="text-screen"></div>
            <HoverableDiv message={message}/>
            </div>;
}

export default MessageShow