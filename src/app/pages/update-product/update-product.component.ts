import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
    selector: 'app-update-product',
    templateUrl: './update-product.component.html',
    styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent {
    product!: IProduct;

    productForm = this.formBuilder.group({
        title: [''],
        description: [''],
        price: [0],
    });

    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductServiceService,
        private route: ActivatedRoute,
    ) {
        this.route.paramMap.subscribe(
            (param) => {
                const id = Number(param.get('id'));

                this.productService.getProductById(id).subscribe((product) => {
                    this.product = product;

                    this.productForm.patchValue({
                        title: this.product.title,
                        description: this.product.description,
                        price: this.product.price,
                    });
                });
            },
            (err) => console.log(err.message),
        );
    }

    onHandleUpdate() {
        if (this.productForm.valid) {
            const newProduct: IProduct = {
                id: this.product.id,
                title: this.product.title || '',
                description: this.product.description || '',
                price: this.product.price || 0,
            };
            this.productService.updateProduct(newProduct).subscribe((product) => {
                console.log('updated success', product);
            });
        }
    }
}
