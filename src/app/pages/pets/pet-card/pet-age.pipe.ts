import { Pipe, PipeTransform, } from '@angular/core'

@Pipe({
  name: 'petAge',
  standalone: true,
},)
export class PetAgePipe implements PipeTransform {
  
  transform(age: AnimalAge,): string {
    switch (age) {
      case 'ADULT':
        return '成年'
      case 'CHILD':
        return '幼年'
      default:
        return '未知'
    }
  }
}
