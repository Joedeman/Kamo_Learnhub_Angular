import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

  constructor(
    private userService: UserService,
    private studentService: StudentService
  ) {}

  submit(): void {
    // 1️⃣ Create user first
    this.userService.createUser(this.userDTO).subscribe({
      next: (createdUser: any) => {
        console.log('User created:', createdUser);

        // 2️⃣ Use the returned user info to create a student
        this.studentDTO.user_ID = createdUser.id || createdUser.user_ID; // adjust if your API returns 'id' or 'user_ID'

        this.studentService.create(this.studentDTO).subscribe({
          next: () => {
            alert('Student successfully registered!');
            // Reset form if needed
            this.resetForm();
          },
          error: (err) => console.error('Error creating student:', err)
        });
      },
      error: (err) => console.error('Error creating user:', err)
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
