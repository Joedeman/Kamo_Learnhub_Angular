// src/app/components/Student/student-edit.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ReadStudentDTO } from '../../DTO/read-student-dto';
import { UpdateStudentDTO } from '../../DTO/update-student-dto';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-edit.component.html'
})
export class StudentEditComponent implements OnInit {
  @Input() studentId!: number;
  dto: UpdateStudentDTO = { grade: '', curriculum: '', isActive: true };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getById(this.studentId).subscribe({
      next: (data: ReadStudentDTO) => {
        this.dto.grade = data.grade;
        this.dto.curriculum = data.curriculum;
        this.dto.isActive = data.isActive;
      },
      error: (err: any) => console.error(err)
    });
  }

  updateStudent(): void {
    this.studentService.update(this.studentId, this.dto).subscribe({
      next: () => alert('Student updated successfully'),
      error: (err: any) => console.error(err)
    });
  }
}
