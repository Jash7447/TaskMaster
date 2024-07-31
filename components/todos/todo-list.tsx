"use client"
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Checkbox } from "../ui/checkbox";


export default function TodoList() {
    const todos = useQuery(api.todos.get) ?? [];
    const completedTodos = useQuery(api.todos.completedTodos) ?? [];
    const incompletedTodos = useQuery(api.todos.inCompleteTodos) ?? [];
    const totalTodos = useQuery(api.todos.totalTodos) ?? 0;

    if (todos === undefined || completedTodos === undefined || incompletedTodos === undefined) {
    <p>Loading...</p>;
    }
    return (
    <div className="xl:px-40">
        <div className="flex items-center justify-between">
    <h1 className="text-lg font-semibold
    md:text-2x1">Inbox</h1>
    </div>
    
    <div className="flex flex-col gap-1 py-4">
        <div className="flex items-center space-x-2">
            {incompletedTodos.map(({ taskName }, idx) => (
                <div key={idx}>
                    <Checkbox id="todo" />
                    <label
                    htmlFor="todo"
                    className="text-sm font-medium leading-none
                    peer-disabled: cursor-not-allowed
                    peer-disabled: opacity-70">
                    {taskName}
                    </label>
                </div>
            ))}
        </div>

        <div className="flex items-center space-x-2">
            {completedTodos.map(({ taskName }, idx) => (
                <div key={idx}>
                    <Checkbox id="todo" />
                    <label
                    htmlFor="todo"
                    className="text-sm font-medium leading-none
                    peer-disabled: cursor-not-allowed
                    peer-disabled: opacity-70">
                    {taskName}
                    </label>
                </div>
            ))}
        </div>
    </div>
</div>
); 
}
