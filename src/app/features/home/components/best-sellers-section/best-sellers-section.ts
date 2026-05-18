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
      image: 'assets/images/test-image.png',
      description: 'Shrimp tempura, eel, avocado.',
    },
    {
      id: 2,
      name: 'Salmon Nigiri',
      price: '$12.00',
      image: 'assets/images/test-image.png',
      description: 'Fresh Atlantic salmon over rice.',
    },
    {
      id: 3,
      name: 'Spicy Tuna',
      price: '$15.00',
      image: 'assets/images/test-image.png',
      description: 'Premium tuna with spicy mayo.',
    },
    {
      id: 4,
      name: 'Rainbow Roll',
      price: '$20.00',
      image: 'assets/images/test-image.png',
      description: 'California roll topped with 5 fish.',
    },
  ];
}
