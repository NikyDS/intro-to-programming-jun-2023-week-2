import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BankAccountComponent } from './components/bank-account.component';
import { HeadingComponent } from './components/heading/heading.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, BankAccountComponent, HeadingComponent,
    LandingPageComponent, NavigationComponent]
})
export class AppComponent {

}
