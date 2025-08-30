import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importe suas páginas principais
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// futuramente pode adicionar ProjetosComponent, RelatoriosComponent etc.

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // rota padrão
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'projetos', component: ProjetosComponent },
  // { path: 'relatorios', component: RelatoriosComponent },
  // { path: 'usuarios', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
