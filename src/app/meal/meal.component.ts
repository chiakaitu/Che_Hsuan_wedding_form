import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from "@angular/fire/compat/firestore";

interface SubmitForm {
  name: string,
  mainCource: string
};

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  // item$: Observable<SubmitForm[]>;
  formData = this.store.collection('data').valueChanges() as Observable<SubmitForm[]>;

  constructor(private store: AngularFirestore) {}
  public name = '123123'; // 名字
  public seafood = ''; // 關於海鮮
  public mainCource = ''; // 主餐

  public resetMainCource() {
    this.mainCource = '';
  }

  public submitForm() {
    // 檢查姓名有沒有填寫
    if (this.name == '') {
      alert('請輸入姓名！');
      return;
    }

    // 定義要送出的物件
    let req = {
      name: this.name,
      mainCource: this.mainCource
    };

    this.store.firestore.runTransaction(() => {
      return this.store.collection('data').add(req);
    });
    alert('感謝你的填寫！');
  }
}
