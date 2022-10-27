import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length: Number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  password: string = '';

  onChangeLength(value: any) {
    const parsedValue = parseInt(value.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    console.log(this.useLetters);
  }
  onChangeUseNumbers() {
    console.log(this.useNumbers);

    this.useNumbers = !this.useNumbers;
    console.log(this.useNumbers);
  }
  onChangeUseSymbols() {
    console.log(this.useSymbols);

    this.useSymbols = !this.useSymbols;
    console.log(this.useSymbols);
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '@#$%^&*()';

    let validCharectors = '';
    let new_password = '';

    if (this.useSymbols === true) {
      validCharectors += symbols;
    }
    if (this.useLetters === true) {
      validCharectors += letters;
    }
    if (this.useNumbers) {
      validCharectors += numbers;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharectors.length);
      new_password += validCharectors[index];
    }
    this.password = new_password;
  }
}
