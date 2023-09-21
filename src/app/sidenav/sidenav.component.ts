import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { HomeComponent } from '../home/home.component';
import { MatIconModule } from '@angular/material/icon'
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [ MatSidenavModule, MatCardModule, HomeComponent, MatButtonModule, MatIconModule, RouterOutlet, RouterModule, NgIf, MatListModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class SidenavComponent {
  public isExpanded: boolean = false;;


  retractSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}
