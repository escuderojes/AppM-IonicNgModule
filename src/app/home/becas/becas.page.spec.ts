import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BecasPage } from './becas.page';

describe('BecasPage', () => {
  let component: BecasPage;
  let fixture: ComponentFixture<BecasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BecasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
