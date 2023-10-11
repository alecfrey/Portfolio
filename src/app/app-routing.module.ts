import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { EmploymentComponent } from './employment/employment.component';
import { ReflectionsComponent } from './reflections/reflections.component';
import { SeniordesignComponent } from './seniordesign/seniordesign.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'reflections', component: ReflectionsComponent },
  { path: 'senior-design', component: SeniordesignComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
