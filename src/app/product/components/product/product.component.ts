import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
  @Input() product: Product; // From parent to child
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter(); // From child to parent

  constructor() {
    console.log('1. Constructor');
  }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  // ngDoCheck() {
  //   console.log('4. ngDoCheck');
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. NgOnChanges');
    console.log('Los cambios', changes);
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  addCart(): void {
    console.log('Added to cart');
    this.addToCartEvent.emit(this.product.id);
  }
}
