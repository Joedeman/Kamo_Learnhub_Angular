import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { Login } from './pages/login/login';

import { LearnhubLayoutComponent } from './layouts/learnhub-layout/learnhub-layout';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { StudentDashboard } from './pages/student-dashboard/student-dashboard';
import { StudentCreateComponent } from './components/Student/student-create.component';
import { StudentListComponent } from './components/Student/student-list.component';
import { Adminlayout } from './layouts/adminlayout/adminlayout';


// If it belongs to LearnHub → it goes under the learnhub children array
export const routes: Routes = [

  // 🌍 Public Portfolio Site
  {
    path: '',
    component: HomeComponent,
    title: 'Tutoring with Kamo - Professional Tutoring Portfolio'
  },

  // 🔐 LearnHub Login (NO layout)
  {
    path: 'login',
    component: Login
  },

  // 🎓 LearnHub System (USES LearnHub Layout)
  {
    path: 'learnhub',
    component: LearnhubLayoutComponent,
    children: [
      {
    path: 'admin',
    component: Adminlayout,
    children: [
      { path: 'dashboard', component: AdminDashboard }
    ]
  },
      {
        path: 'student',
        component: StudentDashboard,
        title: 'Student Dashboard'
      },

      {
        path: 'students/create',
        component: StudentCreateComponent,
        title: 'Create Student'
      },
      {
        path: 'students',
        component: StudentListComponent,
        title: 'Student List'
      }
    ]
  },

  // ❌ Fallback
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
