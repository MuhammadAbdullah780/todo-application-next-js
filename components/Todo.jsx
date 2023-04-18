import { useRouter } from 'next/navigation';
import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import IconWrapper from './IconWrapper';
import Link from 'next/link';

const Todo = ({ todo, isSeperate }) => {
    const router = useRouter();
    const deleteTodo = () => {
        const todos = JSON.parse(localStorage.getItem('todo'))
        if (!todos) {
            return null
        }
        localStorage.clear()
        const reFreshedTodos = todos.filter((item) => item.id !== todo.id)
        localStorage.setItem('todo', JSON.stringify(reFreshedTodos))
        router.push('/')
    }


    return (
        <div className='bg-slate-300 w-96 flex flex-col gap-2 p-5 rounded-md shadow-md' >
            {/* TITLE */}
            <h4>Title: {todo.title}</h4>
            {todo.completed ? (<h6>Completed</h6>) : (<h6>Not Completed</h6>)}
            {
                isSeperate && (
                    <div className='flex items-start gap-3 -ml-3 mt-3 ' >
                        <IconWrapper>
                            <AiFillDelete height={30} width={30} onClick={deleteTodo} />
                        </IconWrapper>
                        <IconWrapper>
                            <Link href={`${todo.id}/update`} ><HiPencil height={30} width={30} /></Link>
                        </IconWrapper>
                    </div>
                )
            }
        </div>
    )
}

export default Todo