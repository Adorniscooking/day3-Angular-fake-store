import { Component } from '@angular/core';
import { Accordian } from '../accordian/accordian';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [Carousel, Accordian],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
