import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ListConferencesComponent} from "./list-conferences/list-conferences.component";
import {DetailConferenceComponent} from "./detail-conference/detail-conference.component";
import {InfoComponent} from "./info/info.component";
import {StoreConferenceService} from "./services/store.conferences.service";
import {UpdateConferenceService} from "./services/update.conferences.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ListConferencesComponent,
    DetailConferenceComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StoreConferenceService, UpdateConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
