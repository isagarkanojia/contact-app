import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './pipes/safepipe';



@NgModule({
    imports: [CommonModule, FormsModule, NgbModule],
    declarations: [
      SafePipe
    ],
    exports: [
      SafePipe
    ],
    providers: []
})
export class SharedModule {
}
