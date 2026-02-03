import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, input, Output, ViewChild } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-item-component',
  imports: [],
  templateUrl: './input-add-item-component.html',
  styleUrl: './input-add-item-component.scss',
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild('inputChild') public inputText!: ElementRef;

  @Output() public outputListItems = new EventEmitter<IListItems>()

  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = "";

      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const id = `ID_$(timestamp)`;

      this.outputListItems.emit({
        id,
        checked: false,
        value
      })

      return this.inputText.nativeElement.focus();
    }
  }
}
