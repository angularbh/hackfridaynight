/// <reference path="./typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2';

import {HTTP_BINDINGS} from 'http/http';

import {Friendship} from './friendship';

@Component({
    selector: 'hackfridaynight-app',
    injectables: [],
    viewBindings: [HTTP_BINDINGS]
})
@View({
    templateUrl: 'hackfridaynight.html',
    directives: [Friendship]
})
class HackfridaynightApp {
    constructor() {

    }
}
bootstrap(HackfridaynightApp);