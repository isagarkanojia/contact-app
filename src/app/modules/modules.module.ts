import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { LoggedInGuard } from '../shared/guards/logged-in.guard';
import { TopNavModule } from '../shared/topnav/topnav.modules';
import { ExtraFunctionsService } from '../service/extra-functions.service';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ModulesComponent } from './modules.component';
import { ContactBookModule } from './contact-book/contact-book.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { ContactDataService } from '../service/contact-data.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        TopNavModule,
        SharedModule,
        ContactBookModule,
        ContactListModule
    ],
    providers: [ExtraFunctionsService, LoggedInGuard,ContactDataService],
    declarations: [ModulesComponent,SidebarComponent],
    exports: [SidebarComponent],
})

export class ModulesModule { }
