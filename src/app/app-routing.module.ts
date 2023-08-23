import { NgModule, } from '@angular/core'
import { RouterModule, Routes, } from '@angular/router'

import { PetsComponent, } from './pages/pets/pets/pets.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pets',
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,),],
  exports: [RouterModule,],
},)
export class AppRoutingModule { }
