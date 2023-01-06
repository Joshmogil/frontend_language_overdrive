import { useState } from 'react';

const HoverableDiv = ({ message }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
        <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div>{message.response}</div>
        </div>
        {isHovering && (
          <div>{message.translatedResponse}</div>
        )}
      </div>
    );
  };

export default HoverableDiv