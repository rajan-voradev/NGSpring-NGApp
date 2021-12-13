import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDummiesComponent } from './list-dummies.component';

describe('ListDummiesComponent', () => {
  let component: ListDummiesComponent;
  let fixture: ComponentFixture<ListDummiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDummiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDummiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
