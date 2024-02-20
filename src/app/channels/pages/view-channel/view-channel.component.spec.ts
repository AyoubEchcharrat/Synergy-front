import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChannelComponent } from './view-channel.component';

describe('ViewChannelComponent', () => {
  let component: ViewChannelComponent;
  let fixture: ComponentFixture<ViewChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
