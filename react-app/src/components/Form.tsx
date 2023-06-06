import React, { FormEvent, useRef, useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const [person, setPerson] = useState({ name: "", age: 0 });

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current != null && ageRef.current != null) {
      console.log(
        "name" + nameRef.current.value + " age" + ageRef.current.value
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
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form">
          Max Players
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Create Room
      </button>
    </form>
  );
};

export default Form;
