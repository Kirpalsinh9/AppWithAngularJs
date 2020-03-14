import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AboutComponent } from './components/about/about.component'

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'AddPost', component: AddPostComponent },
  { path: 'About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
