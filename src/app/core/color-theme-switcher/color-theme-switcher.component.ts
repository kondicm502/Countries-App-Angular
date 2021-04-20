import { Component, OnInit } from '@angular/core';
import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-color-theme-switcher',
  templateUrl: './color-theme-switcher.component.html',
  styleUrls: ['./color-theme-switcher.component.css']
})
export class ColorThemeSwitcherComponent implements OnInit {
  rootEl: HTMLElement;

  darkTheme = 'dark';
  lightTheme = 'light';

  faLight = faSun;
  faDark = faMoon;
  icon: IconDefinition;
  

  constructor() { }

  ngOnInit(): void {
    this.rootEl = document.querySelector('html');
    this.setTheme(this.darkTheme, this.faDark);
  }

  setTheme(theme: string, icon: IconDefinition) {
    this.rootEl.dataset.theme = theme;
    this.icon = icon;
  }

  colorThemeSwitcher() {
    switch(this.rootEl.dataset.theme) {
      case this.lightTheme:
        this.setTheme(this.darkTheme, this.faDark);
      break;
      case this.darkTheme:
        this.setTheme(this.lightTheme, this.faLight);
      break;
      default: 
        this.setTheme(this.darkTheme, this.faDark);
    }
  }
}
