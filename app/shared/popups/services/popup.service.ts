import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { AlertCallback } from '../alert-callback';
import { ConfirmCallback } from '../confirm-callback';

@Injectable()
export class PopupService {

    private alertSource = new Subject<String>();
    alert$ = this.alertSource.asObservable();
    alertCallback: AlertCallback;

    private confirmSource = new Subject<String>();
    confirm$ = this.confirmSource.asObservable();
    confirmCallback: ConfirmCallback;

    
    confirm(message: string): ConfirmCallback {
        this.confirmSource.next(message);
        this.confirmCallback = new ConfirmCallback();
        return this.confirmCallback;
    }

    
    alert(message: string): AlertCallback {
        this.alertSource.next(message);
        this.alertCallback = new AlertCallback();
        return this.alertCallback;
    }

}