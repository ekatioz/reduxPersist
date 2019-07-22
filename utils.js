import { store } from './main';

export function observeStore(select, onChange) {
    let currentState;
    function handleChange() {
        let nextState = select(store.getState());
        if (nextState !== currentState) {
            currentState = nextState;
            onChange(currentState);
        }
    }
    let unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}
