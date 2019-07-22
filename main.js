import { createStore, applyMiddleware, compose } from "redux";// defaults to localStorage for web
import { actions } from './actions';
import { reducer } from './reducer';
import { observeStore } from './utils';
import { handleLoadingIndicator, handleTodos } from './UI';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

observeStore(state => state.todos, handleTodos())
observeStore(state => state.loading, handleLoadingIndicator());

store.dispatch(actions.INFLATE())

document.todos.addEventListener("submit", e => {
    const todo = document.todos.todo.value;
    e.preventDefault();
    if (todo) {
        store.dispatch(actions.ADD_TODO(todo));
        document.todos.todo.value = "";
    }
});






