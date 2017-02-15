import {Injectable} from '@angular/core';

@Injectable()
export default class ReduxFormActions {
    public static readonly CLEAR_FORM = "CLEAR_FORM";
    public static readonly SAVE_FORM = "SAVE_FORM";
    public static readonly FORM_SAVED = "FORM_SAVED";

    public clearForm = () => ({ type: ReduxFormActions.CLEAR_FORM });
    public saveForm = () => ({ type: ReduxFormActions.SAVE_FORM });
    public formSaved = () => ({ type: ReduxFormActions.FORM_SAVED });
}