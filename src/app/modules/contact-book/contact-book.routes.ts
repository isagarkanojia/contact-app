import { Route } from '@angular/router';
import { ContactBookComponent } from './contact-book.component';
import { ContactBookAddComponent } from './contact-book-add/contact-book-add.component';

export const ContactBookRoutes: Route[] = [
    {
        path: 'books',
        component: ContactBookComponent,
        children: [
            { path: 'add', component: ContactBookAddComponent}
        ]
    }
];