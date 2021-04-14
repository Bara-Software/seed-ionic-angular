import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@vgm/xplat/utils';
import { VgmCoreModule } from '@vgm/xplat/web/core';

@NgModule({
  imports: [VgmCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class VgmIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: VgmIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'VgmIonicCoreModule');
  }
}
