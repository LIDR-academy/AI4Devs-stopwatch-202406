// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Method to toggle fullscreen mode
  async toggleFullScreen(): Promise<void> {
    try {
      const elem = document.documentElement;
      if (elem && elem.requestFullscreen) {
        await elem.requestFullscreen();
      }
    } catch (error) {
      console.error('Error requesting fullscreen:', error);
    }
  }

}
