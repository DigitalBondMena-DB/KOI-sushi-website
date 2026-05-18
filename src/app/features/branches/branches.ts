import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, MapPin, Phone, Clock, ExternalLink } from 'lucide-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MainHeader } from '../../shared/components/main-header/main-header';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule, TranslateModule, LucideAngularModule, MainHeader],
  templateUrl: './branches.html',
})
export class BranchesComponent {
  readonly icons = {
    mapPin: MapPin,
    phone: Phone,
    clock: Clock,
    externalLink: ExternalLink,
  };
  readonly sanitizer = inject(DomSanitizer);
  branches = [
    {
      id: 1,
      name: 'Main Branch',
      address: '123 Sushi Street, Downtown District, Cairo, Egypt',
      phone: '0106 020 6736',
      hours: '12:00 PM - 02:00 AM',
      googleMapsUrl: 'https://goo.gl/maps/example1',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.123456789!3d30.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzM0LjUiTiAzMcKwMDcnMzQuNSJF!5e0!3m2!1sen!2seg!4v1234567890',
    },
    {
      id: 2,
      name: 'Maadi Branch',
      address: '45 Nile View Road, Maadi, Cairo, Egypt',
      phone: '0106 020 6737',
      hours: '01:00 PM - 03:00 AM',
      googleMapsUrl: 'https://goo.gl/maps/example2',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.123456789!3d30.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzM0LjUiTiAzMcKwMDcnMzQuNSJF!5e0!3m2!1sen!2seg!4v1234567890',
    },
  ];
}
