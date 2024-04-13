import del from '../../img/icon/icon _Trash_.svg';

export const List = ({ tasks, setTasks }) => {
    const handleThing = item => {
        setTasks(tasks.map(task => {
            if (task.id === item.id) {
                return { ...task, completed: !task.completed }
            } else {
                return task;
            }
        }))
    }

    return (
        <>
            <ul>
                {tasks && tasks.map(item => (
                    <li key={item.id}>
                        <div className='adjust'
                            onClick={() => handleThing(item)}>
                            {item.completed && <div className="line"></div>}
                            <span>{item.text}</span>
                        </div>
                        <div className="act">
                            <img src={del} alt="del" onClick={() => setTasks(tasks.filter(task => task.id !== item.id))} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
