import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { UIModule as UIWebModule } from '@vgm/xplat/web/features';
import { HeaderComponent, IntroduceComponent } from './components';

@NgModule({
  imports: [UIWebModule, IonicModule],
  declarations: [HeaderComponent, IntroduceComponent],
  exports: [UIWebModule, IonicModule, HeaderComponent, IntroduceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UIModule {}
