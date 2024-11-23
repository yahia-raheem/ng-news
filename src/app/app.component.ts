import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, LOCALE_ID, PLATFORM_ID, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'news-ng';
  currLocal = signal<string>('')
  renderer2 = inject(Renderer2)

  constructor(
    @Inject(LOCALE_ID) private localId: string,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.currLocal.set(localId)
    if (isPlatformBrowser(this.platformId)) {
      if (localId === 'ar') {
        this.loadCSS('vendor/bootstrap-grid.rtl.min.css')
      } else {
        this.loadCSS('vendor/bootstrap-grid.min.css')
      }
    }
  }

  loadCSS(filename: string) {
    // Create a link element via Angular's renderer to avoid SSR troubles
    const style = this.renderer2.createElement('link') as HTMLLinkElement;

    // Add the style to the head section
    this.renderer2.appendChild(this.document.head, style);

    // Set type of the link item and path to the css file
    this.renderer2.setProperty(style, 'rel', 'stylesheet');
    this.renderer2.setProperty(style, 'href', filename);
  }
}
