import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { HomeComponent } from '../home/home.component';
import { MatIconModule } from '@angular/material/icon'
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [ MatSidenavModule, MatCardModule, HomeComponent, MatButtonModule, MatIconModule, RouterOutlet, RouterModule ]
})

export class SidenavComponent {

}
