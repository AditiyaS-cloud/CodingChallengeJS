import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'App';
  stack: any = [];
  rainbowColors: any = [];
  ngOnInit() {
    this.stack = [];
    for (let i = 0; i < 7; i++) {
      this.stack.push(i);
    }
    this.rainbowColors = [
      { key: 0, color: 'red' },
      { key: 1, color: 'orange' },
      { key: 2, color: 'yellow' },
      { key: 3, color: 'green' },
      { key: 4, color: 'blue' },
      { key: 5, color: 'indigo' },
      { key: 6, color: 'violet' },
    ];
  }

  changeColor(index: number): void {
    let popped: number;
    let currentBgColor = document.getElementById(`circle${index}`)?.style
      .backgroundColor;
    if (currentBgColor == '' || currentBgColor == 'white') {
      popped = this.stack.shift();
      console.log('after sliced used color-->', this.stack);
      this.rainbowColors?.forEach((i: any) => {
        if (i.key == popped) {
          let ele = document.getElementById(`circle${index}`);
          if (!!ele) {
            ele.style.backgroundColor = i.color;
          }
        }
      });
    } else if (currentBgColor != 'white') {
      this.rainbowColors?.filter((item: any) => {
        if (item.color == currentBgColor) {
          this.stack.push(item.key);
        }
      });
      let ele = document.getElementById(`circle${index}`);
      if (!!ele) {
        ele.style.backgroundColor = 'white';
      }

      this.stack.sort((a: number, b: number) => a - b);
    }
  }
}
