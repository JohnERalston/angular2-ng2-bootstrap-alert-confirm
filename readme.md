# Angular 2 alert and confirm popups 
```
popupService.alert("Something cool just happened")
    .ok(() => {
        //now go do something else, the dialog has been dismissed (by the user by whatever means e.g. esc key or 'OK' click)
        console.log("alert dialog closed....");
    });
```

```
popupService.confirm("Are you sure?")
    .ok(() => {
        //'ok' clicked, now do something positive
        console.log("OK clicked");
    })
    .cancel() => {
        //'cancel' clicked (or dialog dismissed by the user by whatever means e.g. esc key), now do something negative
        console.log("CANCEL clicked");
    });
```
This example uses [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) to deliver bootstrap modals as the alert and confirm dialogs.
You can effortlessly change this to any framework/technique you require, the principles will remain the same.

## Abstraction
This example is build upon this seed project [simple-pro-ready-angular2-webpack-seed](http://https://github.com/JohnOutbottle/simple-pro-ready-angular2-webpack-seed).
The seed has all the basics of a fully functional production ready application.

## Running
1. `npm run build` - builds the application into the dist directory the contents of which are stand-alone and fully functional.
You can run it by navigating to the dist directory in a command terminal and serving it up using npm module http-server or httpster etc.
2. `npm run build-w` - This does the same as 1 but continues to listen for code changes, building automatically when changes are detected.
3. `npm live` - This fires up the webpack-dev-server and serves up the application on http://localhost:8081. It rebuilds and reloads the browser automatically when code changes are detected.

## Code highlights
The required ng2-bootstrap modules are included in `app.module`
`ModalModule` and `AlertModule`
But again, these are not essential, you can change the code accordingly, the general principal remains the same.
Note that the bootstrap CSS is imported in `vendor.ts`, it's compiled as part of build process.

## Invoking the popup via service
This code invokes the popup component via a (injectable) service.
This means that the component API is accessible from any other component within the app via the service.

The main points of interest are the app/shared/popups component, classes and service.

The popup component is rendered in the `app.component` template`.
```
import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<popup></popup><router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(private viewContainerRef: ViewContainerRef) {}
}
```
**Note** that the `private viewContainerRef: viewContainerRef` is essential according to ng2-bootstrap [docs](http://valor-software.com/ng2-bootstrap/#/modals)

## Demo
The `PopupService` is invoked for demo purposes from `home.component`

