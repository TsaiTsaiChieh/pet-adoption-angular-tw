import { CommonModule, } from '@angular/common'
import { Component, OnInit, } from '@angular/core'
import { PetService, } from 'src/app/services/pet.service'

import { BannerComponent, } from '../banner/banner.component'
import { KindFilterComponent, } from '../kind-filter/kind-filter.component'
import { PetCardComponent, } from '../pet-card/pet-card.component'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss',],
  imports: [CommonModule, PetCardComponent, BannerComponent, KindFilterComponent,],
  standalone: true,
})
export class PetsComponent implements OnInit {
  pets: Pet[] = []
  // could be updated by child component
  filter: PetFilterType = {
    page: 1,
  }
  constructor(private service: PetService) {}

  ngOnInit(): void {
    this.service.query(this.filter).subscribe((data) => {
      this.pets = data
    })
  }

  setKind(kind: AnimalKind) {
    this.filter.kind = kind
    this.runQuery() 
  }

  runQuery() {
    this.service.query(this.filter).subscribe((data) => {
      this.pets = data
    })
  }
}
