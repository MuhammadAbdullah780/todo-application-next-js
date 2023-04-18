"use client";
import AddTodoForm from "@/components/AddTodoForm";


function page({ params }) {
    return (
        <div className="h-full min-h-screen w-full flex items-center justify-center" >
            <AddTodoForm todoId={params.todoId}  mode='update' />
        </div>
    );
}

export default page;