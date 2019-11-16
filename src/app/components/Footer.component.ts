import { Component, OnInit } from "@angular/core";
import { LanguageService } from "./index";

@Component({
  selector: "Footer",
  templateUrl: "Footer.component.html",
  styleUrls: ["Footer.component.css"]
})
export class Footer implements OnInit {
  isCollapsed: boolean = true;
  language: LanguageService[];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.language = [
      { Id: 1, Language: "English" },
      { Id: 2, Language: "Kiswahili" },
      { Id: 3, Language: "Francias" }
    ];
  }
}
