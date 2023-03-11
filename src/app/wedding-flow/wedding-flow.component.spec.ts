import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingFlowComponent } from './wedding-flow.component';

describe('WeddingFlowComponent', () => {
  let component: WeddingFlowComponent;
  let fixture: ComponentFixture<WeddingFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
