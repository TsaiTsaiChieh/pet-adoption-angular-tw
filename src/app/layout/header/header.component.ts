import { Component, } from '@angular/core'
import { MatIconModule, } from '@angular/material/icon'
import { MatToolbarModule, } from '@angular/material/toolbar'

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,],
},)
export class HeaderComponent {

}
