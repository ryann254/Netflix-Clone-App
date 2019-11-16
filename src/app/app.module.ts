import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MainComponent } from "./pages/index";
import {
  HeaderComponent,
  StyledComponents,
  TabMainComponent,
  TabDoorComponent,
  TabDeviceComponent,
  TabPriceComponent,
  Footer,
  LanguageService
} from "./components/index";
import { appRoutes } from "./routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    StyledComponents,
    TabMainComponent,
    TabDoorComponent,
    TabDeviceComponent,
    TabPriceComponent,
    Footer
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
