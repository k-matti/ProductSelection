import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Product } from "../models/product";

@Component({
  selector: "app-products",
  templateUrl: "products.component.html",
  styleUrls: ["products.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ProductsComponent),
    },
  ],
})
export class ProductsComponent implements ControlValueAccessor {
  @Input()
  products!: Product[];

  selectedProduct: Product | undefined;

  isExpanded: boolean = true;
  onChange: any = () => {};

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
    this.onChange(product);
  }

  writeValue(obj: any): void {
    this.selectedProduct = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onExpand(event: boolean): void {
    this.isExpanded = event;
  }
}
