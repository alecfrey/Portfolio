import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reflections',
  templateUrl: './reflections.component.html',
  styleUrls: ['./reflections.component.scss'],
  standalone: true,
  imports: [ MatCardModule, MatIconModule, MatButtonModule, NgIf, NgFor ]
})

export class ReflectionsComponent {
  isGenExpanded = false;
  isCumulativeExpanded = false;
  isEthicsExpanded = false;

  expandReflection(index: number) {
    if (index == 1) {
      this.isEthicsExpanded = !this.isEthicsExpanded;
      this.isGenExpanded = false;
      this.isCumulativeExpanded = false;

    } else if (index == 2) {
      this.isGenExpanded = !this.isGenExpanded;
      this.isEthicsExpanded = false;
      this.isCumulativeExpanded = false;

    } else if (index == 3) {
      this.isCumulativeExpanded = !this.isCumulativeExpanded;
      this.isGenExpanded = false;
      this.isEthicsExpanded = false;
    }
  }
}
