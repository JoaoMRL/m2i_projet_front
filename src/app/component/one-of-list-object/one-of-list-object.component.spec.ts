import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOfListObjectComponent } from './one-of-list-object.component';

describe('OneOfListObjectComponent', () => {
  let component: OneOfListObjectComponent;
  let fixture: ComponentFixture<OneOfListObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneOfListObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneOfListObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
