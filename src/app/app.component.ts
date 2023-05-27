import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';
import { ProductServiceService } from './services/product-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    products: IProduct[] = [];

    constructor(private productService: ProductServiceService) {
        this.productService.getProducts().subscribe(
            (data) => {
                this.products = data;
            },
            (err) => {
                console.log(err.message);
            },
        );
    }

    onHandleDelete(id: number | undefined) {
        this.productService.deleteProduct(id).subscribe(() => {
            this.products.filter((item) => item.id !== id);
        });
    }
}
