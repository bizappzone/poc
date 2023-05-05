import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule],
declarations: [InputComponent, TextareaComponent, SelectComponent, RadioComponent, CheckboxComponent],exports: [InputComponent, TextareaComponent, SelectComponent, RadioComponent, CheckboxComponent],})
export class FormsUiModule {}
