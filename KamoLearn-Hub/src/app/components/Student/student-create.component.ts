import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { StudentService } from '../../services/student.service';
import { CreateUserDTO } from '../../DTO/create-user-dto';
import { CreateStudentDTO } from '../../DTO/create-student-dto';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {

  // User info form
  userDTO: CreateUserDTO = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    password: '',
    userRole_ID: 2 // 2 = student role
  };

  // Student info form
  studentDTO: CreateStudentDTO = {
    user_ID: 0,  // Will set after creating user
    grade: '',
    curriculum: '',
    isActive: true
  };

  isSubmitting: boolean = false;

  constructor(
    private userService: UserService,
    private studentService: StudentService,
    private router: Router,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  submit(): void {
    // Basic validation
    if (!this.userDTO.name || !this.userDTO.surname || !this.userDTO.email || !this.userDTO.password) {
      alert('Please fill in all required user information fields');
      return;
    }

    if (!this.studentDTO.grade || !this.studentDTO.curriculum) {
      alert('Please fill in all required student information fields');
      return;
    }

    this.isSubmitting = true;

    // 1️⃣ Create user first
    this.userService.createUser(this.userDTO).subscribe({
      next: (createdUser: any) => {
        console.log('User created:', createdUser);

        // 2️⃣ Use the returned user info to create a student
        this.studentDTO.user_ID = createdUser.id || createdUser.user_ID; // adjust if your API returns 'id' or 'user_ID'

        this.studentService.create(this.studentDTO).subscribe({
          next: () => {
            alert('Student successfully registered!');
            this.isSubmitting = false;
            // Navigate back to student list
            this.router.navigate(['/learnhub/students']);
          },
          error: (err) => {
            console.error('Error creating student:', err);
            this.isSubmitting = false;
            alert('Failed to create student. Please try again.');
          }
        });
      },
      error: (err) => {
        console.error('Error creating user:', err);
        this.isSubmitting = false;
        alert('Failed to create user. Please try again.');
      }
    });
  }

  resetForm() {
    this.userDTO = {
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      password: '',
      userRole_ID: 2
    };

    this.studentDTO = {
      user_ID: 0,
      grade: '',
      curriculum: '',
      isActive: true
    };
  }
}