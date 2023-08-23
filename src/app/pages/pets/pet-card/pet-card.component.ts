import { Component, Input, OnInit, } from '@angular/core'
import { MatButtonModule, } from '@angular/material/button'
import { MatCardModule, } from '@angular/material/card'
import { MatIconModule, } from '@angular/material/icon'

import { PetAgePipe, } from './pet-age.pipe'
import { PetNamePipe, } from './pet-name.pipe'
import { PetSexPipe, } from './pet-sex.pipe'

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss',],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, PetNamePipe, PetSexPipe, PetAgePipe,],
},)
export class PetCardComponent implements OnInit{

  @Input()
  pet: Partial<Pet> = {}

  ngOnInit (): void {
    this.pet.album_file = this.pet.album_file === '' ? 'assets/imgs/no-pic.webp' : this.pet.album_file
  }

  // HACK: cloud change directive method
  handleMissingImg(event: Event,) {
    (event.target as HTMLImageElement).setAttribute('src', '/assets/imgs/no-pic.webp',)
  }
}
