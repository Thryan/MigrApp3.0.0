import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrarComponent } from './migrar.component';

describe('MigrarComponent', () => {
  let component: MigrarComponent;
  let fixture: ComponentFixture<MigrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
