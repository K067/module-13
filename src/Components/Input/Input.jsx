export const Input = ({ text, setTasks, setText }) => {
    const handleClick = () => {
        if (text)
            setTasks((tasks) => [
                ...tasks,
                {
                    id: tasks.length + 1,
                    text,
                    completed: false,
                },
            ]);
        setText("");
    };

    return (
        <div className="group">
            <input
                type="text"
                placeholder="feje aan oepgeev"
                value={text}
                onChange={(e) => setText(e.target.value.trim())}
            />
            <button className="add" onClick={handleClick}>
                te
            </button>
        </div>
    );
};