import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/ApiService/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-crud';
  studentForm: FormGroup;
  searchText: string = ''; // Declare the searchText property
  mode:string = "default";
  students: any[] = [];
  newStudent: any = {};
  selectedStudent: any = {};
  Singlestudent: any;
  formEdit:boolean= false;
  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      major: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.students = this.apiService.getStudents();
  }

  
  setMode(mode:any){
    this.mode = mode;
  }
  cancle(){
    this.formEdit =false;
    this.mode = 'default';
  }
  
  
  addStudent(updateObj?:any): void {

    console.log(updateObj)
    this.mode = 'add'
    this.apiService.addStudent(updateObj);
    this.apiService.getStudents();

  }


  viewStudent(student: any) {
    this.mode = 'view'
    // Implement your logic to show the detailed view of the student
    console.log('Viewing student:', student);
    this.Singlestudent = student;
    // You could open a modal or navigate to a separate view to display more details
  }

  editStudent(student: any): void {
    this.mode = 'add';
    this.formEdit = true;
    this.studentForm.patchValue(student);
  }

  updateStudent(updateObj:any): void {
    console.log(updateObj)
    this.students = this.apiService.updateStudent(updateObj);
    console.log("updated student", this.students)
    this.apiService.getStudents();
    this.mode = 'default'
  }

  deleteStudent(studentId: number): void {
    this.apiService.deleteStudent(studentId);
    this.apiService.getStudents();
  }

}
