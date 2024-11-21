import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBrowserOnly]',
  standalone: true
})
export class BrowserOnlyDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-specific code here
      this.viewContainerRef.createEmbeddedView(this.templateRef); 1
    }
  }
}
