"use client";
import Todo from "@/components/Todo";
import { useEffect, useState } from "react";


function page({ params }) {
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todo'))
        const targetedTodo = todos.find(elem => elem.id === Number(params.todoId))
        setTodo(targetedTodo)
    }, []);

    return (
        <div className="w-full h-full min-h-screen flex items-center justify-center" >
            {
                todo && (
                    <Todo todo={todo} isSeperate={true} />
                )
            }
        </div>
    );
}

export default page;