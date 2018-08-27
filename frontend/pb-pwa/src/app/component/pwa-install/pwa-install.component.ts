import { Component, OnInit } from '@angular/core';
import { GlobalRef } from './../../module/fg-global-scope/fg-global-refs.class';

@Component({
  selector: 'pb-pwa-install',
  templateUrl: './pwa-install.component.html',
  styleUrls: ['./pwa-install.component.css']
})
export class PwaInstallComponent {
  public pwaDeferredPromt: any = false;

  constructor(public $global: GlobalRef ) {
    if (this.$global.nativeGlobal.addEventListener) {
      this.$global.nativeGlobal.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        // e.preventDefault();
        // Stash the event so it can be triggered later.
        this.pwaDeferredPromt = e;
      });
    }
  }

  install() {
    this.pwaDeferredPromt.prompt();
    this.pwaDeferredPromt = false;
  }

}
