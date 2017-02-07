import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListConferencesComponent} from "./list-conferences/list-conferences.component";
import {DetailConferenceComponent} from "./detail-conference/detail-conference.component";
import {InfoComponent} from "./info/info.component";

const appRoutes: Routes = [
  { path: 'conferences',
    component: ListConferencesComponent,
    children: [{
      path: ':id',
      component: DetailConferenceComponent,
    }]
  },
  {
    path: 'info',
    component: InfoComponent,
    data: { label: 'labelParent' } //donnee statique readonly
  },
  {
    path: 'conferenceDetail',
    component: DetailConferenceComponent
  },
  { path: '**', component: ListConferencesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
