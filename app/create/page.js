"use client";
import AddTodoForm from "@/components/AddTodoForm";



function page() {
    return (
        <div className="h-full min-h-screen w-full flex items-center justify-center" >
            <AddTodoForm  mode='add' />
        </div>
    );
}

export default page;