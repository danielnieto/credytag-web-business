import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from './http-interceptors';


import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';

// QRCodes
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShellComponent } from './shell/shell.component';
import { ContentComponent } from './content/content.component';
import { FeedComponent } from './feed/feed.component';
import { RouterModule } from '@angular/router';
import { QrcodesComponent } from './pages/qrcodes/qrcodes.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChargesComponent } from './pages/charges/charges.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { ChargeComponent } from './pages/charges/charge/charge.component';

// services
import { ResponsiveService } from './responsive.service';
import { AuthenticationService } from './authentication.service';
import { SessionService } from './session.service';

// guards
import {AuthGuard} from './auth.guard';

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
        SettingsComponent,
        ChargesComponent,
        BankAccountComponent,
        ChargeComponent,
        LoginComponent,
        LogoutComponent
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
        TabsModule.forRoot(),
        NgSelectModule,
        NgxSpinnerModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent },
            { path: '', component: ShellComponent, canActivateChild: [AuthGuard], children: [
                { path: 'cobros', component: ChargesComponent },
                { path: 'codigos-qr', component: QrcodesComponent },
                { path: 'cuenta-bancaria', component: BankAccountComponent },
                { path: 'ajustes', component: SettingsComponent },
                { path: '', component: ChargesComponent },
            ] },
          { path: '', component: LoginComponent }
        ])
    ],
    providers: [ResponsiveService, { provide: LOCALE_ID, useValue: 'es-MX' }, AuthenticationService, SessionService, AuthGuard, httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
