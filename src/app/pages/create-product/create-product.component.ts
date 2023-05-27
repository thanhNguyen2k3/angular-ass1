import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { FormBuilder, Validator } from '@angular/forms';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
    constructor(private formBuilder: FormBuilder, private productService: ProductServiceService) {}

    product: IProduct = {
        title: '',
        description: '',
        price: 0,
    };

    productForm = this.formBuilder.group({
        title: [''],
        description: [''],
        price: [0],
    });

    onHandleSubmit() {
        if (this.productForm.valid) {
            const product: IProduct = {
                title: this.productForm.value.title || '',
                description: this.productForm.value.description || '',
                price: this.productForm.value.price || 0,
            };

            this.productService.addProduct(product).subscribe((product) => {
                console.log('Create success', product);
            });
        }

        console.log(this.productForm.value);
    }
}
