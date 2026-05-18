import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LucideAngularModule, Download, ZoomIn, ZoomOut } from 'lucide-angular';
import { MainHeader } from '../../shared/components/main-header/main-header';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, TranslateModule, PdfViewerModule, LucideAngularModule, MainHeader],
  templateUrl: './menu.html',
})
export class MenuComponent {
  readonly pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; // Placeholder PDF
  zoom = signal(1);
  readonly icons = {
    download: Download,
    zoomIn: ZoomIn,
    zoomOut: ZoomOut,
  };

  zoomIn() {
    if (this.zoom() < 2) {
      this.zoom.update((prev) => prev + 0.1);
    }
  }

  zoomOut() {
    if (this.zoom() > 0.5) {
      this.zoom.update((prev) => prev - 0.1);
    }
  }
}
