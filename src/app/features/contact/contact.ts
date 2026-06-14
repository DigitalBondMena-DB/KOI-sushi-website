import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { SocialService } from '../../shared/services/social.service';
import { ContactStateService } from './contact-state.service';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  private readonly socialService = inject(SocialService);
  private readonly seoService = inject(SeoService);
  private readonly router = inject(Router);
  private readonly contactStateService = inject(ContactStateService);
  private readonly languageService = inject(LanguageService);
  readonly contactData = [
    {
      icon: '/assets/icons/phone.svg',
      label: 'phone',
      value: '01060206736'
    },
    {
      icon: '/assets/icons/phone.svg',
      label: 'email',
      value: 'hello@koisushi.com'
    },
    {
      icon: '/assets/icons/phone.svg',
      label: 'phone',
      value: '01060206736'
    },
  ]
  readonly socialData = computed(() => this.socialService.socialDataResource.value());

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[^\d\u0660-\u0669]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0125]\d{8}$/)]],
      message: ['', Validators.required],
    });

    effect(() => {
      const data = this.socialData();
      if (data?.seo) {
        this.seoService.updateSeo(data.seo);
      }
    });
  }

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectionStart = input.selectionStart;
    const originalValue = input.value;
    const sanitized = originalValue.replace(/[0-9\u0660-\u0669]/g, '');

    if (originalValue !== sanitized) {
      input.value = sanitized;
      this.contactForm.get('name')?.setValue(sanitized, { emitEvent: false });

      const removedCount = originalValue.substring(0, selectionStart || 0).match(/[0-9\u0660-\u0669]/g)?.length || 0;
      const newCursorPos = Math.max(0, (selectionStart || 0) - removedCount);
      input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectionStart = input.selectionStart;
    const originalValue = input.value;

    const value = this.convertArabicToEnglishDigits(originalValue);
    const sanitized = value.replace(/[^0-9]/g, '');

    if (originalValue !== sanitized) {
      input.value = sanitized;
      this.contactForm.get('phone')?.setValue(sanitized, { emitEvent: false });

      const digitsCountBeforeCursor = this.convertArabicToEnglishDigits(originalValue.substring(0, selectionStart || 0)).replace(/[^0-9]/g, '').length;
      input.setSelectionRange(digitsCountBeforeCursor, digitsCountBeforeCursor);
    } else if (originalValue !== value) {
      input.value = value;
      this.contactForm.get('phone')?.setValue(value, { emitEvent: false });
      input.setSelectionRange(selectionStart, selectionStart);
    }
  }

  private convertArabicToEnglishDigits(str: string): string {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[٠-٩]/g, (d) => arabicDigits.indexOf(d).toString());
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.socialService.submitLead(this.contactForm.value).subscribe({
        next: () => {
          this.contactStateService.setSubmitted(true);
          const lang = this.languageService.currentLang();
          this.router.navigate([`/${lang}/contact/done`]);
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: () => {
          alert('Failed to send message. Please try again later.');
          this.isSubmitting = false;
        }
      });
    }
  }
  isArray(item: any): boolean {
    return Array.isArray(item)
  }
}
