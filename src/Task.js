export const Task = (props) => {
    return (
        <div className="task" style={{backgroundColor : props.completed ? 'green' :'red'}}>
          <h1>{props.taskName}</h1>
          <button onClick={()=>props.colorChanger(props.id)}>Complete</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
        );
}