import { Component } from '@angular/core';
import { PopupService } from '../../shared/popups/services/popup.service';
import { AlertCallback } from '../../shared/popups/alert-callback';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    
    constructor(
        private popupService: PopupService
    ) {}

    testAlertPopup(): void {
        console.log("Opening alert");
        this.popupService.alert("Yo! something just happened")
        .ok(() => {
            console.log("alert closed");
            this.popupService.alert("Yo! something just happened AGAIN (programatically)")
            .ok(() => {
                console.log("alert closed AGAIN");
            });
        });
    }

    testConfirmPopup(): void {
        console.log("Opening confirm dialog");
        this.popupService.confirm("Are you really sure?")
        .ok(() => {
            console.log("OK");
            this.popupService.alert("Thanks, that's confirmed now");
        })
        .cancel(() => {
            console.log("CANCEL");
            this.popupService.alert("No problem, that's cancelled now");
        });
    }
}