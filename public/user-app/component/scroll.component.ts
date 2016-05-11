import {Directive, HostListener} from 'angular2/core';

@Directive({
  selector: "[trackScroll]",
})

export class ScrollComponent{
  public count = 0;
  public const MAX_COUNT = 5;
  public time : boolean = true;

  private setOldSec(targetElement){
    var classIn = targetElement.className;
    var splited : string[] = classIn.split(" ");
    var classOut = "";

    for(var item in splited){
      if(splited[item] != "active"){
        classOut += splited[item] + " ";
      }
    }
    classOut += "old-sec";

    targetElement.className = classOut;
  }

  private setActive(targetElement){
    var classIn = targetElement.className;
    var splited : string[] = classIn.split(" ");
    var classOut = "";

    for(var item in splited){
      if(splited[item] != "old-sec"){
        classOut += splited[item] + " ";
      }
    }
    classOut += "active";

    targetElement.className = classOut;
  }

  private setNormal(targetElement){
    var classIn = targetElement.className;
    var splited : string[] = classIn.split(" ");
    var classOut = "";

    for(var item in splited){
      if(splited[item] != "active" && splited[item] != ""){
        classOut += splited[item] + " ";
      }
    }

    targetElement.className = classOut;
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
        this.setOldSec(document.getElementsByClassName('active')[0]);
        this.count++;
        this.setActive(document.getElementsByClassName('showcase')[this.count]);
      }
      else if(event.deltaY < 0 && this.count > 0){
        // mousewheel scroll up
        this.setNormal(document.getElementsByClassName('active')[0]);
        this.count--;
        this.setActive(document.getElementsByClassName('showcase')[this.count]);
      }
    }
    else{
      return;
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyTrack(event) {
    if(this.time && document.activeElement.tagName == "BODY"){
      this.time = false;
      setTimeout(() => this.tickerFunc(), 1200);

      if(event.keyCode == 40 && this.count != this.MAX_COUNT){
        // mousewheel scroll down
        this.setOldSec(document.getElementsByClassName('active')[0]);
        this.count++;
        this.setActive(document.getElementsByClassName('showcase')[this.count]);
      }
      else if(event.keyCode == 38 && this.count > 0){
        // mousewheel scroll up
        this.setNormal(document.getElementsByClassName('active')[0]);
        this.count--;
        this.setActive(document.getElementsByClassName('showcase')[this.count]);
      }
    }
    else{
      return;
    }
  }
}
