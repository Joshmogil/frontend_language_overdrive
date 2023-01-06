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
        <div>
        <div onMouseDownCapture={handleSelect}>
            <div>{message.response}</div>
        </div>
        {isSelected && (
          <div>{message.translatedResponse}</div>
        )}
      </div>
    );
  };

export default HoverableDiv