import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() isLoading: boolean = false;
  @Input() label!: string;
  @Input() click!: VoidFunction;
}
