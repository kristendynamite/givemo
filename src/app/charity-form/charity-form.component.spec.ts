import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityFormComponent } from './charity-form.component';

describe('CharityFormComponent', () => {
  let component: CharityFormComponent;
  let fixture: ComponentFixture<CharityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
