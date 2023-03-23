import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Timestamp } from 'firebase/firestore';

interface SubmitForm {
  name: string,
  mainCourse: string,
  timestamp: Timestamp
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
  public name = ''; // 名字
  public seafood = ''; // 關於海鮮
  public mainCourse = ''; // 主餐

  public resetMainCourse() {
    this.mainCourse = '';
  }

  public submitForm() {
    // 檢查姓名有沒有填寫
    if (this.name == '') {
      alert('請輸入姓名！');
      return;
    }

    const showData = this.checkMainCourse(this.mainCourse);
    let mainCourseCheck = confirm('我的選擇是：' + showData.seafoodShow + '\r\n' + '主餐：' + showData.mainCourseShow);

    if (!mainCourseCheck) {
      return;
    }

    // 定義要送出的物件
    let req = {
      name: this.name,
      mainCourse: this.mainCourse,
      timestamp: new Date().toLocaleString()
    };

    this.store.firestore.runTransaction(() => {
      return this.store.collection('data').add(req);
    });
    alert('感謝您的填寫！');
    this.resetInput();
  }

  private resetInput() {
    this.name = '';
    this.seafood = '';
    this.mainCourse = '';
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  private checkMainCourse(userInput: string) {
    const output = {
      seafoodShow: '',
      mainCourseShow: ''
    }

    switch (userInput) {
      case '1':
        output.seafoodShow = '海鮮我都吃';
        output.mainCourseShow = '加拿大野生龍蝦蒸';
        break;
    
      case '2':
        output.seafoodShow = '海鮮我都吃';
        output.mainCourseShow = '香料戰斧豬排';
        break;
    
      case '3':
        output.seafoodShow = '海鮮我都吃';
        output.mainCourseShow = '鍋煎安格斯牛排';
        break;
    
      case '4':
        output.seafoodShow = '我不吃生魚片，但熟魚可以';
        output.mainCourseShow = '加拿大野生龍蝦蒸';
        break;
    
      case '5':
        output.seafoodShow = '我不吃生魚片，但熟魚可以';
        output.mainCourseShow = '香料戰斧豬排';
        break;
    
      case '6':
        output.seafoodShow = '我不吃生魚片，但熟魚可以';
        output.mainCourseShow = '鍋煎安格斯牛排';
        break;
    
      case '7':
        output.seafoodShow = '我完全不吃海鮮';
        output.mainCourseShow = '安格斯炙燒牛排';
        break;
  
      case '8':
        output.seafoodShow = '我完全不吃海鮮';
        output.mainCourseShow = '紅麴味增松阪豬';
        break;

      default:
        break;
    }

    return output;
  }
}
