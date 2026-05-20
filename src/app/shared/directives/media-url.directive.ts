import { Directive, ElementRef, inject, input, effect, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appMediaUrl]',
})
export class MediaUrlDirective {
  appMediaUrl = input.required<string>();
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      const path = this.appMediaUrl();
      if (path) {
        // Ensure we don't double up on slashes
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        const fullUrl = `${environment.mediaUrl}${cleanPath}`;
        // Using Renderer2 is safe for SSR
        this.renderer.setAttribute(this.el.nativeElement, 'src', fullUrl);
      }
    });
  }
}
