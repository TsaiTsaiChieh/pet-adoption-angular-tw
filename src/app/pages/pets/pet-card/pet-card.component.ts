import { Component, Input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { PetNamePipe } from './pet-name.pipe'

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule,PetNamePipe],
})
export class PetCardComponent {

  @Input()
  pet: Partial<Pet> = {}
}
