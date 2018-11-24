import { Route } from '@angular/router';
import { ContactListComponent } from './contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';


export const ContactListRoutes: Route[] = [
    {
        path: 'books/:id/contacts',
        component: ContactListComponent,
        children: [
            { path: 'add', component: ContactAddComponent}
        ]

        
    }
];