import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { SocialService } from '../../shared/services/social.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  template: `
    <div class="pt-24 pb-16 bg-light min-h-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          @if (socialData(); as data) {
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Contact Info -->
            <div class="lg:col-span-1 space-y-8">
              <div class="space-y-4">
                <h1 class="text-primary text-brand-voice text-4xl">Contact Us</h1>
                <h2 class="text-4xl font-bold text-dark uppercase tracking-tight">Get In Touch</h2>
                <p class="text-dark/50">Have a question or feedback? We'd love to hear from you.</p>
              </div>

              <div class="space-y-6">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div
                    class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-dark/5"
                  >
                  </div>
                  <div>
                    <p class="text-xs text-dark/40 uppercase font-bold tracking-widest">Phone</p>
                    <p class="text-lg font-bold text-dark">{{ data.phones[0].phone }}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div
                    class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-dark/5"
                  >
                  </div>
                  <div>
                    <p class="text-xs text-dark/40 uppercase font-bold tracking-widest">Email</p>
                    <p class="text-lg font-bold text-dark">{{ data.contactus.email }}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                  <div
                    class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-dark/5"
                  >
                  </div>
                  <div>
                    <p class="text-xs text-dark/40 uppercase font-bold tracking-widest">Address</p>
                    <p class="text-lg font-bold text-dark">{{ data.contactus.address }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div
              class="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-dark/5 border border-dark/5"
            >
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-dark/60 ml-2">Full Name</label>
                    <input
                      type="text"
                      formControlName="name"
                      class="w-full bg-light border-none rounded-2xl p-4 text-dark focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-dark/60 ml-2">Email Address</label>
                    <input
                      type="email"
                      formControlName="email"
                      class="w-full bg-light border-none rounded-2xl p-4 text-dark focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john&#64;example.com"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-dark/60 ml-2">Phone</label>
                  <input
                    type="text"
                    formControlName="phone"
                    class="w-full bg-light border-none rounded-2xl p-4 text-dark focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+20 123 456 7890"
                  />
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-dark/60 ml-2">Message</label>
                  <textarea
                    formControlName="message"
                    rows="5"
                    class="w-full bg-light border-none rounded-2xl p-4 text-dark focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting"
                  class="w-full md:w-auto bg-primary text-light px-12 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                </button>
              </form>
            </div>
          </div>
          } @else {
          <div class="flex justify-center items-center h-64">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  private readonly socialService = inject(SocialService);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

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
