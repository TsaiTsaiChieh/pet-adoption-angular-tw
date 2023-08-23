import { Pipe, PipeTransform, } from '@angular/core'

@Pipe({
  name: 'petSex',
  standalone: true,
},)
export class PetSexPipe implements PipeTransform {
  
  transform(sex: AnimalSex,): unknown {
    switch (sex) {
      case 'F':
        return '妹妹'
      case 'M':
        return '弟弟'
      default:
        return '未知'
    }
  }
}
