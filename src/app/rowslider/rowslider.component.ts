import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rowslider',
  templateUrl: './rowslider.component.html',
  styleUrls: ['./rowslider.component.css']
})
export class RowsliderComponent implements OnInit {
  title = 'rowslider';
  customOptions: any = {
    loop: true,
    autoplay:true,
    arrows: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }





  constructor() { }

  ngOnInit(): void {
  }

}
