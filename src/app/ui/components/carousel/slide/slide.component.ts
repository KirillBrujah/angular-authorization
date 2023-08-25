import { Component, Input } from '@angular/core';
import { CharacterData } from 'src/app/models';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  @Input({required: true})
  slide!: CharacterData;
}
