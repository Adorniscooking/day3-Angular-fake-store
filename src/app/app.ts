import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from "./footer/footer";
import { Contact } from './contact/contact';
//import { Carousel } from './carousel/carousel';
//import { Card } from "./card/card";
//import { Accordian } from "./accordian/accordian";
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ecommerce');
}
