import { useEffect, useState } from "react";

export const useContent = () => {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    return { text, setText, tasks, setTasks }
}

