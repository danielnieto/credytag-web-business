import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TooltipModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShellComponent } from './shell/shell.component';
import { ContentComponent } from './content/content.component';
import { FeedComponent } from './feed/feed.component';
import { RouterModule }   from '@angular/router';
import { QrcodesComponent } from './pages/qrcodes/qrcodes.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { ChargesComponent } from './pages/charges/charges.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { ChargeComponent } from './pages/charges/charge/charge.component';

// services
import { ResponsiveService } from './responsive.service';


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
        RouterModule.forRoot([
            { path: 'cobros', component: ChargesComponent },
            { path: 'codigos-qr', component: QrcodesComponent },
            { path: 'cuenta-bancaria', component: BankAccountComponent },
            { path: 'preferencias', component: PreferencesComponent },
            { path: '', component: ChargesComponent },
        //   { path: '**', component: PageNotFoundComponent }
        ])
    ],
    providers: [ResponsiveService],
    bootstrap: [AppComponent]
})
export class AppModule { }
