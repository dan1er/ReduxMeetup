import {Component} from '@angular/core';
import {NgRedux} from '../../../../../node_modules/@angular-redux/store/lib/components/ng-redux';
import {IAppState} from '../../../app.state';
import ReduxFormActions from '../redux-form.actions';

@Component({
    selector: 'redux-simple-form',
    template: `
      <form connect="basicForm"
            class="container">
          <h1>Redux form</h1>
          
          <div>
            <label>First Name: </label>
            <input type="text" name="firstName" ngControl ngModel/>
          </div>
          
          <div>
            <label>Last Name: </label>
            <input type="text" name="lastName" ngControl ngModel/>
          </div>
          
          <div ngModelGroup="address">
              <strong>Address:</strong>
              <div>
                <label>Street: </label>
                <input type="text" name="street" ngControl="street" ngModel/>
              </div>
              
              <div>
                <label>City: </label>
                <input type="text" name="city" ngControl ngModel/>
              </div>

              <div>
                <label>Country: </label>
                <input type="text" name="country" ngControl ngModel/>
              </div>
          </div>
          
          <div class="buttons-row">
               <button (click)="clearForm()">Clear</button>
               <button (click)="saveForm()">Save</button>
          </div>
      </form>
  `,
    styleUrls: ['./simple-form.component.less']
})
export class SimpleFormComponent {

    constructor(private _ngRedux: NgRedux<IAppState>,
                private _reduxFormActions: ReduxFormActions) {
    }

    public clearForm(): void {
        this._ngRedux.dispatch(this._reduxFormActions.clearForm());
    }

    public saveForm(): void {
        this._ngRedux.dispatch(this._reduxFormActions.saveForm());
    }
}
