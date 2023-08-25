import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-left',
  templateUrl: './chevron-left.component.html',
  styleUrls: ['./chevron-left.component.css']
})
export class ChevronLeftComponent {
  @Input()
  size: number | string = "1em";
}
