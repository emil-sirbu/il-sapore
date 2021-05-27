import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMenuComponent } from './api-menu.component';

describe('ApiMenuComponent', () => {
  let component: ApiMenuComponent;
  let fixture: ComponentFixture<ApiMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
