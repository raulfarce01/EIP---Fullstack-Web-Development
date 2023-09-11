import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DigimonCardComponent } from './components/digimon-card/digimon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonListComponent,
    DigimonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
