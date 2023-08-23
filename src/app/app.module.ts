import { HttpClientModule, } from '@angular/common/http'
import { NgModule, } from '@angular/core'
import { BrowserModule, } from '@angular/platform-browser'
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations'

import { AppComponent, } from './app.component'
import { AppRoutingModule, } from './app-routing.module'
import { HeaderComponent, } from './layout/header/header.component'
import { PetCardComponent, } from './pages/pets/pet-card/pet-card.component'
import { PetsComponent, } from './pages/pets/pets/pets.component'

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    PetCardComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent,],
},)
export class AppModule { }
