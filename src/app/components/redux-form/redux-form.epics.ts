import {Injectable} from '@angular/core';
import {Epic} from 'redux-observable';
import {Action} from 'redux';
import {NgRedux} from '@angular-redux/store';
import ReduxFormActions from './redux-form.actions';
import {IAppState} from '../../app.state';

@Injectable()
export default class ReduxFormEpics {
    epics: Epic<Action, IAppState>[];

    constructor(private _reduxFormActions: ReduxFormActions) {
        this.epics = [this.saveForm];
    }

    saveForm = (action$: any, store: NgRedux<IAppState>) => action$
        .ofType(ReduxFormActions.SAVE_FORM)
        .debounceTime(100)
        .map(() => {
            // get current state
            let { basicForm } = store.getState();

            return this._reduxFormActions.formSaved();
        });
}