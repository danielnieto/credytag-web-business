import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';

// QRCodes
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShellComponent } from './shell/shell.component';
import { ContentComponent } from './content/content.component';
import { FeedComponent } from './feed/feed.component';
import { RouterModule } from '@angular/router';
import { QrcodesComponent } from './pages/qrcodes/qrcodes.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { ChargesComponent } from './pages/charges/charges.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { ChargeComponent } from './pages/charges/charge/charge.component';

// services
import { ResponsiveService } from './responsive.service';

// to make Pipes use es-MX
registerLocaleData(localeEs);

const toastrOptions = {
    timeOut: 3000,
    progressBar: true
};

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        ShellComponent,
        ContentComponent,
        FeedComponent,
        QrcodesComponent,
        PreferencesComponent,
        ChargesComponent,
        BankAccountComponent,
        ChargeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TooltipModule.forRoot(),
        ButtonsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        QRCodeModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(toastrOptions),
        RouterModule.forRoot([
            { path: 'cobros', component: ChargesComponent },
            { path: 'codigos-qr', component: QrcodesComponent },
            { path: 'cuenta-bancaria', component: BankAccountComponent },
            { path: 'preferencias', component: PreferencesComponent },
            { path: '', component: ChargesComponent },
        //   { path: '**', component: PageNotFoundComponent }
        ])
    ],
    providers: [ResponsiveService, { provide: LOCALE_ID, useValue: 'es-MX'} ],
    bootstrap: [AppComponent]
})
export class AppModule { }
