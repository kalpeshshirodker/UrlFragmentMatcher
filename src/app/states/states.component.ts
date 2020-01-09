import { Component, Input } from '@angular/core';
import { ActivatedRoute , Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'states',
  templateUrl: 'states.component.html'
})
export class StatesComponent  {
  states = ['Maharashtra', 'Goa', 'Karanataka'];

constructor(private readonly activatedRoute: ActivatedRoute,
private readonly router: Router  ){

}
  onEditState(state) {
    console.log(state)
    const extras: NavigationExtras = {
      relativeTo: this.activatedRoute
    }
    this.router.navigate([state], extras);
  }
}
