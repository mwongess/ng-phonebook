import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  error: string = '';
  message: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.error = data['error'];
      this.message = data['message'];
    });
  }
}
