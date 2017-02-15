import {IAction} from '../../core/action';
import {FormState} from '../../app.state';
import ReduxFormActions from './redux-form.actions';


export default function reduxFormReducer(state: FormState = new FormState(),
                                         action: IAction) {
    switch (action.type) {
        case ReduxFormActions.CLEAR_FORM:
            return new FormState();
        case ReduxFormActions.FORM_SAVED:
            return state = new FormState();
        default:
            return state;
    }
}