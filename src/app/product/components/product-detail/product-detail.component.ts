import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id).subscribe((product) => {
      console.log('product', product);
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo producto',
      image: 'assets/images/banner-1.jpg',
      price: 333,
      description: 'A new product',
    };
    this.productService.createProduct(newProduct).subscribe((product) => {
      console.log('created product', product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 3333,
      description: 'Producto editado',
    };
    this.productService
      .updateProduct('222', updateProduct)
      .subscribe((product) => {
        console.log('updated product', product);
      });
  }

  deleteProduct() {
    this.productService.deleteProduct('222').subscribe((product) => {
      console.log('deleted product', product);
    });
  }
}
