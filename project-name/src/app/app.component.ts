import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule,HomeComponent,CommonModule,ReversePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Tutorial';
  subtitle = 'Angular for beginners'
  todaydate=new Date();
  salary=1000233444;
  _obj={"name":"NT"}

  isdisabled=false;

  changetitle(){
    this.title="Angular 18 full Tutorial"
  }

  updatetitle(event:any){
    this.title=event.target.value;
  }
}
