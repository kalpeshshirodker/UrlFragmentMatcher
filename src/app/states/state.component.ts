import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'state',
  templateUrl: './state.component.html'
})
export class StateComponent  {

  name: string;

  constructor(private readonly activatedRoute: ActivatedRoute ){
    this.activatedRoute.params
    .subscribe((params) => {
      console.log(params);
      this.name = params['name'];
    })
  }
}
