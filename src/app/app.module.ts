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
import { HomeComponent } from './pages/home/home.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProductsComponent } from './pages/products/products.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ChargesComponent } from './pages/charges/charges.component';
import { BranchesComponent } from './pages/branches/branches.component';


@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        ShellComponent,
        ContentComponent,
        FeedComponent,
        QrcodesComponent,
        PreferencesComponent,
        HomeComponent,
        StatisticsComponent,
        ProductsComponent,
        TicketsComponent,
        PromotionsComponent,
        ChargesComponent,
        BranchesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TooltipModule.forRoot(),
        RouterModule.forRoot([
            { path: 'cobros', component: ChargesComponent },
            { path: 'codigos-qr', component: QrcodesComponent },
            { path: 'estadisticas', component: StatisticsComponent },
            { path: 'productos', component: ProductsComponent },
            { path: 'tickets', component: TicketsComponent },
            { path: 'promociones', component: PromotionsComponent },
            { path: 'sucursales', component: BranchesComponent },
            { path: 'preferencias', component: PreferencesComponent },
            { path: '', component: HomeComponent },
        //   { path: '**', component: PageNotFoundComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
