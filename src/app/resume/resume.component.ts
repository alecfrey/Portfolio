import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  standalone: true,
  imports: [ MatCardModule, PdfViewerModule, MatButtonModule, MatIconModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ResumeComponent {
  pdfSrc = '../../assets/docs/resume.pdf';
}
