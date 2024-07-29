import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").collect();
  },
});

// changed from 1 qrguments to 2 arguments
export const completedTodos = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db 
            .query("todos")
            .filter(q => q.eq(q.field("isCompleted"), true))
            .collect();
    },
});

// changed from 1 qrguments to 2 arguments
export const incompletedTodos = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db 
            .query("todos")
            .filter(q => q.eq(q.field("isCompleted"), false))
            .collect();
    },
});

export const totalTodos = query({
    args: {},
    handler: async (ctx) => {
        const todos = await ctx.db 
            .query("todos")
            .filter(q => q.eq(q.field("isCompleted"), false))
            .collect();
            
        return todos.length || 0;
    },
});
