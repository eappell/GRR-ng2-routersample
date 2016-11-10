import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

// THIRD PARTY MODULES
import { MasonryOptions } from 'angular2-masonry';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

// INTERNAL MODULES
import { SharedModule } from './shared/shared.module';
import { AnimalsModule } from './animals/animals.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './_auth/auth.module';

// COMPONENTS
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { HomeComponent } from './home/home.component';
import { Swiper1Component } from './swiper1/swiper1.component';
import { AfdemoComponent } from './afdemo/afdemo.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBHUHIFoL9iaUL9URgmwQSDhxb25FNaS74',
  authDomain: 'gold-river-reptile.firebaseapp.com',
  databaseURL: 'https://gold-river-reptile.firebaseio.com',
  storageBucket: 'gold-river-reptile.appspot.com'
};

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    routing,
    AnimalsModule,
    ProjectsModule,
    AuthModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    HomeSliderComponent,
    CustomerPortalComponent,
    HomeComponent,
    Swiper1Component,
    AfdemoComponent
  ],
  providers: [
    appRoutingProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 35
  };
}
