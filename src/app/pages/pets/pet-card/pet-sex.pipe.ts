import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'petSex',
  standalone: true
})
export class PetSexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null
  }

}
