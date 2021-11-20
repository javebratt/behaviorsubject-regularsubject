import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myBehaviosSubject$ = new BehaviorSubject<string>('I have an initial value');
  myRegularSubject$ = new Subject<string>();
  constructor() {}

  triggerSubject(subjectType: string): void {
    if (subjectType === 'behaviorSubject') {
      this.myBehaviosSubject$.next('I just changed values');
    } else {
      this.myRegularSubject$.next('Now I am setting a value');
    }
  }
}
