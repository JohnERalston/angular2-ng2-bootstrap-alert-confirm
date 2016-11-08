import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/components/home.component";
import { PlutoComponent } from './pluto/components/pluto.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { MainNavigationComponent } from './shared/navigation/components/main-navigation.component';

import { ModalModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PopupComponent } from './shared/popups/components/popup.component';
import { PopupService } from './shared/popups/services/popup.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, routing, ModalModule, AlertModule],
    declarations: [
        AppComponent,
        MainNavigationComponent,
        HomeComponent,
        PlutoComponent,
        NotFoundComponent,
        PopupComponent
    ],
    providers: [PopupService],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
