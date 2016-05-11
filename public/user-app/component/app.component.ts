import {Component,
        FORM_DIRECTIVES,
        CORE_DIRECTIVES,
        OnInit,
        HostListener} from 'angular2/core';
import {MDL} from '../../mdl-components/MaterialDesignLiteUpgradeElement.ts';

enum Page{
  Login,
  About,
  Blogs,
  Dashboard,
  Create,
  Welcome
}

@Component({
  selector: "my-app",
  templateUrl: "user-app/template/app.component.html",
  styleUrls: ["stylesheets/user-app/app.component.css"],
  directives: [ MDL ]
})

export class AppComponent{
  page: Page = Page;
  pageNum: int = 0;
  const MAX_PAGE: int = 5;
  targetElement: string;
  public const MAX_COUNT = 5;
  public time : boolean = true;

  ngOnInit(){
    this.targetElement = document.getElementsByClassName('dot')[0];
  }

  private tickerFunc(){
    this.time = true;
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

  public selectPagination(page, event){
    if(this.targetElement != event.srcElement){
      // Dot class configuration
      this.setNormal(this.targetElement);
      this.targetElement = event.srcElement;
      this.setActive(this.targetElement);

      // Showcase configuration
      var tempPageNum: int = this.page[page]; // Selected page

      if(this.pageNum > tempPageNum){
        // If from bottom page to upper page
        this.setActive(document.getElementsByClassName('showcase')[tempPageNum]);

        for(var i: int = tempPageNum + 1; i <= this.pageNum; i++){
          this.setNormal(document.getElementsByClassName('showcase')[i]);
        }

        this.pageNum= tempPageNum;
      }
      else if(this.pageNum < tempPageNum){
        // If from upper page to bottom page
        for(var i: int = tempPageNum + 1; i >= this.pageNum; i--){
          if(i < this.MAX_PAGE){
            this.setOldSec(document.getElementsByClassName('showcase')[i]);
          }
        }

        this.setActive(document.getElementsByClassName('showcase')[tempPageNum]);

        this.pageNum= tempPageNum;
      }
    }
  }
  @HostListener('window:wheel', ['$event'])
  track(event) {
    if(this.time){
      this.time = false;

      setTimeout(() => this.tickerFunc(), 1200);

      if(event.deltaY > 0 && this.pageNum != this.MAX_COUNT){
        // mousewheel scroll down
        this.setOldSec(document.getElementsByClassName('active')[0]);
        this.setNormal(this.targetElement);

        this.pageNum++;
        this.targetElement = document.getElementsByClassName('dot')[this.pageNum];

        this.setActive(document.getElementsByClassName('showcase')[this.pageNum]);
        this.setActive(this.targetElement);
      }
      else if(event.deltaY < 0 && this.pageNum > 0){
        // mousewheel scroll up
        this.setNormal(document.getElementsByClassName('active')[0]);
        this.setNormal(this.targetElement);

        this.pageNum--;
        this.targetElement = document.getElementsByClassName('dot')[this.pageNum];
        
        this.setActive(document.getElementsByClassName('showcase')[this.pageNum]);
        this.setActive(this.targetElement);
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

      if(event.keyCode == 40 && this.pageNum != this.MAX_COUNT){
        // mousewheel scroll down
        this.setOldSec(document.getElementsByClassName('active')[0]);
        this.setNormal(this.targetElement);

        this.pageNum++;
        this.targetElement = document.getElementsByClassName('dot')[this.pageNum];

        this.setActive(document.getElementsByClassName('showcase')[this.pageNum]);
        this.setActive(this.targetElement);
      }
      else if(event.keyCode == 38 && this.pageNum > 0){
        // mousewheel scroll up
        this.setNormal(document.getElementsByClassName('active')[0]);
        this.setNormal(this.targetElement);

        this.pageNum--;
        this.targetElement = document.getElementsByClassName('dot')[this.pageNum];

        this.setActive(document.getElementsByClassName('showcase')[this.pageNum]);
        this.setActive(this.targetElement);
      }
    }
    else{
      return;
    }
  }
}
