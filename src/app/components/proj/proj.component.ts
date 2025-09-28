import { Component, input, InputSignal } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-proj',
  standalone: true,
  imports: [],
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.scss']
})
export class ProjComponent {
  public projectData: InputSignal<Project> = input.required<Project>();
}
