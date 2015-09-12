/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'hackfridaynight-app',
    injectables: []})
@View({
    templateUrl: 'hackfridaynight.html',
    directives: []
})
class HackfridaynightApp {
    constructor() {

    }
}
bootstrap(HackfridaynightApp);