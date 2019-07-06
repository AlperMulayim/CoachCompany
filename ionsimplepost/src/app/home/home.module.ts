import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route, Routes } from '@angular/router';

import { HomePage } from './home.page';



const routes: Routes = [
  {
    path:"tabs",
    component:HomePage,
    children:[
      {
        path:"post-home",
        children:[
          {
            path:'',
            loadChildren:'../post-home/post-home.module#PostHomePageModule'
          }
        ]
      },
      {
        path:'new-post',
        children:[
          {
            path:'',
            loadChildren:'../new-post/new-post.module#NewPostPageModule'
          }
        ]
      },
      {
        path:'news',
        children:[
          {
            path:'',
            loadChildren:'../news/news.module#NewsPageModule'
          }
        ]
      }
    ]
  },
  {
    path:'',
    redirectTo:'/home/tabs/post-home',
    pathMatch:'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
