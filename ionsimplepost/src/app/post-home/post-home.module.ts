
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostHomePage } from './post-home.page';

const routes: Routes = [
  {
    path: '',
    component: PostHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
    RouterModule.forChild(routes)
  ],
  declarations: [PostHomePage],
  providers:[]
})
export class PostHomePageModule {}
