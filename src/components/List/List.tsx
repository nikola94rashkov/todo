import { ITask } from "../../Interfaces"

interface Props {
    task: ITask;
}

const List = ({ task }: Props) => {
  return (
    <>
        <div>{task.name}</div>
        <div>{task.number}</div>
    </>
  )
}

export default List