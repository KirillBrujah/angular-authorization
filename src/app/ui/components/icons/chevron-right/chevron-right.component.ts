import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-right',
  templateUrl: './chevron-right.component.html',
  styleUrls: ['./chevron-right.component.css']
})
export class ChevronRightComponent {
  @Input()
  size: number | string = "1em";
}
