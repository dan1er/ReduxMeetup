import ReduxFormActions from "../components/redux-form/redux-form.actions";

export const loggerMiddleware = store => next => action => {
    if(action.type === ReduxFormActions.FORM_SAVED) {
        alert("Form saved");

        store.dispatch({type: "ANOTHER_ACTION"});
    }

    next(action);
};