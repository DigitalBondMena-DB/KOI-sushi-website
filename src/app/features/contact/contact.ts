import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { SocialService } from '../../shared/services/social.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  private readonly socialService = inject(SocialService);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  readonly contactData = [
    {
      icon:'/assets/icons/phone.svg',
      label:'phone',
      value:'01060206736'
    },
    {
      icon:'/assets/icons/phone.svg',
      label:'email',
      value:'hello@koisushi.com'
    },
    {
      icon:'/assets/icons/phone.svg',
      label:'phone',
      value:'01060206736'
    },
  ]
  readonly socialData = computed(() => this.socialService.socialDataResource.value());

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });

    effect(() => {
      const data = this.socialData();
      if (data?.seo) {
        if (data.seo.title) {
          this.titleService.setTitle(data.seo.title);
        }
        if (data.seo.description) {
          this.metaService.updateTag({ name: 'description', content: data.seo.description });
        }
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.socialService.submitLead(this.contactForm.value).subscribe({
        next: () => {
          alert('Message sent successfully!');
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
}
