import { Routes } from '@angular/router';

import { APP_ROUTES } from './shared/constants/routes';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
  {
    path: APP_ROUTES.MAIN_PAGE,
    component: MainPageComponent,
  },
];
