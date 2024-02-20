import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMessageComponent } from './view-message.component';

describe('ViewMessageComponent', () => {
  let component: ViewMessageComponent;
  let fixture: ComponentFixture<ViewMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
