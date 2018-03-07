import { Directive, ViewContainerRef, TemplateRef, Input, OnDestroy } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs/Subscription';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[screenLarge]' })

export class ScreenLargeDirective implements OnDestroy {
  private hasView = false;
  private sub: Subscription;
  constructor(
    private screenService: ScreenService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<Object>) {
     this.sub =  this.screenService.resize$.
      subscribe(() => this.onResize());
    }
  @Input()
  set screenLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainerRef.clear();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onResize() {
    this.screenLarge = false;
  }
}
