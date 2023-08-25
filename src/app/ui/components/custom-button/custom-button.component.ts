import { Component, Input } from '@angular/core';


type ButtonTypes = 'submit' | 'button';
@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input({ required: true }) label!: string;
  @Input() type!: ButtonTypes;
  @Input() click!: VoidFunction;
}
