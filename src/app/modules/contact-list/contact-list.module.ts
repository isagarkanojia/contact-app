import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbDatepickerModule, NgbTimepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { LoggedInGuard } from "../../shared/guards/logged-in.guard";
import { ContactDataService } from "../../service/contact-data.service";
import { ContactListComponent } from "./contact-list.component";
import { ContactAddComponent } from "./contact-add/contact-add.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbDatepickerModule,
        NgbTimepickerModule,
        RouterModule,
        SharedModule,
        NgbModule.forRoot()
    ],
    providers: [LoggedInGuard],
    declarations: [ContactListComponent,ContactAddComponent],
    exports: [ContactListComponent],
})

export class ContactListModule { }