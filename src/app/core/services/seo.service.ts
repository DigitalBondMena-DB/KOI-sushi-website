import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from './language.service';
import { environment } from '../../../environments/environment';

export interface SeoData {
  title?: string | null;
  description?: string | null;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly languageService = inject(LanguageService);
  /**
   * Call this method from any component's effect() once the API seo data is available.
   * It sets the page title, description, canonical link, and hreflang alternate links.
   */
  updateSeo(seo: SeoData | null | undefined): void {
    if (!seo) return;

    if (seo.title) {
      this.titleService.setTitle(seo.title);
    }

    if (seo.description) {
      this.metaService.updateTag({ name: 'description', content: seo.description });
    }

    this.updateCanonicalAndHreflang();
  }

  // ─── Private helpers ───────────────────────────────────────────────────────

  private updateCanonicalAndHreflang(): void {
    const currentLang = this.languageService.currentLang();
    const origin = this.document.location?.origin ?? '';

    // Strip query-string and fragment, then remove the leading lang segment
    const rawUrl = this.router.url.split('?')[0].split('#')[0];
    const pathWithoutLang = rawUrl.replace(/^\/(en|ar)/, '') || '/';

    const canonicalUrl = `${origin}/${currentLang}${pathWithoutLang}`;
    const arUrl = `${origin}/ar${pathWithoutLang}`;
    const enUrl = `${origin}/en${pathWithoutLang}`;
    const xDefaultUrl = enUrl; // x-default always points to the English version

    // Canonical
    this.upsertLinkTag('canonical', canonicalUrl);

    // Remove old hreflang tags before re-inserting (keeps order deterministic)
    this.removeHreflangTags();

    // Order: current language first, other language second, x-default always last
    if (currentLang === 'ar') {
      this.appendHreflangTag('ar', arUrl);
      this.appendHreflangTag('en', enUrl);
    } else {
      this.appendHreflangTag('en', enUrl);
      this.appendHreflangTag('ar', arUrl);
    }
    this.appendHreflangTag('x-default', xDefaultUrl);
  }

  /** Create or update a <link rel="..."> tag in <head>. */
  private upsertLinkTag(rel: string, href: string): void {
    let link = this.document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  /** Remove all existing <link rel="alternate" hreflang="..."> tags. */
  private removeHreflangTags(): void {
    this.document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.parentNode?.removeChild(el));
  }

  /** Append a new <link rel="alternate" hreflang="..."> tag to <head>. */
  private appendHreflangTag(hreflang: string, href: string): void {
    const link = this.document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hreflang);
    link.setAttribute('href', href);
    this.document.head.appendChild(link);
  }
}
