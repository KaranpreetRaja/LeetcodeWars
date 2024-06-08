import React, { FormEvent, InputHTMLAttributes, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import ProblemList from "./ProblemList";

type Props = {};

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const person = {name: '', age: 0};

  const nameRef = useRef<HTMLInputElement>(null);

  const ageRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: FieldValues) => console.log(data);

  // const onSubmit = (event: FormEvent) => {
  //   console.log(person);

  //   if (nameRef.current != null) {
  //     person.name = nameRef.current.value;

  //   }
  //   if (ageRef.current != null){
  //     person.age = parseInt(ageRef.current.value);
  //   }
  //   console.log(person);
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Room Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          ref={nameRef}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="maxPlayers" className="form">
          Max Players
        </label>
        <input
          {...register("maxPlayers")}
          id="maxPlayers"
          type="number"
          ref={ageRef}
          className="form-control"
        />
      </div>

      {/* TODO: Problem Select */}

      {/* Game Mode: First To Finish or Performance Within Time */}
      <div className="mb-3">
        <label htmlFor="gameType" className="form-label">
          Game Type
        </label>
        <select {...register("gameType")} id="gameType" className="form-select">
          <option value="First To Finish">First To Finish</option>
          <option value="Performance Within Time">
            Performance Within Time
          </option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Create Room
      </button>
    </form>
  );
};

export default Form;
