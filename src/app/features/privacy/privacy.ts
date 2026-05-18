import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="pt-24 pb-24 bg-light min-h-screen">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-dark/5 border border-dark/5">
          <h1 class="text-4xl font-bold text-dark mb-8 uppercase tracking-tight">Privacy Policy</h1>
          
          <div class="prose prose-lg prose-primary max-w-none space-y-8 text-dark/70">
            <section>
              <h2 class="text-2xl font-bold text-dark mb-4">1. Introduction</h2>
              <p>Welcome to KOI Sushi Bar. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-dark mb-4">2. The Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-dark mb-4">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
               <h2 class="text-2xl font-bold text-dark mb-4">4. Data Security</h2>
               <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
            </section>
          </div>

          <div class="mt-12 pt-8 border-t border-dark/5 text-sm text-dark/40">
            Last updated: May 14, 2026
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host ::ng-deep .prose h2 { margin-top: 2rem; color: #010101; }
    :host ::ng-deep .prose p { margin-bottom: 1rem; line-height: 1.8; }
  `]
})
export class PrivacyComponent {}
