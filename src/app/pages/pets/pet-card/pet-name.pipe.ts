import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'petName'
})
export class PetNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null
  }

}
