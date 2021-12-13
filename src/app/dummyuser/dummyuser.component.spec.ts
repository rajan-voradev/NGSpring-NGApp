import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyuserComponent } from './dummyuser.component';

describe('DummyuserComponent', () => {
  let component: DummyuserComponent;
  let fixture: ComponentFixture<DummyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
