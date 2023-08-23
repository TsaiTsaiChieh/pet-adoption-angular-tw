import { Pipe, PipeTransform, } from '@angular/core'
/*
 * Pet name transfer
 * Usage:
 *   color | petName:kind
*/
@Pipe({
  name: 'petName',
  standalone: true,
},)
export class PetNamePipe implements PipeTransform {
  kindTransform (kind: string,): string {
    switch (kind) {
      case '狗':
        return '汪'
      case '貓':
        return '喵'
      default:
        return kind
    }
  }
  transform (color: string, kind: string,): string {
    return color.replace('色', '',) + this.kindTransform(kind,)
  }
}