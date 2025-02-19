import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  hours = '00';
  minutes = '00';
  seconds = '00';
  milliseconds = '000';
  lapses: string[] = [];
  isRunning = false;
  private interval: any;
  private startTime = 0;
  private elapsedTime = 0;

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

  toggleStartPause() {
    if (this.isRunning) {
      this.pause();
    } else {
      this.start();
    }
  }

  start() {
    this.isRunning = true;
    this.startTime = Date.now() - this.elapsedTime;
    this.interval = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.updateTime();
    }, 10);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  stop() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.elapsedTime = 0;
    this.updateTime();
    this.lapses = [];
  }

  lapse() {
    const currentTime = `${this.hours}:${this.minutes}:${this.seconds}.${this.milliseconds}`;
    this.lapses.unshift(currentTime);
  }

  private updateTime() {
    const time = new Date(this.elapsedTime);
    this.hours = this.pad(time.getUTCHours());
    this.minutes = this.pad(time.getUTCMinutes());
    this.seconds = this.pad(time.getUTCSeconds());
    this.milliseconds = this.pad(time.getUTCMilliseconds(), 3);
  }

  private pad(num: number, size = 2): string {
    let s = '000' + num;
    return s.substr(s.length - size);
  }
}
