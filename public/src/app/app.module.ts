// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";

// Services

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
