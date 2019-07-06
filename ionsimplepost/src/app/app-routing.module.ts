import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'post-home', loadChildren: './post-home/post-home.module#PostHomePageModule' },
  { path: 'new-post', loadChildren: './new-post/new-post.module#NewPostPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
