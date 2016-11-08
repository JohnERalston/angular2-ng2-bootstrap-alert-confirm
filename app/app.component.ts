import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<popup></popup><router-outlet></router-outlet>'
})
export class AppComponent {

    constructor(private viewContainerRef: ViewContainerRef) {}
    
}
