import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactStateService {
  private isSubmitted = false;

  setSubmitted(status: boolean): void {
    this.isSubmitted = status;
  }

  getSubmitted(): boolean {
    return this.isSubmitted;
  }
}
