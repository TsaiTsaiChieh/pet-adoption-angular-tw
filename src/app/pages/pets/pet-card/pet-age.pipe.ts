import { Pipe, PipeTransform, } from '@angular/core'

@Pipe({
  name: 'petAge',
  standalone: true,
},)
export class PetAgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null
  }

}
