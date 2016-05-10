import {Directive, HostListener} from 'angular2/core';

@Directive({
  selector: "[trackScroll]",
})

export class ScrollComponent{
  public count = 0;
  public const MAX_COUNT = 5;
  public time : boolean = true;

  private setOldSec(){
    var classIn = document.getElementsByClassName('active')[0].className;
    var splited : string[] = classIn.split(" ");
    var classOut = "";

    for(var item in splited){
      if(splited[item] != "active"){
        classOut += splited[item] + " ";
      }
    }
    classOut += "old-sec";

    return classOut;
  }

  private setActive(){
    var classIn = document.getElementsByClassName('showcase')[this.count].className;
    var splited : string[] = classIn.split(" ");
    var classOut = "";

    for(var item in splited){
      if(splited[item] != "old-sec"){
        classOut += splited[item] + " ";
      }
    }
    classOut += "active";

    return classOut;
  }

  private setNormal(){
    var classIn = document.getElementsByClassName('active')[0].className;
    var splited : string[] = classIn.split(" ");
    var classOut = "";

    for(var item in splited){
      if(splited[item] != "active"){
        classOut += splited[item] + " ";
      }
    }

    return classOut;
  }

  private tickerFunc(){
    this.time = true;
  }

  @HostListener('window:wheel', ['$event'])
  track(event) {
    if(this.time){
      this.time = false;

      setTimeout(() => this.tickerFunc(), 1200);

      if(event.deltaY > 0 && this.count != this.MAX_COUNT){
        // mousewheel scroll down
        document.getElementsByClassName('active')[0].className = this.setOldSec();
        this.count++;
        document.getElementsByClassName('showcase')[this.count].className = this.setActive();

      }
      else if(event.deltaY < 0 && this.count > 0){
        // mousewheel scroll up
        document.getElementsByClassName('active')[0].className = this.setNormal();
        this.count--;
        document.getElementsByClassName('showcase')[this.count].className = this.setActive();
      }
    }
    else{
      return;
    }
  }


}
