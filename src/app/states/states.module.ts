import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { StateComponent } from "./state.component";
import { StatesComponent } from "./states.component";
import { ExportStatesComponent } from "./exportstates.component";

import { RouteMatchService } from "../../service/route-match.service";

const routes: Routes = [
  {
    path: "states",
    
    children : [{
        path: ':name',
        component: StateComponent,
    },{
      path: "",

      children : [{
        component: StateComponent,
        matcher: RouteMatchService.urlFragmentMatcher,
        data : {
          matcherconfig : {
            fragment: 'new'
          }
        }
      }, {
        component: ExportStatesComponent,
        matcher: RouteMatchService.urlFragmentMatcher,
        data : {
          matcherconfig : {
            fragment: 'export'
          }
        }
      }, {
        path: "",
        component: StatesComponent
      }]
    
  }]
  }
  // {
  //   path: "newstate",
  //   component: StateComponent
  // }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forChild(routes) ],
  declarations: [ StateComponent, StatesComponent, ExportStatesComponent ],
  providers: [ RouteMatchService ],
  exports: [ RouterModule ]
})
export class StatesModule {
  constructor(private routeMatchService: RouteMatchService) {}
}
