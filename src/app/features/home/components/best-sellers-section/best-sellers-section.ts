import { Component } from '@angular/core';
import { MainHeader } from '../../../../shared/components/main-header/main-header';

@Component({
  selector: 'app-best-sellers-section',
  templateUrl: './best-sellers-section.html',
  imports: [MainHeader],
})
export class BestSellersSection {
  bestSellers = [
    {
      id: 1,
      name: 'Dragon Roll',
      price: '$18.00',
      image:
        'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1000&auto=format&fit=crop',
      description: 'Shrimp tempura, eel, avocado.',
    },
    {
      id: 2,
      name: 'Salmon Nigiri',
      price: '$12.00',
      image:
        'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1000&auto=format&fit=crop',
      description: 'Fresh Atlantic salmon over rice.',
    },
    {
      id: 3,
      name: 'Spicy Tuna',
      price: '$15.00',
      image:
        'https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=1000&auto=format&fit=crop',
      description: 'Premium tuna with spicy mayo.',
    },
    {
      id: 4,
      name: 'Rainbow Roll',
      price: '$20.00',
      image:
        'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000&auto=format&fit=crop',
      description: 'California roll topped with 5 fish.',
    },
  ];
}
