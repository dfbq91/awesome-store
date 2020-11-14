import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  names = ['Dany', 'Mike', 'Luis'];

  addItem(): void {
    this.names.push('nuevo item');
  }

  deleteItem(index: number): void {
    this.names.splice(index, 1);
  }

}
