import { loadRemoteModule } from "@angular-architects/module-federation";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      type: 'module',
      exposedModule: './Module'
    })
    .then(m => m.LoginModule)
  },
{
  path:"home",
  loadChildren:() => loadRemoteModule({
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      type:'module',
      exposedModule: './Module'
  
})     
.then(m => m.HomeModule) 
},
{
  path:"product",
  loadChildren:() => loadRemoteModule({
      remoteEntry: 'http://localhost:8080/remoteEntry.js',
      type:'module',
      exposedModule: './Module'
  
})     
.then(m => m.ProductModule) 
},
{
  path:"cart",
  loadChildren:() => loadRemoteModule({
      remoteEntry: 'http://localhost:8000/remoteEntry.js',
      type:'module',
      exposedModule: './Module'
  
})     
.then(m => m.CartModule) 
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
