import { Route } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ContactBookRoutes } from './contact-book/contact-book.routes';
import { ContactListRoutes } from './contact-list/contact-list.routes';
export const ModulesRoutes: Route[] = [
    {
        path: 'app',
        component: ModulesComponent,
        children: [
            ...ContactBookRoutes,
            ...ContactListRoutes
        ]
    }
];
