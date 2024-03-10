import { useState } from "react";

export default function Player({ initialName, symbol, activeClass }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editableName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <>
      <li className={activeClass ? "active" : undefined}>
        {editableName}
        <span>{symbol}</span>
      </li>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </>
  );
}
