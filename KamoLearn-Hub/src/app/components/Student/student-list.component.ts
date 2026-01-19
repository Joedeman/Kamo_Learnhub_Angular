import { Component, OnInit } from '@angular/core';
import { CommonModule,NgForOf } from '@angular/common';
import { StudentService } from '../../services/student.service';
import {ReadStudentDTO} from '../../DTO/read-student-dto';



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, NgForOf], // Add any other modules you use in template
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: ReadStudentDTO[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

 loadStudents() {
  this.studentService.getAll().subscribe({
    next: (data: ReadStudentDTO[]) => {
      console.log('STUDENTS FROM API:', data);
      this.students = data;
    },
    error: (err: any) => console.error('API ERROR:', err)
  });
}

  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
