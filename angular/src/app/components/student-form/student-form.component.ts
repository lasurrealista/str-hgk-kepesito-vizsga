import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;

  student: Student;
  studentId: string = '';

  constructor(
    private service: StudentHttpService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>{
        this.studentId = params.id
      }
    );
    this.service.getById(this.studentId).subscribe(
      student => {
        this.student = student
      }
    );
  }

  saveStudent(student: Student){
    this.service.update(student, this.student._id).subscribe(
        () => this.router.navigate(['student-list'])
      );
  }
}
function switchMap(arg0: (params: any) => any): any {
  throw new Error('Function not implemented.');
}

