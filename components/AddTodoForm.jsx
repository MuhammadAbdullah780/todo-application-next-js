import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const AddTodoForm = ({ mode, todoId }) => {
    const [title, setTitle] = useState('');
    const router = useRouter()

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todo'))
        const elem = items?.find(e=> e.id === Number(todoId))
        if (elem) {
            setTitle(elem.title)
        } else {
            setTitle('')
        }
    }, []);

    const addTodo = (e) => {
        e.preventDefault()
        const todos = JSON.parse(localStorage.getItem('todo'))
        const newItem = {
            title,
            id: todos ? todos.length + 1 : 1,
            completed: false
        }
        if (todos) {
            localStorage.clear()
            todos.push(newItem)
            localStorage.setItem('todo', JSON.stringify(todos))

        } else {
            console.log(newItem)
            localStorage.setItem('todo', JSON.stringify([newItem]))
        }
        router.push('/')
    }


    const updateTodo = (e) => {
        e.preventDefault()
        const todos = JSON.parse(localStorage.getItem('todo'))
        localStorage.clear()
        const targetElem = todos.find(elem => elem.id === Number(todoId))
        const newArray = todos.filter(elem => elem.id !== Number(todoId))
        const newElem = {
            title,
            id:targetElem.id,
            completed:targetElem.completed

        }
        newArray.push(newElem)
        localStorage.setItem('todo', JSON.stringify(newArray))
        router.push('/')

    }




    return (
        <form onSubmit={ mode === 'add' ? addTodo : updateTodo } className="w-fit rounded-md shadow-md bg-gray-300 flex flex-col p-4 gap-4  " >
            <h3 className="heading" >Add The Todo</h3>
            <div>
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Title
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                { mode === 'add' ? 'Add Todo' : 'Update Todo' }
            </button>
        </form>
    )
}

export default AddTodoForm