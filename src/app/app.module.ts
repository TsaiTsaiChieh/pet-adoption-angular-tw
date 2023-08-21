import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './layout/header/header.component'
import { PetsComponent } from './pages/pets/pets/pets.component'
import { PetCardComponent } from './pages/pets/pet-card/pet-card.component'

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
