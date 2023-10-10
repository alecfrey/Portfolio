import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { HomeComponent } from '../home/home.component';
import { MatIconModule } from '@angular/material/icon'
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [ BrowserAnimationsModule, MatToolbarModule, MatSidenavModule, MatCardModule, HomeComponent, MatButtonModule, MatIconModule, RouterOutlet, RouterModule, NgIf, MatListModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
