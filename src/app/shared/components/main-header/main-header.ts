import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-header',
  template: `
    <div class="mb-16 space-y-4" [style.textAlign]="textAlign()">
      <h2 class="text-primary text-brand-voice text-3xl">{{ subTitle() }}</h2>
      <h3 class="text-4xl md:text-5xl font-bold">{{ mainTitle() }}</h3>
    </div>
  `,
})
export class MainHeader {
  mainTitle = input.required<string>();
  subTitle = input.required<string>();
  textAlign = input<string>('center');
}
