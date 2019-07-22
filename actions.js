import { store } from './main';
import { set, get } from 'idb-keyval';

export const actions = {
    ADD_TODO: todo => {
        setTimeout(() => {
            store.dispatch(actions.ADD_TODO_FINISHED(todo));
            store.dispatch(actions.PERSIST());
        }, 1000);
        return { type: "ADD_TODO" };
    },
    ADD_TODO_FINISHED: todo => ({
        type: "ADD_TODO_FINISHED",
        todo
    }),
    REMOVE_TODO: todo => ({
        type: "REMOVE_TODO",
        todo
    }),
    PERSIST: () => {
        set('todos', store.getState().todos)
            .then(() => store.dispatch(actions.PERSIST_FINISHED()));
        return { type: "PERSIST" };
    },
    PERSIST_FINISHED: () => ({
        type: "PERSIST_FINISHED"
    }),
    INFLATE: () => {
        get('todos')
            .then(todos => store.dispatch(actions.INFLATE_FINISHED(todos)));
        return { type: "INFLATE" };
    },
    INFLATE_FINISHED: todos => ({
        type: "INFLATE_FINISHED",
        todos
    }),
};
