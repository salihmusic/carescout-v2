import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareScouterProfileComponent } from './components/care-scouter-profile/care-scouter-profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { CareScouterResolver } from './resolvers/carescouter.resolver';

const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'care-scouter-profile',
    component: CareScouterProfileComponent,
    resolve: {
      details: CareScouterResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
