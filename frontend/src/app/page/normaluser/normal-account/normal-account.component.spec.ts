import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalAccountComponent } from './normal-account.component';

describe('NormalAccountComponent', () => {
  let component: NormalAccountComponent;
  let fixture: ComponentFixture<NormalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
