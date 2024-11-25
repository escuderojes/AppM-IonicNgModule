import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';  // Importa el guard

const routes: Routes = [
  {
    path: '',
    redirectTo: 'presen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./course/curso/curso.module').then(m => m.CursoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./course/cursos/cursos.module').then(m => m.CursosPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'rutas',
    loadChildren: () => import('./course/rutas/rutas.module').then(m => m.RutasPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'precios',
    loadChildren: () => import('./planes/precios/precios.module').then(m => m.PreciosPageModule)
  },
  {
    path: 'presen',
    loadChildren: () => import('./presentacion/presen/presen.module').then(m => m.PresenPageModule)
  },
  {
    path: 'becas',
    loadChildren: () => import('./home/becas/becas.module').then(m => m.BecasPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'enviado',
    loadChildren: () => import('./home/enviado/enviado.module').then(m => m.EnviadoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'solicitud',
    loadChildren: () => import('./home/solicitud/solicitud.module').then(m => m.SolicitudPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'pagos',
    loadChildren: () => import('./home/pagos/pagos.module').then(m => m.PagosPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./home/perfil/perfil.module').then(m => m.PerfilPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'principal',
    loadChildren: () => import('./home/principal/principal.module').then(m => m.PrincipalPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./home/editar-perfil/editar-perfil.module').then(m => m.EditarPerfilPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error/error.module').then( m => m.ErrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
