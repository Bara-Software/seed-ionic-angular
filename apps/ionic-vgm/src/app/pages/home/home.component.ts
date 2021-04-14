import { Component } from '@angular/core';
import { BaseComponent } from '@vgm/xplat/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html',
  styles: [
    `
      ion-content {
        --background: #fff url('../../assets/imgs/home-bg.png') no-repeat center
          center / cover;
      }
    `,
  ],
})
export class HomeComponent extends BaseComponent {}
