import './index.css';
import { useState } from 'react';



export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let playerName = <span className='player-name'>{name}</span>;

    if(isEditing) {
        playerName = <input type="text" required />
    }

    return (
      <>
        <li>
          {playerName}
          <span className='player-symbol'>{symbol}</span>
        </li>
        <button onClick={handleEditClick}>Edit</button>
      </>
    )
  }