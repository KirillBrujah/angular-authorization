import { Component } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../ngrx/counter/counter.actions';
import { CounterState } from '../ngrx/counter/counter.reducer';


const selectCount = (state: CounterState) => state.value;

const counterSelector = createSelector(
  selectCount,
  (state: number) => state * 2,
  );

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private _store: Store<{ count: number }>) {
    this.count$ = _store.select('count');
  }

  increment() {
    this._store.dispatch(increment());
  }
}