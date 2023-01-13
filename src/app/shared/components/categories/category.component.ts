import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryType } from '@app/model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() categoryData: CategoryType = {
    title: '',
    growthRate: '',
    growthAmount: '',
  };
}
