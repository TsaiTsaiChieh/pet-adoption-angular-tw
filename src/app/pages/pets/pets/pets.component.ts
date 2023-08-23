import { Component, OnInit, } from '@angular/core'
import { PetService, } from 'src/app/services/pet.service'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss',],
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
