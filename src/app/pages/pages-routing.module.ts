import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { IaChatComponent } from './ia-chat/ia-chat.component';
import { RecursosComponent } from './recursos/recursos.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'projetos', component: ProjetosComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'ia-chat', component: IaChatComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: '**', redirectTo: 'projetos' },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
