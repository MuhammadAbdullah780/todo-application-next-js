"use client";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import Link from "next/link";
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

function page() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todo"))
    setTodos(todoData)
  }, []);

  return (
    <main className="h-full min-h-screen w-full flex flex-col gap-6 py-5 px-3" >
      <h1 className="heading pl-3 !text-3xl" >Todos:</h1>
      <Link href='/create' className="w-10 h-10 flex items-center ml-3 rounded-full justify-center bg-gray-300" >
        <AiOutlineAppstoreAdd height={30} width={30} />
      </Link>
      {/* TODO */}
      <div className="grid xl:grid-cols-3 2xl:grid-cols-4  gap-4 px-3" >
        {
          todos && (
            todos.map(todo => {
              return (
                <Link href={todo.id.toString()}>
                  <Todo key={todo.id} todo={todo} />
                </Link>
              )
            })

          )
        }
      </div>
    </main>
  );
}

export default page;