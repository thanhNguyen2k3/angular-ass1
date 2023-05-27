import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // products: IProduct[] = [
    //     { id: 1, name: 'Sản phẩm A', price: 1000, img: 'https://picsum.photos/200/200' },
    //     { id: 2, name: 'Sản phẩm B', price: 2000, img: 'https://picsum.photos/200/200' },
    // ];
    // onHandleRemove(id: number) {
    //     this.products = this.products.filter((item) => item.id !== id);
    // }
}
