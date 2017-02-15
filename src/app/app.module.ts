import {NgReduxModule} from '@angular-redux/store/lib';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {routing} from './routing/app.routes';
import BasicCalculatorModule from './components/basic-calculator/basic-calculator.module';
import ReduxFormModule from './components/redux-form/redux-form.module';
import {NgReduxRouter} from '@angular-redux/router';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule,
        routing,
        BasicCalculatorModule,
        ReduxFormModule
    ],
    providers: [NgReduxRouter],
    bootstrap: [AppComponent]
})
export class AppModule {
}
