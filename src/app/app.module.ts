import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapTravelIconService} from './map/services/map.travelicon.service';
import { MapPopupService} from './map/services/map.popup.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MapTravelIconService, MapPopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
