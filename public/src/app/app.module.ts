// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";

// Services
import { UserService } from "./user.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListingsComponent } from "./listings/listings.component";
import { BrowseComponent } from "./browse/browse.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    ListingsComponent,
    BrowseComponent
  ],
  imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
