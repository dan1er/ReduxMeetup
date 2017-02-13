import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export default class CalculatorService {
    private _currencyApiUrl: string;

    constructor(private _http: Http) {
        this._currencyApiUrl = "http://apilayer.net/api/live?access_key=ac84843a257aff4a10b4b1ef6a89870b&currencies=EUR,CUP,UYU,GBP&format=1";
    }

    public getCurrenciesConversion(): Observable<any> {
        return this._http.get(this._currencyApiUrl);
    }
}