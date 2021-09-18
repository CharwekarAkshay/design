import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavSection } from '../models/sidenav-section';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  sideNavSectionList!: Array<SidenavSection>;


  constructor(private httpClient: HttpClient) { }

  getSideNavSectionList(): Observable<Array<SidenavSection>> {
    if (this.sideNavSectionList) {
      return new Observable<Array<SidenavSection>>((observer) => {
        observer.next(this.sideNavSectionList);
      });
    } else {
      return this.httpClient.get<Array<SidenavSection>>("../../../assets/mocks/sidenavSectionList.json").pipe(
        map((response: any) => {
          response = response['sideNavSectionList'];
          this.sideNavSectionList = response;
          return response;
        })
      );
    }
  }

}
