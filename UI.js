import { store } from './main';
import { actions } from "./actions";
export function handleLoadingIndicator() {
    return () => {
        const loading = document.createElement("div");
        loading.className = "loading";
        if (store.getState().loading || store.getState().persisting) {
            loading.innerText = store.getState().loading ? "LOADING" : "PERSISTING";
            document.body.appendChild(loading);
        }
        else {
            document.body.removeChild(document.querySelector(".loading"));
        }
    };
}

export function handleTodos() {
    return () => {
        if (store.getState().todos && store.getState().todos.length > 0) {
            document.querySelector(".todolist").innerHTML = store.getState().todos.map(t => render(t)).join("\n");
        }
    };
}

function render(todo) {
    return `📌 ${todo} <a onclick="removeTodo('${todo}')">(X)<a/>`;
}

window.removeTodo = todo => store.dispatch(actions.REMOVE_TODO(todo));
