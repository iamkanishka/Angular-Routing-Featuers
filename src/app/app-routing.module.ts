import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthguardGuard } from './Services/guards/authguard.guard';
import { DeactivateauthguardGuard } from './Services/guards/deactivateauthguard.guard';

import { UserresolversResolver } from './Services/resolvers/userresolvers.resolver';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReavtiveFormsComponent } from './reavtive-forms/reavtive-forms.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { PostsComponent } from './posts/posts.component';




const routes: Routes = [
  //Sending Static Data in teh Route
  { path: '', component: HomeComponent ,data:{page:1,search:'kanishka'} },
  { path: 'category', component: CategoriesComponent },

  // { path: 'users', component: UsersComponent },
  // { path: 'user/:id/:name', component: UserComponent },
  
//Making Above Routes to Nested Routes 
  { path: 'users', component: UsersComponent,
 //Note: - canActivate:[AuthguardGuard] will guard Parent-Chilren Components 
  //canActivate:[AuthguardGuard],
  
  //Note: - canActivateChild:[AuthguardGuard] will guard Parent's Chilrens Components 
  canActivateChild:[AuthguardGuard], 
  children:[
    { path: 'user/:id/:name', component: UserComponent },
    
    //Note: - canDeactivate Works when theres a redirection from compoemnent A to  componenet B,
    // canDeactivate gets triggered in the Component A when thers a redirection 

    //Note: Using resolver is used to send the data to the components to before loading the respective componenet
  { path: 'user/:id/:name/edit', component: EditUserComponent,canDeactivate: [DeactivateauthguardGuard] ,
resolve:{user:UserresolversResolver}
}
  
  ] },

  { path: 'forms', component: TemplateDrivenFormComponent },
  { path: 'reactiveforms', component: ReavtiveFormsComponent },
  { path: 'filterpipes', component: FilterPipesComponent },
  { path: 'httpposts', component: PostsComponent },





  // Note:- Please Add not-found Component Route in the End of the Route, if you add it in the first it will redirect not found since it 
  // it has been added in the first all down below are considered unidentified routes
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo:'not-found' },






];

// The BolilerPlate Code for the Routing Module has been generated by the Angular, So we need to Define all the Roues Here
@NgModule({
// Intinitiating Routes module with normal mode where routes are handles by server
  imports: [RouterModule.forRoot(routes)],
 //Note:- Intinitiating Routes module with hash mode where routes are handled by server upto the hash symbol in the route, then later part of the route are handeld by angular
 //Note:- Routes with hash not recomended
 // imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
