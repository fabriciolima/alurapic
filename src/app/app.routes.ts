import { RouterModule } from '@angular/router';

import { ListagemComponent } from './components/pages/listagem/listagem.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

export const routerModuleConfigurado = RouterModule.forRoot([
  {
    path: '',
    component: ListagemComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
      path: 'cadastro/:idFoto',
      component: CadastroComponent
  }
]);