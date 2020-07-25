import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokerAdminComponent } from './poker-admin/poker-admin.component';

const routes: Routes = [
  { path: 'poker/captain', component: PokerAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
