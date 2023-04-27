import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private logo!:HTMLElement;
  private header!:HTMLElement;

  constructor(private elem:ElementRef) { }

  ngAfterViewInit(){
    this.logo = this.elem.nativeElement.querySelector('.header-logo');
    this.header = this.elem.nativeElement.querySelector('.header-container');
  }

  onHover(){
    this.logo.style.color = '#fff';
    this.logo.style.backgroundColor = '#3E54AC';
    this.header.style.backgroundColor = '#3E54AC';
  }

  outHover(){
    this.logo.style.color = '#000';
    this.logo.style.backgroundColor = '#fff';
    this.header.style.backgroundColor = '#fff';
  }
}