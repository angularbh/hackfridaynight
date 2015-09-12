// Type definitions for Angular v2.0.0-alpha.22
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/******************
 * This is a minimal type definition for the Angular2 quickstart.
 * We plan to publish a complete definition soon.
 ******************/


interface Map<K,V> {}
interface StringMap<K,V> extends Map<K,V> {}

interface List<T> extends Array<T> {}
interface Type {}

interface _ComponentArg {
  /**
   * The CSS selector that triggers the instantiation of a directive.
   *
   * Angular only allows directives to trigger on CSS selectors that do not cross element boundaries.
   *
   * `selector` may be declared as one of the following:
   *
   * - `element-name`: select by element name.
   * - `.class`: select by class name.
   * - `[attribute]`: select by attribute name.
   * - `[attribute=value]`: select by attribute name and value.
   * - `:not(sub_selector)`: select only if the element does not match the `sub_selector`.
   * - `selector1, selector2`: select if either `selector1` or `selector2` matches.
   *
   *
   * ## Example
   *
   * Suppose we have a directive with an `input[type=text]` selector.
   *
   * And the following HTML:
   *
   * ```html
   * <form>
   *   <input type="text">
   *   <input type="radio">
   * <form>
   * ```
   *
   * The directive would only be instantiated on the `<input type="text">` element.
   *
   */
  selector: string;
  
  /**
   * Enumerates the set of properties that accept data binding for a directive.
   *
   * The `properties` property defines a set of `directiveProperty` to `bindingProperty`
   * key-value pairs:
   *
   * - `directiveProperty` specifies the component property where the value is written.
   * - `bindingProperty` specifies the DOM property where the value is read from.
   *
   * You can include a {@link Pipe} when specifying a `bindingProperty` to allow for data transformation and structural
   * change detection of the value. These pipes will be evaluated in the context of this component.
   *
   *
   * ## Syntax
   *
   * ```
   * @Directive({
   *   properties: {
   *     'directiveProperty1': 'bindingProperty1',
   *     'directiveProperty2': 'bindingProperty2 | pipe1 | ...',
   *     ...
   *   }
   * }
   * ```
   *
   *
   * ## Basic Property Binding
   *
   * We can easily build a simple `Tooltip` directive that exposes a `tooltip` property, which can be used in templates
   * with standard Angular syntax. For example:
   *
   * ```
   * @Directive({
   *   selector: '[tooltip]',
   *   properties: {
   *     'text': 'tooltip'
   *   }
   * })
   * class Tooltip {
   *   set text(text) {
   *     // This will get called every time the 'tooltip' binding changes with the new value.
   *   }
   * }
   * ```
   *
   * We can then bind to the `tooltip' property as either an expression (`someExpression`) or as a string literal, as
   * shown in the HTML template below:
   *
   * ```html
   * <div [tooltip]="someExpression">...</div>
   * <div tooltip="Some Text">...</div>
   * ```
   *
   * Whenever the `someExpression` expression changes, the `properties` declaration instructs
   * Angular to update the `Tooltip`'s `text` property.
   *
   *
   *
   * ## Bindings With Pipes
   *
   * You can also use pipes when writing binding definitions for a directive.
   *
   * For example, we could write a binding that updates the directive on structural changes, rather than on reference
   * changes, as normally occurs in change detection.
   *
   * See {@link Pipe} and {@link keyValDiff} documentation for more details.
   *
   * ```
   * @Directive({
   *   selector: '[class-set]',
   *   properties: {
   *     'classChanges': 'classSet | keyValDiff'
   *   }
   * })
   * class ClassSet {
   *   set classChanges(changes:KeyValueChanges) {
   *     // This will get called every time the `class-set` expressions changes its structure.
   *   }
   * }
   * ```
   *
   * The template that this directive is used in may also contain its own pipes. For example:
   *
   * ```html
   * <div [class-set]="someExpression | somePipe">
   * ```
   *
   * In this case, the two pipes compose as if they were inlined: `someExpression | somePipe | keyValDiff`.
   *
   */
  properties?: Object;
  
  /**
   * Specifies which DOM hostListeners a directive listens to.
   *
   * The `hostListeners` property defines a set of `event` to `method` key-value pairs:
   *
   * - `event1`: the DOM event that the directive listens to.
   * - `statement`: the statement to execute when the event occurs.
   * If the evalutation of the statement returns `false`, then `preventDefault`is applied on the DOM event.
   *
   * To listen to global events, a target must be added to the event name.
   * The target can be `window`, `document` or `body`.
   *
   * When writing a directive event binding, you can also refer to the following local variables:
   * - `$event`: Current event object which triggered the event.
   * - `$target`: The source of the event. This will be either a DOM element or an Angular directive.
   *   (will be implemented in later release)
   *
   *
   * ## Syntax
   *
   * ```
   * @Directive({
   *   hostListeners: {
   *     'event1': 'onMethod1(arguments)',
   *     'target:event2': 'onMethod2(arguments)',
   *     ...
   *   }
   * }
   * ```
   *
   * ## Basic Event Binding:
   *
   * Suppose you want to write a directive that triggers on `change` events in the DOM and on `resize` events in window.
   * You would define the event binding as follows:
   *
   * ```
   * @Directive({
   *   selector: 'input',
   *   hostListeners: {
   *     'change': 'onChange($event)',
   *     'window:resize': 'onResize($event)'
   *   }
   * })
   * class InputDirective {
   *   onChange(event:Event) {
   *   }
   *   onResize(event:Event) {
   *   }
   * }
   * ```
   *
   * Here the `onChange` method of `InputDirective` is invoked whenever the DOM element fires the 'change' event.
   *
   */
  hostListeners?: Object;
  
  /**
   * Defines the set of injectable objects that are visible to a Component and its children.
   *
   * The `injectables` defined in the Component annotation allow you to configure a set of bindings for the component's
   * injector.
   *
   * When a component is instantiated, Angular creates a new child Injector, which is configured with the bindings in
   * the Component `injectables` annotation. The injectable objects then become available for injection to the component
   * itself and any of the directives in the component's template, i.e. they are not available to the directives which
   * are children in the component's light DOM.
   *
   *
   * The syntax for configuring the `injectables` injectable is identical to {@link Injector} injectable configuration.
   * See {@link Injector} for additional detail.
   *
   *
   * ## Simple Example
   *
   * Here is an example of a class that can be injected:
   *
   * ```
   * class Greeter {
   *    greet(name:string) {
   *      return 'Hello ' + name + '!';
   *    }
   * }
   *
   * @Component({
   *   selector: 'greet',
   *   injectables: [
   *     Greeter
   *   ]
   * })
   * @View({
   *   template: `{{greeter.greet('world')}}!`,
   *   directives: Child
   * })
   * class HelloWorld {
   *   greeter:Greeter;
   *
   *   constructor(greeter:Greeter) {
   *     this.greeter = greeter;
   *   }
   * }
   * ```
   */
  injectables?: List<any>;
  
  /**
   * Specifies a set of lifecycle hostListeners in which the directive participates.
   *
   * See {@link onChange}, {@link onDestroy}, {@link onAllChangesDone} for details.
   */
  lifecycle?: List<any>;
  
  /**
   * Defines the used change detection strategy.
   *
   * When a component is instantiated, Angular creates a change detector, which is responsible for propagating
   * the component's bindings.
   *
   * The `changeDetection` property defines, whether the change detection will be checked every time or only when the component
   * tells it to do so.
   */
  changeDetection?: string;
}

interface _ViewArg {
  /**
   * Specifies a template URL for an angular component.
   *
   * NOTE: either `templateUrl` or `template` should be used, but not both.
   */
  templateUrl?: string;
  
  /**
   * Specifies an inline template for an angular component.
   *
   * NOTE: either `templateUrl` or `template` should be used, but not both.
   */
  template?: string;
  
  /**
   * Specifies a list of directives that can be used within a template.
   *
   * Directives must be listed explicitly to provide proper component encapsulation.
   */
  directives?: List<Type>;
}
  
declare module "angular2/angular2" {
  /**
   * Bootstrapping for Angular applications.
   *
   * You instantiate an Angular application by explicitly specifying a component to use as the root component for your
   * application via the `bootstrap()` method.
   *
   * ## Simple Example
   *
   * Assuming this `index.html`:
   *
   * ```html
   * <html>
   *   <!-- load Angular script tags here. -->
   *   <body>
   *     <my-app>loading...</my-app>
   *   </body>
   * </html>
   * ```
   *
   * An application is bootstrapped inside an existing browser DOM, typically `index.html`. Unlike Angular 1, Angular 2
   * does not compile/process bindings in `index.html`. This is mainly for security reasons, as well as architectural
   * changes in Angular 2. This means that `index.html` can safely be processed using server-side technologies such as
   * bindings. Bindings can thus use double-curly `{{ syntax }}` without collision from Angular 2 component double-curly
   * `{{ syntax }}`.
   *
   * We can use this script code:
   *
   * ```
   * @Component({
   *    selector: 'my-app'
   * })
   * @View({
   *    template: 'Hello {{ name }}!'
   * })
   * class MyApp {
   *   name:string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   *
   * main() {
   *   return bootstrap(MyApp);
   * }
   * ```
   *
   * When the app developer invokes `bootstrap()` with the root component `MyApp` as its argument, Angular performs the
   * following tasks:
   *
   *  1. It uses the component's `selector` property to locate the DOM element which needs to be upgraded into
   *     the angular component.
   *  2. It creates a new child injector (from the platform injector) and configures the injector with the component's
   *     `injectables`. Optionally, you can also override the injector configuration for an app by invoking
   *     `bootstrap` with the `componentInjectableBindings` argument.
   *  3. It creates a new `Zone` and connects it to the angular application's change detection domain instance.
   *  4. It creates a shadow DOM on the selected component's host element and loads the template into it.
   *  5. It instantiates the specified component.
   *  6. Finally, Angular performs change detection to apply the initial data bindings for the application.
   *
   *
   * ## Instantiating Multiple Applications on a Single Page
   *
   * There are two ways to do this.
   *
   *
   * ### Isolated Applications
   *
   * Angular creates a new application each time that the `bootstrap()` method is invoked. When multiple applications
   * are created for a page, Angular treats each application as independent within an isolated change detection and
   * `Zone` domain. If you need to share data between applications, use the strategy described in the next
   * section, "Applications That Share Change Detection."
   *
   *
   * ### Applications That Share Change Detection
   *
   * If you need to bootstrap multiple applications that share common data, the applications must share a common
   * change detection and zone. To do that, create a meta-component that lists the application components in its template.
   * By only invoking the `bootstrap()` method once, with the meta-component as its argument, you ensure that only a
   * single change detection zone is created and therefore data can be shared across the applications.
   *
   *
   * ## Platform Injector
   *
   * When working within a browser window, there are many singleton resources: cookies, title, location, and others.
   * Angular services that represent these resources must likewise be shared across all Angular applications that
   * occupy the same browser window.  For this reason, Angular creates exactly one global platform injector which stores
   * all shared services, and each angular application injector has the platform injector as its parent.
   *
   * Each application has its own private injector as well. When there are multiple applications on a page, Angular treats
   * each application injector's services as private to that application.
   *
   *
   * # API
   * - `appComponentType`: The root component which should act as the application. This is a reference to a `Type`
   *   which is annotated with `@Component(...)`.
   * - `componentInjectableBindings`: An additional set of bindings that can be added to `injectables` for the
   * {@link Component} to override default injection behavior.
   * - `errorReporter`: `function(exception:any, stackTrace:string)` a default error reporter for unhandled exceptions.
   *
   * Returns a `Promise` with the application`s private {@link Injector}.
   *
   */
  function bootstrap(appComponentType: any): void;
  
  /**
   * Declare reusable UI building blocks for an application.
   *
   * Each Angular component requires a single `@Component` and at least one `@View` annotation. The `@Component`
   * annotation specifies when a component is instantiated, and which properties and hostListeners it binds to.
   *
   * When a component is instantiated, Angular
   * - creates a shadow DOM for the component.
   * - loads the selected template into the shadow DOM.
   * - creates a child {@link Injector} which is configured with the `injectables` for the {@link Component}.
   *
   * All template expressions and statements are then evaluated against the component instance.
   *
   * For details on the `@View` annotation, see {@link View}.
   *
   * ## Example
   *
   * ```
   * @Component({
   *   selector: 'greet'
   * })
   * @View({
   *   template: 'Hello {{name}}!'
   * })
   * class Greet {
   *   name: string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   * ```
   *
   *
   * Dynamically loading a component at runtime:
   *
   * Regular Angular components are statically resolved. Dynamic components allows to resolve a component at runtime
   * instead by providing a placeholder into which a regular Angular component can be dynamically loaded. Once loaded,
   * the dynamically-loaded component becomes permanent and cannot be changed.
   * Dynamic components are declared just like components, but without a `@View` annotation.
   *
   *
   * ## Example
   *
   * Here we have `DynamicComp` which acts as the placeholder for `HelloCmp`. At runtime, the dynamic component
   * `DynamicComp` requests loading of the `HelloCmp` component.
   *
   * There is nothing special about `HelloCmp`, which is a regular Angular component. It can also be used in other static
   * locations.
   *
   * ```
   * @Component({
   *   selector: 'dynamic-comp'
   * })
   * class DynamicComp {
   *   helloCmp:HelloCmp;
   *   constructor(loader:DynamicComponentLoader, location:ElementRef) {
   *     loader.load(HelloCmp, location).then((helloCmp) => {
   *       this.helloCmp = helloCmp;
   *     });
   *   }
   * }
   *
   * @Component({
   *   selector: 'hello-cmp'
   * })
   * @View({
   *   template: "{{greeting}}"
   * })
   * class HelloCmp {
   *   greeting:string;
   *   constructor() {
   *     this.greeting = "hello";
   *   }
   * }
   * ```
   *
   */
  function Component(arg: _ComponentArg): (target: any) => any;
  
  /**
   * Declares the available HTML templates for an application.
   *
   * Each angular component requires a single `@Component` and at least one `@View` annotation. The @View
   * annotation specifies the HTML template to use, and lists the directives that are active within the template.
   *
   * When a component is instantiated, the template is loaded into the component's shadow root, and the
   * expressions and statements in the template are evaluated against the component.
   *
   * For details on the `@Component` annotation, see {@link Component}.
   *
   * ## Example
   *
   * ```
   * @Component({
   *   selector: 'greet'
   * })
   * @View({
   *   template: 'Hello {{name}}!',
   *   directives: [GreetUser, Bold]
   * })
   * class Greet {
   *   name: string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   * ```
   *
   */
  function View(arg: _ViewArg): (target: any) => any;
  
  /**
   * The `For` directive instantiates a template once per item from an iterable. The context for each
   * instantiated template inherits from the outer context with the given loop variable set to the
   * current item from the iterable.
   *
   * It is possible to alias the `index` to a local variable that will be set to the current loop
   * iteration in the template context.
   *
   * When the contents of the iterator changes, `For` makes the corresponding changes to the DOM:
   *
   * * When an item is added, a new instance of the template is added to the DOM.
   * * When an item is removed, its template instance is removed from the DOM.
   * * When items are reordered, their respective templates are reordered in the DOM.
   *
   * # Example
   *
   * ```
   * <ul>
   *   <li *for="#error of errors; #i = index">
   *     Error {{i}} of {{errors.length}}: {{error.message}}
   *   </li>
   * </ul>
   * ```
   *
   * # Syntax
   *
   * - `<li *for="#item of items; #i = index">...</li>`
   * - `<li template="for #item of items; #i=index">...</li>`
   * - `<template [for]="#item" [of]="items" #i="index"><li>...</li></template>`
   *
   */
  function For(): void;
  
  /**
   * Removes or recreates a portion of the DOM tree based on an {expression}.
   *
   * If the expression assigned to `if` evaluates to a false value then the element is removed from the
   * DOM, otherwise a clone of the element is reinserted into the DOM.
   *
   * # Example:
   *
   * ```
   * <div *if="errorCount > 0" class="error">
   *   <!-- Error message displayed when the errorCount property on the current context is greater than 0. -->
   *   {{errorCount}} errors detected
   * </div>
   * ```
   *
   * # Syntax
   *
   * - `<div *if="condition">...</div>`
   * - `<div template="if condition">...</div>`
   * - `<template [if]="condition"><div>...</div></template>`
   *
   */
  function If(): void;
  
  /**
   * The `NonBindable` directive tells Angular not to compile or bind the contents of the current
   * DOM element. This is useful if the element contains what appears to be Angular directives and
   * bindings but which should be ignored by Angular. This could be the case if you have a site that
   * displays snippets of code, for instance.
   *
   * Example:
   *
   * ```
   * <div>Normal: {{1 + 2}}</div> // output "Normal: 3"
   * <div non-bindable>Ignored: {{1 + 2}}</div> // output "Ignored: {{1 + 2}}"
   * ```
   *
   */
  function NonBindable(): void;
  
  /**
   * The `Switch` directive is used to conditionally swap DOM structure on your template based on a
   * scope expression.
   * Elements within `Switch` but without `SwitchWhen` or `SwitchDefault` directives will be
   * preserved at the location as specified in the template.
   *
   * `Switch` simply chooses nested elements and makes them visible based on which element matches
   * the value obtained from the evaluated expression. In other words, you define a container element
   * (where you place the directive), place an expression on the **`[switch]="..."` attribute**),
   * define any inner elements inside of the directive and place a `[switch-when]` attribute per
   * element.
   * The when attribute is used to inform Switch which element to display when the expression is
   * evaluated. If a matching expression is not found via a when attribute then an element with the
   * default attribute is displayed.
   *
   * # Example:
   *
   * ```
   * <ANY [switch]="expression">
   *   <template [switch-when]="whenExpression1">...</template>
   *   <template [switch-when]="whenExpression1">...</template>
   *   <template [switch-default]>...</template>
   * </ANY>
   * ```
   *
   */
 function Switch(): void;
}

declare module "angular2/di" {
  /**
   * Provides an API for imperatively constructing {@link Binding}s.
   *
   * This is only relevant for JavaScript. See {@link BindingBuilder}.
   *
   * ## Example
   *
   * ```javascript
   * bind(MyInterface).toClass(MyClass)
   *
   * ```
   *
   */
   function bind(token: any): any;
}

// Type definitions for Angular v2.0.0-local_sha.a3de706
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************





/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
declare module ngHttp {

  /**
   * Mock Connection to represent a {@link Connection} for tests.
   */
  class MockConnection {


    /**
     * Describes the state of the connection, based on `XMLHttpRequest.readyState`, but with
     * additional states. For example, state 5 indicates an aborted connection.
     */
     readyState: ReadyStates;


    /**
     * {@link Request} instance used to create the connection.
     */
     request: Request;


    /**
     * {@link any} of {@link Response}. Can be subscribed to in order to be notified when a
     * response is available.
     */
     response: any;


    /**
     * Changes the `readyState` of the connection to a custom state of 5 (cancelled).
     */
     dispose(): void;


    /**
     * Sends a mock response to the connection. This response is the value that is emitted to the
     * {@link any} returned by {@link Http}.
     *
     * #Example
     *
     * ```
     * var connection;
     * backend.connections.subscribe(c => connection = c);
     * http.request('data.json').subscribe(res => console.log(res.text()));
     * connection.mockRespond(new Response('fake response')); //logs 'fake response'
     * ```
     */
     mockRespond(res: Response): void;


    /**
     * Not yet implemented!
     *
     * Sends the provided {@link Response} to the `downloadObserver` of the `Request`
     * associated with this connection.
     */
     mockDownload(res: Response): void;


    /**
     * Emits the provided error object as an error to the {@link Response} {@link any}
     * returned
     * from {@link Http}.
     */
     mockError(err?: Error): void;
  }


  /**
   * A mock backend for testing the {@link Http} service.
   *
   * This class can be injected in tests, and should be used to override bindings
   * to other backends, such as {@link XHRBackend}.
   *
   * #Example
   *
   * ```
   * import {MockBackend, DefaultOptions, Http} from 'http/http';
   * it('should get some data', inject([AsyncTestCompleter], (async) => {
   *   var connection;
   *   var injector = Injector.resolveAndCreate([
   *     MockBackend,
   *     bind(Http).toFactory((backend, defaultOptions) => {
   *       return new Http(backend, defaultOptions)
   *     }, [MockBackend, DefaultOptions])]);
   *   var http = injector.get(Http);
   *   var backend = injector.get(MockBackend);
   *   //Assign any newly-created connection to local variable
   *   backend.connections.subscribe(c => connection = c);
   *   http.request('data.json').subscribe((res) => {
   *     expect(res.text()).toBe('awesome');
   *     async.done();
   *   });
   *   connection.mockRespond(new Response('awesome'));
   * }));
   * ```
   *
   * This method only exists in the mock implementation, not in real Backends.
   */
  class MockBackend {


    /**
     * {@link any}
     * of {@link MockConnection} instances that have been created by this backend. Can be subscribed
     * to in order to respond to connections.
     *
     * #Example
     *
     * ```
     * import {MockBackend, Http, BaseRequestOptions} from 'http/http';
     * import {Injector} from 'angular2/di';
     *
     * it('should get a response', () => {
     *   var connection; //this will be set when a new connection is emitted from the backend.
     *   var text; //this will be set from mock response
     *   var injector = Injector.resolveAndCreate([
     *     MockBackend,
     *     bind(Http).toFactory(backend, options) {
     *       return new Http(backend, options);
     *     }, [MockBackend, BaseRequestOptions]]);
     *   var backend = injector.get(MockBackend);
     *   var http = injector.get(Http);
     *   backend.connections.subscribe(c => connection = c);
     *   http.request('something.json').subscribe(res => {
     *     text = res.text();
     *   });
     *   connection.mockRespond(new Response({body: 'Something'}));
     *   expect(text).toBe('Something');
     * });
     * ```
     *
     * This property only exists in the mock implementation, not in real Backends.
     */
     connections: any;


    /**
     * An array representation of `connections`. This array will be updated with each connection that
     * is created by this backend.
     *
     * This property only exists in the mock implementation, not in real Backends.
     */
     connectionsArray: Array<MockConnection>;


    /**
     * {@link any} of {@link MockConnection} instances that haven't yet been resolved (i.e.
     * with a `readyState`
     * less than 4). Used internally to verify that no connections are pending via the
     * `verifyNoPendingRequests` method.
     *
     * This property only exists in the mock implementation, not in real Backends.
     */
     pendingConnections: any;


    /**
     * Checks all connections, and raises an exception if any connection has not received a response.
     *
     * This method only exists in the mock implementation, not in real Backends.
     */
     verifyNoPendingRequests(): void;


    /**
     * Can be used in conjunction with `verifyNoPendingRequests` to resolve any not-yet-resolve
     * connections, if it's expected that there are connections that have not yet received a response.
     *
     * This method only exists in the mock implementation, not in real Backends.
     */
     resolveAllConnections(): void;


    /**
     * Creates a new {@link MockConnection}. This is equivalent to calling `new
     * MockConnection()`, except that it also will emit the new `Connection` to the `connections`
     * emitter of this `MockBackend` instance. This method will usually only be used by tests
     * against the framework itself, not by end-users.
     */
     createConnection(req: Request): Connection;
  }


  /**
   * Creates `Request` instances from provided values.
   *
   * The Request's interface is inspired by the Request constructor defined in the [Fetch
   * Spec](https://fetch.spec.whatwg.org/#request-class),
   * but is considered a static value whose body can be accessed many times. There are other
   * differences in the implementation, but this is the most significant.
   */
  class Request {


    /**
     * Http method with which to perform the request.
     *
     * Defaults to GET.
     */
     method: RequestMethods;

     mode: RequestModesOpts;

     credentials: RequestCredentialsOpts;


    /**
     * Headers object based on the `Headers` class in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#headers-class). {@link Headers} class reference.
     */
     headers: Headers;


    /**
     * Url of the remote resource
     */
     url: string;

     cache: RequestCacheOpts;


    /**
     * Returns the request's body as string, assuming that body exists. If body is undefined, return
     * empty
     * string.
     */
     text(): String;
  }


  /**
   * Creates `Response` instances from provided values.
   *
   * Though this object isn't
   * usually instantiated by end-users, it is the primary object interacted with when it comes time to
   * add data to a view.
   *
   * #Example
   *
   * ```
   * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
   * ```
   *
   * The Response's interface is inspired by the Response constructor defined in the [Fetch
   * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
   * can be accessed many times. There are other differences in the implementation, but this is the
   * most significant.
   */
  class Response {


    /**
     * One of "basic", "cors", "default", "error, or "opaque".
     *
     * Defaults to "default".
     */
     type: ResponseTypes;


    /**
     * True if the response's status is within 200-299
     */
     ok: boolean;


    /**
     * URL of response.
     *
     * Defaults to empty string.
     */
     url: string;


    /**
     * Status code returned by server.
     *
     * Defaults to 200.
     */
     status: number;


    /**
     * Text representing the corresponding reason phrase to the `status`, as defined in [ietf rfc 2616
     * section 6.1.1](https://tools.ietf.org/html/rfc2616#section-6.1.1)
     *
     * Defaults to "OK"
     */
     statusText: string;


    /**
     * Non-standard property
     *
     * Denotes how many of the response body's bytes have been loaded, for example if the response is
     * the result of a progress event.
     */
     bytesLoaded: number;


    /**
     * Non-standard property
     *
     * Denotes how many bytes are expected in the final response body.
     */
     totalBytes: number;


    /**
     * Headers object based on the `Headers` class in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#headers-class).
     */
     headers: Headers;


    /**
     * Not yet implemented
     */
     blob(): any;


    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
     json(): Object;


    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     */
     text(): string;


    /**
     * Not yet implemented
     */
     arrayBuffer(): any;
  }


  /**
   * Interface for options to construct a Request, based on
   * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
   */
  // type any;


  /**
   * Interface for options to construct a Response, based on
   * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
   */
  // type ResponseOptionsArgs


  /**
   * Abstract class from which real connections are derived.
   */
  class Connection {

     readyState: ReadyStates;

     request: Request;

     response: any;

     dispose(): void;
  }


  /**
   * Abstract class from which real backends are derived.
   *
   * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
   * {@link Request}.
   */
  class ConnectionBackend {

     createConnection(request: any): Connection;
  }

  class BrowserXhr {

     build(): any;
  }


  /**
   * Injectable version of {@link RequestOptions}, with overridable default values.
   *
   * #Example
   *
   * ```
   * import {Http, BaseRequestOptions, Request} from 'angular2/http';
   * ...
   * class MyComponent {
   *   constructor(baseRequestOptions:BaseRequestOptions, http:Http) {
   *     var options = baseRequestOptions.merge({body: 'foobar', url: 'https://foo'});
   *     var request = new Request(options);
   *     http.request(request).subscribe(res => this.bars = res.json());
   *   }
   * }
   *
   * ```
   */
  class BaseRequestOptions extends RequestOptions {
  }


  /**
   * Creates a request options object similar to the `RequestInit` description
   * in the [Fetch
   * Spec](https://fetch.spec.whatwg.org/#requestinit) to be optionally provided when instantiating a
   * {@link Request}.
   *
   * All values are null by default.
   */
  class RequestOptions {


    /**
     * Http method with which to execute the request.
     *
     * Defaults to "GET".
     */
     method: RequestMethods;


    /**
     * Headers object based on the `Headers` class in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#headers-class).
     */
     headers: Headers;


    /**
     * Body to be used when creating the request.
     */
     body: string;

     mode: RequestModesOpts;

     credentials: RequestCredentialsOpts;

     cache: RequestCacheOpts;

     url: string;

     search: URLSearchParams;


    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values.
     */
     merge(options?: any): RequestOptions;
  }


  /**
   * Injectable version of {@link ResponseOptions}, with overridable default values.
   */
  class BaseResponseOptions extends ResponseOptions {

     body: string | Object | ArrayBuffer | JSON | FormData | Blob;

     status: number;

     headers: Headers;

     statusText: string;

     type: ResponseTypes;

     url: string;
  }


  /**
   * Creates a response options object similar to the
   * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) description
   * in the Fetch
   * Spec to be optionally provided when instantiating a
   * {@link Response}.
   *
   * All values are null by default.
   */
  class ResponseOptions {

     body: string | Object;

     status: number;

     headers: Headers;

     statusText: string;

     type: ResponseTypes;

     url: string;

     merge(options?: any): ResponseOptions;
  }


  /**
   * Creates {@link XHRConnection} instances.
   *
   * This class would typically not be used by end users, but could be
   * overridden if a different backend implementation should be used,
   * such as in a node backend.
   *
   * #Example
   *
   * ```
   * import {Http, MyNodeBackend, HTTP_BINDINGS, BaseRequestOptions} from 'http/http';
   * @Component({
   *   viewBindings: [
   *     HTTP_BINDINGS,
   *     bind(Http).toFactory((backend, options) => {
   *       return new Http(backend, options);
   *     }, [MyNodeBackend, BaseRequestOptions])]
   * })
   * class MyComponent {
   *   constructor(http:Http) {
   *     http('people.json').subscribe(res => this.people = res.json());
   *   }
   * }
   * ```
   */
  class XHRBackend implements ConnectionBackend {

     createConnection(request: Request): XHRConnection;
  }


  /**
   * Creates connections using `XMLHttpRequest`. Given a fully-qualified
   * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
   * request.
   *
   * This class would typically not be created or interacted with directly inside applications, though
   * the {@link MockConnection} may be interacted with in tests.
   */
  class XHRConnection implements Connection {

     request: Request;


    /**
     * Response {@link any} which emits a single {@link Response} value on load event of
     * `XMLHttpRequest`.
     */
     response: any;

     readyState: ReadyStates;


    /**
     * Calls abort on the underlying XMLHttpRequest.
     */
     dispose(): void;
  }

  class JSONPBackend implements ConnectionBackend {

     createConnection(request: Request): JSONPConnection;
  }

  class JSONPConnection implements Connection {

     readyState: ReadyStates;

     request: Request;

     response: any;

     baseResponseOptions: ResponseOptions;

     finished(data?: any): void;

     dispose(): void;
  }


  /**
   * Performs http requests using `XMLHttpRequest` as the default backend.
   *
   * `Http` is available as an injectable class, with methods to perform http requests. Calling
   * `request` returns an {@link any} which will emit a single {@link Response} when a
   * response is received.
   *
   *
   * ## Breaking Change
   *
   * Previously, methods of `Http` would return an RxJS Observable directly. For now,
   * the `toRx()` method of {@link any} needs to be called in order to get the RxJS
   * Subject. `any` does not provide combinators like `map`, and has different semantics for
   * subscribing/observing. This is temporary; the result of all `Http` method calls will be either an
   * Observable
   * or Dart Stream when [issue #2794](https://github.com/angular/angular/issues/2794) is resolved.
   *
   * #Example
   *
   * ```
   * import {Http, HTTP_BINDINGS} from 'angular2/http';
   * @Component({selector: 'http-app', viewBindings: [HTTP_BINDINGS]})
   * @View({templateUrl: 'people.html'})
   * class PeopleComponent {
   *   constructor(http: Http) {
   *     http.get('people.json')
   *       //Get the RxJS Subject
   *       .toRx()
   *       // Call map on the response observable to get the parsed people object
   *       .map(res => res.json())
   *       // Subscribe to the observable to get the parsed people object and attach it to the
   *       // component
   *       .subscribe(people => this.people = people);
   *   }
   * }
   * ```
   *
   * To use the {@link any} returned by `Http`, simply pass a generator (See "interface
   * Generator" in the Async Generator spec: https://github.com/jhusain/asyncgenerator) to the
   * `observer` method of the returned emitter, with optional methods of `next`, `throw`, and `return`.
   *
   * #Example
   *
   * ```
   * http.get('people.json').observer({next: (value) => this.people = people});
   * ```
   *
   * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
   * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
   * the {@link XHRBackend} binding, as in the following example:
   *
   * #Example
   *
   * ```
   * import {MockBackend, BaseRequestOptions, Http} from 'angular2/http';
   * var injector = Injector.resolveAndCreate([
   *   BaseRequestOptions,
   *   MockBackend,
   *   bind(Http).toFactory(
   *       function(backend, defaultOptions) {
   *         return new Http(backend, defaultOptions);
   *       },
   *       [MockBackend, BaseRequestOptions])
   * ]);
   * var http = injector.get(Http);
   * http.get('request-from-mock-backend.json').toRx().subscribe((res:Response) => doSomething(res));
   * ```
   */
  class Http {


    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
     request(url: string | Request, options?: any): any;


    /**
     * Performs a request with `get` http method.
     */
     get(url: string, options?: any): any;


    /**
     * Performs a request with `post` http method.
     */
     post(url: string, body: string, options?: any): any;


    /**
     * Performs a request with `put` http method.
     */
     put(url: string, body: string, options?: any): any;


    /**
     * Performs a request with `delete` http method.
     */
     delete(url: string, options?: any): any;


    /**
     * Performs a request with `patch` http method.
     */
     patch(url: string, body: string, options?: any): any;


    /**
     * Performs a request with `head` http method.
     */
     head(url: string, options?: any): any;
  }

  class Jsonp extends Http {


    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
     request(url: string | Request, options?: any): any;
  }


  /**
   * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
   * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class). The only known
   * difference from the spec is the lack of an `entries` method.
   */
  class Headers {


    /**
     * Appends a header to existing list of header values for a given header name.
     */
     append(name: string, value: string): void;


    /**
     * Deletes all header values for the given name.
     */
     delete(name: string): void;

     forEach(fn: Function): void;


    /**
     * Returns first header that matches given name.
     */
     get(header: string): string;


    /**
     * Check for existence of header by given name.
     */
     has(header: string): boolean;


    /**
     * Provides names of set headers
     */
     keys(): List<string>;


    /**
     * Sets or overrides header value for given name.
     */
     set(header: string, value: string | List<string>): void;


    /**
     * Returns values of all headers.
     */
     values(): List<List<string>>;


    /**
     * Returns list of header values for a given name.
     */
     getAll(header: string): Array<string>;


    /**
     * This method is not implemented.
     */
     entries(): void;
  }


  /**
   * Acceptable response types to be associated with a {@link Response}, based on
   * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
   */
  enum ResponseTypes {

     Basic,

     Cors,

     Default,

     Error,

     Opaque
  }


  /**
   * All possible states in which a connection can be, based on
   * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
   * additional "CANCELLED" state.
   */
  enum ReadyStates {

     UNSENT,

     OPEN,

     HEADERS_RECEIVED,

     LOADING,

     DONE,

     CANCELLED
  }


  /**
   * Supported http methods.
   */
  enum RequestMethods {

     GET,

     POST,

     PUT,

     DELETE,

     OPTIONS,

     HEAD,

     PATCH
  }


  /**
   * Acceptable credentials option to be associated with a {@link Request}, based on
   * [RequestCredentials](https://fetch.spec.whatwg.org/#requestcredentials) from the Fetch spec.
   */
  enum RequestCredentialsOpts {

     Omit,

     SameOrigin,

     Include
  }


  /**
   * Acceptable cache option to be associated with a {@link Request}, based on
   * [RequestCache](https://fetch.spec.whatwg.org/#requestcache) from the Fetch spec.
   */
  enum RequestCacheOpts {

     Default,

     NoStore,

     Reload,

     NoCache,

     ForceCache,

     OnlyIfCached
  }


  /**
   * Acceptable origin modes to be associated with a {@link Request}, based on
   * [RequestMode](https://fetch.spec.whatwg.org/#requestmode) from the Fetch spec.
   */
  enum RequestModesOpts {

     Cors,

     NoCors,

     SameOrigin
  }


  /**
   * Map-like representation of url search parameters, based on
   * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
   * with several extensions for merging URLSearchParams objects:
   *   - setAll()
   *   - appendAll()
   *   - replaceAll()
   */
  class URLSearchParams {

     paramsMap: Map<string, List<string>>;

     rawParams: string;

     clone(): URLSearchParams;

     has(param: string): boolean;

     get(param: string): string;

     getAll(param: string): List<string>;

     set(param: string, val: string): void;

     setAll(searchParams: URLSearchParams): void;

     append(param: string, val: string): void;

     appendAll(searchParams: URLSearchParams): void;

     replaceAll(searchParams: URLSearchParams): void;

     toString(): string;

     delete(param: string): void;
  }


  /**
   * Provides a basic set of injectables to use the {@link Http} service in any application.
   *
   * #Example
   *
   * ```
   * import {HTTP_BINDINGS, Http} from 'http/http';
   * @Component({selector: 'http-app', viewBindings: [HTTP_BINDINGS]})
   * @View({template: '{{data}}'})
   * class MyApp {
   *   constructor(http:Http) {
   *     http.request('data.txt').subscribe(res => this.data = res.text());
   *   }
   * }
   * ```
   */
  const HTTP_BINDINGS : List<any> ;

  const JSONP_BINDINGS : List<any> ;

}

declare module "http/http" {
  export = ngHttp;
}
