import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-item-component/input-add-item-component';

@Component({
  selector: 'app-list-component',
  imports: [InputAddItemComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {
  public addItem = signal(true);
}
