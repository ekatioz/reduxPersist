import produce from "immer";
export const reducer = (state = { todos: [] }, action) => produce(state, (daft) => {
    switch (action.type) {
        case "ADD_TODO":
            daft.loading = true;
            return;
        case "ADD_TODO_FINISHED":
            daft.todos.push(action.todo);
            daft.loading = false;
            return;
        case "REMOVE_TODO":
            daft.todos.splice(state.todos.indexOf(action.todo), 1);
            return;
        case "PERSIST":
            daft.persisting = true;
            return;
        case "PERSIST_FINISHED":
            daft.persisting = false;
            return;
        case "INFLATE":
            daft.inflating = true;
            return;
        case "INFLATE_FINISHED":
            daft.todos = action.todos || [];
            daft.inflating = false;
            return;
        default:
            return;
    }
});
