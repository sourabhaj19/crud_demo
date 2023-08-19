import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor() { }

students = [
  {
    id: 1,
    name: 'John Doe',
    age: 20,
    major: 'Computer Science'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 21,
    major: 'Biology'
  },
  {
    id: 3,
    name: 'Jane',
    age: 21,
    major: 'SoftWare Testing'
  },
  {
    id: 2,
    name: 'Smith',
    age: 21,
    major: 'Micro Biology'
  },
  {
    id: 2,
    name: 'Doe',
    age: 21,
    major: 'Electrical'
  },
];


getStudents(): any[] {
  return this.students;
}

addStudent(student: any): void {
  student.id = this.students.length+1;
  console.log(student , "in service")
  this.students.push(student);
}

updateStudent(updatedStudent: any) {
  console.log(updatedStudent)
  console.log( updatedStudent.id)
  const index = this.students.findIndex(s => s.id === updatedStudent.id);
  if (index !== -1) {
    console.log(this.students[index].id)
    this.students[index] = updatedStudent;
    console.log(this.students)
  }
  return this.students;
}

deleteStudent(studentId: number): void {

  const index = this.students.findIndex(s => s.id === studentId);
  console.log(index)
  if (index !== -1) {
    this.students.splice(index, 1);
    
  }

}


}
