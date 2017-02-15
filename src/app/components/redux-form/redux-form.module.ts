import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {NgReduxFormModule} from '../../../../node_modules/@angular-redux/form/dist/source/module';
import {FormsModule} from '../../../../node_modules/@angular/forms/src/form_providers';
import ReduxFormActions from './redux-form.actions';
import ReduxFormEpics from './redux-form.epics';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgReduxFormModule
    ],
    declarations: [SimpleFormComponent],
    providers: [ReduxFormActions, ReduxFormEpics]
})
export default class ReduxFormModule {
}
