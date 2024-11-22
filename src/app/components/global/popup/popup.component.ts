import { Component, ElementRef, input, output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  isVisible = input<boolean>();
  close = output()

  closePopup() {
    this.close.emit();
  }
}
