import { Component, OnInit, EventEmitter, Output, ElementRef, Input, OnDestroy, ViewChild, TemplateRef, AfterViewChecked } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap, merge } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchService } from '../../service/search.service';
import { StorageUtil } from '../../util/storage.util';
import { Router, NavigationEnd } from '@angular/router';
import { SpinnyService } from '../spinny/spinny.service';
import { ContactDataService } from '../../service/contact-data.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  @Output()

  linkClicked: EventEmitter<any> = new EventEmitter();
  userDisplayName: string;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);


  searching: boolean;
  searchFailed: boolean;
  constructor(private _router: Router,
    private _searchService: SearchService,
    private _spinnyService: SpinnyService,
    private _cropDataService:ContactDataService
  ) {
    
  }

  ngOnInit() {
    this.userDisplayName = StorageUtil.getUser() ? StorageUtil.getUser()['name'] : '';
  }

  ngOnDestroy() {
  }

  logout() {
    StorageUtil.clearAll();
    this._router.navigateByUrl("/login");

  }
}
