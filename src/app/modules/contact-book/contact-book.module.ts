import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbDatepickerModule, NgbTimepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ContactBookComponent } from "./contact-book.component";
import { ContactBookItemComponent } from "./contact-book-item/contact-book-item.component";
import { ContactBookAddComponent } from "./contact-book-add/contact-book-add.component";
import { SharedModule } from "../../shared/shared.module";
import { LoggedInGuard } from "../../shared/guards/logged-in.guard";
import { ContactDataService } from "../../service/contact-data.service";

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
    declarations: [ContactBookComponent, ContactBookItemComponent, ContactBookAddComponent],
    exports: [ContactBookComponent],
})

export class ContactBookModule { }