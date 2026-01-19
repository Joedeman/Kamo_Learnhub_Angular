export interface Student{

    student_ID: number; 
    fullname: string;
    email: string; 
    curriculum: string;
    is_active: boolean; 
}

export interface CreateStudent{
  student_ID: number;   // this is User_ID
  grade: string;
  curriculum: string;
  isActive: boolean;

} 

