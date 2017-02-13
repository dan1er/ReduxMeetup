import {NgReduxModule} from '@angular-redux/store/lib';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BasicCalculatorModule} from './components/basic-calculator/basic-calculator.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule,
        BasicCalculatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
