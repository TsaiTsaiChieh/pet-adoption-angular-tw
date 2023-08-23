import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './layout/header/header.component'
import { PetsComponent } from './pages/pets/pets/pets.component'
import { PetCardComponent } from './pages/pets/pet-card/pet-card.component'
import { HttpClientModule } from '@angular/common/http'
import { PetNamePipe } from './pages/pets/pet-card/pet-name.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetNamePipe,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
