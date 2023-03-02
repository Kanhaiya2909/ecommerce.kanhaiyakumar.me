import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablistsComponent } from './tablists.component';

describe('TablistsComponent', () => {
  let component: TablistsComponent;
  let fixture: ComponentFixture<TablistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
