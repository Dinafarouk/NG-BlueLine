import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndDescWidgetComponent } from './title-and-desc-widget.component';

describe('TitleAndDescWidgetComponent', () => {
  let component: TitleAndDescWidgetComponent;
  let fixture: ComponentFixture<TitleAndDescWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAndDescWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAndDescWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
