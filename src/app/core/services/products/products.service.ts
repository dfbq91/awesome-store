import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * List all products
   * @returns an array of Products.
   */
  getAllProducts() {
    return this.httpClient.get<Product[]>(`${environment.url_api}/products`);
  }

  /**
   * Get an specific product
   * @id id of the product to be found
   * @returns product of type Product
   */
  getProduct(id: string) {
    return this.httpClient.get<Product>(
      `${environment.url_api}/products/${id}`
    );
  }

  /**
   * Create a product
   * @param product product to be created
   * @returns an observable
   */
  createProduct(product: Product) {
    return this.httpClient.post<Product>(
      `${environment.url_api}/products/`,
      product
    );
  }

  /**
   * Update a product
   * @param product product to be updated
   * @param changes Attributtes of the product to be changed
   * @returns an observable
   */
  updateProduct(id: string, changes: Partial<Product>) {
    return this.httpClient.put<Product>(
      `${environment.url_api}/products/${id}`,
      changes
    );
  }

  /**
   * Delete a product
   * @param product product to be deleted
   * @returns an observable
   */
  deleteProduct(id: string) {
    return this.httpClient.delete<Product>(
      `${environment.url_api}/products/${id}`
    );
  }
}
