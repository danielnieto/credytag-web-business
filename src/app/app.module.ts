import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
        ChargeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TooltipModule.forRoot(),
        BsDatepickerModule.forRoot(),
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
