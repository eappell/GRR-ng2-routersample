import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';

import { routing, appRoutingProviders } from './app.routing';
import { AnimalDetailInfoComponent } from './animal-detail-info/animal-detail-info.component';
import { ProjectDetailInfoComponent } from './project-detail-info/project-detail-info.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AvailableListComponent } from './available-list/available-list.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { HomeComponent } from './home/home.component';

import { KSSwiperModule } from 'angular2-swiper';
import { Swiper1Component } from './swiper1/swiper1.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBHUHIFoL9iaUL9URgmwQSDhxb25FNaS74',
  authDomain: 'gold-river-reptile.firebaseapp.com',
  databaseURL: 'https://gold-river-reptile.firebaseio.com',
  storageBucket: 'gold-river-reptile.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeSliderComponent,
    AnimalDetailInfoComponent,
    ProjectDetailInfoComponent,
    AnimalsListComponent,
    ProjectsListComponent,
    AvailableListComponent,
    CustomerPortalComponent,
    HomeComponent,
    Swiper1Component
  ],
  imports: [
    KSSwiperModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
