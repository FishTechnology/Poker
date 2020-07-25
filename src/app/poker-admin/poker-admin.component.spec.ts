import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerAdminComponent } from './poker-admin.component';

describe('PokerAdminComponent', () => {
  let component: PokerAdminComponent;
  let fixture: ComponentFixture<PokerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
