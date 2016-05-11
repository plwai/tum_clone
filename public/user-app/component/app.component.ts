import {Component,
        FORM_DIRECTIVES,
        CORE_DIRECTIVES,
        OnInit} from 'angular2/core';
import {MDL} from '../../mdl-components/MaterialDesignLiteUpgradeElement.ts';
import {ScrollComponent} from 'user-app/component/scroll.component.ts';

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
  directives: [ MDL, ScrollComponent ]
})

export class AppComponent{
  page: Page = Page;
  pageNum: int = 0;
  MAX_PAGE: const int = 5;
  targetElement: string;

  ngOnInit(){
    this.targetElement = document.getElementsByClassName('dot')[0];
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

  public selectPagination(page, event){


    if(this.targetElement != event.srcElement){
      // Dot class configuration
      this.setNormal(this.targetElement);
      this.targetElement = event.srcElement;
      this.setActive(this.targetElement);

      // Showcase configuration
      var tempPageNum: int = this.page[page];
      if(this.pageNum > tempPageNum){
        for(int i = tempPageNum; i < this.pageNum; i++){
          this.setNormal(tempPageNum);
        }

        this.pageNum= tempPageNum;
        this.setActive(document.getElementsByClassName('showcase')[this.pageNum]);
      }

    }
  }
}
