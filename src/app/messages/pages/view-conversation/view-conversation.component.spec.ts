import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConversationComponent } from './view-conversation.component';

describe('ViewConversationComponent', () => {
  let component: ViewConversationComponent;
  let fixture: ComponentFixture<ViewConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewConversationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
