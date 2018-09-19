import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PbDataService } from './../service/pb-data/pb-data.service';

@Injectable()
export class ConnectedGuard implements CanActivate {
  constructor(private $data: PbDataService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.$data.isConnecting()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
