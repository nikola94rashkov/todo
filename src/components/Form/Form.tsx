import { ITask } from "../../Interfaces";
import { FormEvent, FC } from "react";

interface IProps {
  addNewTask(newItem: ITask): void;
}

const Form = ({ addNewTask }: IProps) => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formName = formData.get("name");
    const formNumber = formData.get("number");

    const newTask = {
      name: String(formName),
      number: Number(formNumber),
    };

    addNewTask(newTask);

    e.currentTarget.reset();
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <div>
          <input type="text" name="name" placeholder="name" />
        </div>

        <div>
          <input type="number" name="number" placeholder="number" />
        </div>

        <button>AddPerson</button>
      </form>
    </div>
  );
};

export default Form;

// import React from 'react'

// type Props = {}

// const Form = (props: Props) => {
//   return (
//     <div>Form</div>
//   )
// }
