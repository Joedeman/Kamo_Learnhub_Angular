import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { ReadStudentDTO } from '../../DTO/read-student-dto';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, NgForOf, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: ReadStudentDTO[] = [];
  filteredStudents: ReadStudentDTO[] = [];
  searchTerm: string = '';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalStudents: number = 0;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAll().subscribe({
      next: (data: ReadStudentDTO[]) => {
        console.log('STUDENTS FROM API:', data);
        this.students = data;
        this.totalStudents = data.length;
        this.applyFilters();
      },
      error: (err: any) => console.error('API ERROR:', err)
    });
  }

  applyFilters() {
    // Apply search filter
    if (this.searchTerm.trim()) {
      this.filteredStudents = this.students.filter(student =>
        student.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.student_ID?.toString().includes(this.searchTerm)
      );
    } else {
      this.filteredStudents = [...this.students];
    }
    
    // Reset to first page when filtering
    this.currentPage = 1;
  }

  onSearchChange() {
    this.applyFilters();
  }

  get paginatedStudents(): ReadStudentDTO[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredStudents.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredStudents.length / this.itemsPerPage);
  }

  get showingStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get showingEnd(): number {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.filteredStudents.length ? this.filteredStudents.length : end;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  addStudent() {
    this.router.navigate(['/learnhub/students/create']);
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.delete(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }

  // Count assigned videos (if available in DTO)
  getAssignedVideosCount(student: ReadStudentDTO): number {
    // Assuming you might have a property for this
    // Return a random number for demo or implement based on your DTO
    return Math.floor(Math.random() * 25);
  }
}