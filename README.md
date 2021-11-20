# BehaviorSubject vs Subject

This short code explainer shows you the difference between a BehaviorSubject and a regular Subject.

Both are a type of Observable that we can use to stream data throughout our application.

```ts
import { Component } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  myBehaviosSubject$ = new BehaviorSubject<string>("I have an initial value");
  myRegularSubject$ = new Subject<string>();
  constructor() {}
}
```

The main difference, as we can see in the code, is that the `BehaviorSubject` has an initial value, and when you subscribe to it, it will give you the last value it emitted.

The regular `Subject` doesn't have an initial value, and even if it has been emitting data, when you subscribe to it you won't get any data until it emits something again.
