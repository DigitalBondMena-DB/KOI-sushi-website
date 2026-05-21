import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  template:`
  <div class="flex justify-center items-center min-h-screen fixed inset-0 z-200 bg-white">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary">
        <img src="/assets/images/loading-image.png" alt="" role="presentation" decoding="async">
      </div>
    </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoadingScreen {}
