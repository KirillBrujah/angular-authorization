import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input({ required: true })
  currentIndex: number = 0;

  @Input({ required: true })
  maxIndex: number = 0;

  @Input({ required: true })
  click!: (index: number) => void;

  indexes: number[] = [];

  ngAfterViewInit(): void {
    for (let i = 0; i < this.maxIndex; i++) {
      this.indexes.push(i);
    }
  }

  slide(index: number) {
    this.click(index);
    console.log("SLIDE");
  }
}
