import { CommonModule, } from '@angular/common'
import { Component, OnInit, } from '@angular/core'
import { PetService, } from 'src/app/services/pet.service'

import { BannerComponent, } from '../banner/banner.component'
import { PetCardComponent, } from '../pet-card/pet-card.component'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss',],
  imports: [CommonModule, PetCardComponent, BannerComponent,],
  standalone: true,
},)
export class PetsComponent implements OnInit {
  pets: Pet[] = []
  constructor(private service: PetService,) {}

  ngOnInit(): void {
    this.service.query({ page: 1, },).subscribe((data,) => {
      this.pets = data
    },)
  }
}
