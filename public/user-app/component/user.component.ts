import {Component} from 'angular2/core';

@Component({
  selector: "user-auth",
  templateUrl: "user-app/template/user.component.html",
  styleUrls: ["stylesheets/user-app/user.component.css"]
})

export class UserComponent{
  public isSignup : boolean = true;
  public name : string;
}
