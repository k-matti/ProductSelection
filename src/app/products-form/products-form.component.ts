import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Product } from "../models/product";

@Component({
  selector: "app-products-form",
  templateUrl: "products-form.component.html",
  styleUrls: ["products-form.component.scss"],
})
export class ProductsFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  destroyed$ = new ReplaySubject(1);

  products: Product[] = [
    {
      id: 1,
      name: "Produkt 1",
      description: "Produkt 1 - najlepszy",
    },
    {
      id: 2,
      name: "Produkt 2",
      description: "Produkt 2 - najlepszy",
    },
    {
      id: 3,
      name: "Produkt 3",
      description: "Produkt 3 - najlepszy",
    },
    {
      id: 4,
      name: "Produkt 4",
      description: "Produkt 4 - najlepszy",
    },
    {
      id: 5,
      name: "Produkt 5",
      description: "Produkt 5 - najlepszy",
    },
    {
      id: 6,
      name: "Produkt 6",
      description: "Produkt 6 - najlepszy",
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      product: '',
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((x) => console.log(x.product));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
