import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoferanceComponent } from './update-coferance.component';

describe('UpdateCoferanceComponent', () => {
  let component: UpdateCoferanceComponent;
  let fixture: ComponentFixture<UpdateCoferanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoferanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
