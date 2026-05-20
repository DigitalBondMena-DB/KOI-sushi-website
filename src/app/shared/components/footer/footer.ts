import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { NAV_LINKS } from '../../constants/nav-links.constant';
import { NavLinks } from '../../models/nav-links';
import { SocialService } from '../../services/social.service';
import { MediaUrlDirective } from '../../directives/media-url.directive';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe, MediaUrlDirective,SafeHtmlPipe],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly langService = inject(LanguageService);
  private readonly socialService = inject(SocialService);

  readonly socialData = computed(() => this.socialService.socialDataResource.value());
  
  currentLang = computed(() => this.langService.currentLang());
  readonly quickLinks: NavLinks[] = NAV_LINKS;
  supportLinks = [
    { label: 'NAV.CONTACT', path: `/contact` },
    { label: 'FOOTER.SUPPORT_LINKS.PRIVACY_POLICY', path: `/privacy` },
  ];
}
