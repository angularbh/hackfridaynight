/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View} from 'angular2/angular2';


import { AuthService  } from './authService';

@Component({
    selector: 'login-hack-form',
    injectables: []})
@View({
    templateUrl: 'login.html',
    directives: []
})
export class LoginController {
    
    _authService;
    _formInvalid;
    
    constructor() {
      this._authService = AuthService;
    }
    
    validate(username, password){
        var isInvalid = !username || !password;
        debugger;
        this._formInvalid = isInvalid;
    }
    
    submitLoginForm(username, password){
        this.validate(username, password);
        if(this._formInvalid){
           alert('invalid form');   
           return;
        }
       else{
          debugger;
          return this._authService.login(username, password);
       }
    }
}