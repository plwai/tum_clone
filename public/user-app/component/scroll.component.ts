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

  private update(){

  }

  
}
