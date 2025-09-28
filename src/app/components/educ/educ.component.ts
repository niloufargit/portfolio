import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationSection } from '../../../interfaces/education.interface';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.scss']
})
export class EducComponent {
  public education: InputSignal<EducationSection> = input.required<EducationSection>();
}
