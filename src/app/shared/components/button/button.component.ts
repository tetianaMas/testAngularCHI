import { Component, Input } from '@angular/core';

const BTN_TEXT_DEFAULT = 'invest';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public buttonText: string = BTN_TEXT_DEFAULT;
}
