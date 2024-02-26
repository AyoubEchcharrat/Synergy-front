import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css',
})
export class AddMessageComponent {
  content: FormControl = new FormControl('');
}
