import React, { FormEvent, useRef, useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const maxPlayersRef = useRef<HTMLInputElement>(null);

  const [room, setRoom] = useState({ name: "", maxPlayers: "" });

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current != null && maxPlayersRef.current != null) {
      console.log(
        "name" +
          nameRef.current.value +
          " maxPlayers" +
          maxPlayersRef.current.value
      );
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Room Name
        </label>
        <input
          ref={nameRef}
          onChange={(event) => setRoom({ ...room, name: event.target.value })}
          id="name"
          type="text"
          className="form-control"
          value={room.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="maxPlayers" className="form">
          Max Players
        </label>
        <input
          ref={maxPlayersRef}
          id="maxPlayers"
          type="number"
          className="form-control"
          value={room.maxPlayers}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Create Room
      </button>
    </form>
  );
};

export default Form;
