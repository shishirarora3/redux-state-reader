
var providerSelector = document.querySelector("article");
var getStoreState = function (dom) {
    for (var key in dom) {
        if (key.startsWith("__reactInternalInstance$")) {
            var compInternals = dom[key]._currentElement;
            var compWrapper = compInternals._owner;
            var comp = compWrapper._instance;
            var state = comp._reactInternalInstance._context.store.getState();
            var stateString = JSON.stringify(state);
            var initialState = JSON.stringify(window.__WML_REDUX_INITIAL_STATE__);
            window.postMessage({
                type: "CURRENT_STATE",
                text: "Hello from the webpage!",
                stateString: stateString,
                initialState: initialState
            }, "*");
            //return comp;
        }
    }
    //return null;
};
console.log(getStoreState(providerSelector));