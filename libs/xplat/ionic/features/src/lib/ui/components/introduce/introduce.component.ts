import { Component } from '@angular/core';

import { BaseComponent } from '@vgm/xplat/core';

@Component({
  selector: 'vgm-introduce',
  templateUrl: 'introduce.component.html',
  styles: [
    `
      ion-img {
        max-width: 189px;
        max-height: 126px;
      }
    `,
  ],
})
export class IntroduceComponent extends BaseComponent {
  constructor() {
    super();
  }
}
