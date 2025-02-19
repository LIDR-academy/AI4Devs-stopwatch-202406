import { Component, OnInit, OnDestroy, Renderer2, HostListener } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  hoursTens: number = 0;
  hoursOnes: number = 0;
  minutesTens: number = 0;
  minutesOnes: number = 0;
  secondsTens: number = 0;
  secondsOnes: number = 0;
  millisecondsHundreds: number = 0;
  millisecondsTens: number = 0;
  millisecondsOnes: number = 0;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  isCountingDown = false;
  isPaused = false;
  alertSound = new Audio('/assets/alert-sound.wav');
  private interval: any;
  private totalTime: number = 0;

  constructor(private message: NzMessageService, private renderer: Renderer2) {}

  ngOnInit() {
    this.alertSound.load();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    if (this.isValidInputKey(key)) {
      const number = parseInt(key, 10);
      if (!isNaN(number)) {
        this.appendDigit(number);
      }
    }
  }

  isValidInputKey(key: string): boolean {
    // Allow numeric keys 0-9 for input
    return /^[0-9]$/.test(key);
  }

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

  increment(unit: keyof CountdownComponent) {
    this[unit]++;
    if ((this[unit] as number) > 9) {
      (this[unit] as number) = 0;
    }
  }

  decrement(unit: keyof CountdownComponent) {
    this[unit]--;
    if ((this[unit] as number) < 0) {
      (this[unit] as number) = 9;
    }
  }

  appendDigit(number: number) {
    const digits = [
      this.secondsOnes, this.secondsTens,
      this.minutesOnes, this.minutesTens,
      this.hoursOnes, this.hoursTens,
    ];

    if (digits.every(digit => digit !== 0)) {
      this.message.error('No more digits are allowed; clear the countdown before inserting a new value or use the manual controls');
      return;
    }

    for (let i = digits.length - 1; i > 0; i--) {
      digits[i] = digits[i - 1];
    }
    digits[0] = number;

    [this.secondsOnes, this.secondsTens,
      this.minutesOnes, this.minutesTens,
      this.hoursOnes, this.hoursTens] = digits;
  }

  setCountdown() {
    if (this.isCountingDown) {
      this.pauseCountdown();
    } else if (this.isPaused) {
      this.startCountdown();
    } else {
      this.totalTime = this.calculateTotalTime();
      if (this.totalTime > 0) {
        this.isCountingDown = true;
        this.startCountdown();
      }
    }
  }

  startCountdown() {
    this.isPaused = false;
    clearInterval(this.interval);
    this.interval = setInterval(async () => {
      this.totalTime -= 10;
      if (this.totalTime <= 0) {
        clearInterval(this.interval);
        this.message.success('Countdown finished!');
        this.isCountingDown = false;
        this.startBlinking();
        this.alertSound.play();
        this.clearCountdown()
      } else {
        this.updateTime();
        this.isCountingDown = true;
      }
    }, 10);
  }

  startBlinking() {
    const clockElement = document.querySelector('.clock');
    if (clockElement) {
      this.renderer.addClass(clockElement, 'blinking');
    }
  }

  stopBlinking() {
    const clockElement = document.querySelector('.clock');
    if (clockElement) {
      this.renderer.removeClass(clockElement, 'blinking');
    }
  }

  pauseCountdown() {
    clearInterval(this.interval);
    this.isPaused = true;
    this.isCountingDown = false;
  }

  clearCountdown() {
    clearInterval(this.interval);
    this.hoursTens = 0;
    this.hoursOnes = 0;
    this.minutesTens = 0;
    this.minutesOnes = 0;
    this.secondsTens = 0;
    this.secondsOnes = 0;
    this.millisecondsHundreds = 0;
    this.millisecondsTens = 0;
    this.millisecondsOnes = 0;
    this.isCountingDown = false;
    this.isPaused = false;
    this.alertSound.currentTime = 0;
  }

  private calculateTotalTime(): number {
    return (
      (this.hoursTens * 10 + this.hoursOnes) * 3600000 +
      (this.minutesTens * 10 + this.minutesOnes) * 60000 +
      (this.secondsTens * 10 + this.secondsOnes) * 1000 +
      (this.millisecondsHundreds * 100 +
        this.millisecondsTens * 10 +
        this.millisecondsOnes)
    );
  }

  private updateTime() {
    const time = new Date(this.totalTime);
    this.hoursTens = Math.floor(time.getUTCHours() / 10);
    this.hoursOnes = time.getUTCHours() % 10;
    this.minutesTens = Math.floor(time.getUTCMinutes() / 10);
    this.minutesOnes = time.getUTCMinutes() % 10;
    this.secondsTens = Math.floor(time.getUTCSeconds() / 10);
    this.secondsOnes = time.getUTCSeconds() % 10;
    const milliseconds = time.getUTCMilliseconds();
    this.millisecondsHundreds = Math.floor(milliseconds / 100);
    this.millisecondsTens = Math.floor((milliseconds % 100) / 10);
    this.millisecondsOnes = milliseconds % 10;
  }

  onStopClick() {
    this.clearCountdown();
    this.stopBlinking();
  }
}
