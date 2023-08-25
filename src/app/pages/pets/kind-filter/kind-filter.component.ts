import { CommonModule, } from '@angular/common'
import { Component, EventEmitter, Output, } from '@angular/core'

@Component({
  selector: 'app-kind-filter',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './kind-filter.component.html',
  styleUrls: ['./kind-filter.component.scss',],
})
export class KindFilterComponent {
  @Output() query: EventEmitter<AnimalKind> = new EventEmitter<AnimalKind>()

  changeKind (kind: AnimalKind) {
    this.query.emit(kind)
  }
}
