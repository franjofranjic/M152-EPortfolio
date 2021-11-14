import { Component } from '@angular/core';
import {UiService} from '../../state/ui/ui.service';
import {UiQuery} from '../../state/ui/ui.query';
import {MenuItem} from 'primeng/api';
import {mainNavigation} from './navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[];

  constructor(
    private uiQuery: UiQuery,
    private uiService: UiService,
  ) {
    this.items = mainNavigation;
  }

  toggleTheme(): void {
    this.uiService.toggleTheme();
  }

}
