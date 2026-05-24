import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { ContactStateService } from '../contact-state.service';

@Component({
  selector: 'app-contact-done',
  imports: [CommonModule, TranslateModule],
  templateUrl: './done.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDoneComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly languageService = inject(LanguageService);
  private readonly contactStateService = inject(ContactStateService);

  ngOnInit(): void {
    // Reset submission state on init, so refresh or direct navigation blocks access.
    this.contactStateService.setSubmitted(false);
  }

  close(): void {
    const lang = this.languageService.currentLang();
    this.router.navigate([`/${lang}/contact`]);
  }

  ngOnDestroy(): void {
    // Ensure state is reset when navigating away
    this.contactStateService.setSubmitted(false);
  }
}
