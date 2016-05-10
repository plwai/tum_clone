import {Component,
        FORM_DIRECTIVES,
        CORE_DIRECTIVES} from 'angular2/core';
import {MDL} from '../../mdl-components/MaterialDesignLiteUpgradeElement.ts';

@Component({
  selector: "my-app",
  templateUrl: "user-app/template/app.component.html",
  styleUrls: ["stylesheets/user-app/app.component.css"],
  directives: [ MDL ]
})

export class AppComponent{

}
