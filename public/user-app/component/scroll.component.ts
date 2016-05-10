import {Directive, HostListener} from 'angular2/core';

@Directive({
  selector: "[trackScroll]",
})

export class ScrollComponent{

  @HostListener('window:wheel', ['$event'])
  track(event) {
    if(event.deltaY > 0){
      document.getElementsByClassName('login-section')[0].className += " old-sec";
    }
  }
}
