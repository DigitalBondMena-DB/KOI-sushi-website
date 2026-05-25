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
      name: ['', [Validators.required, Validators.minLength(3)]],
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
