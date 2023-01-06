import "./css/message.css"

import { useState } from 'react';

const HoverableDiv = ({ message }) => {
    const [isSelected, setSelected] = useState(false);

    const handleSelect = () => {
        if (isSelected === true){
            setSelected(false);
        } else {
            setSelected(true)
        }
            
    };

    return (
        <div className="message-from-container">
        <div className="filler-div"></div>
        {isSelected && (
          <div className="translated-from" >{message.translatedResponse}</div>
        )}
        <div className="message-from" onMouseDownCapture={handleSelect}>
            <div >{message.response}</div>
        </div>
      </div>
    );
  };

export default HoverableDiv