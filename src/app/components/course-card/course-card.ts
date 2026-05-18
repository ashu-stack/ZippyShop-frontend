import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../../courses';
import { COURSES } from '../../../db-data';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnInit {

  @Input()
  course !:Course;

 


  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  onViewCourse(){
    alert("clicked")
  }

  setCardClass(){
    return {
      'course-card': true,
      'beginner': this.course.beginner
    }
  }
}
