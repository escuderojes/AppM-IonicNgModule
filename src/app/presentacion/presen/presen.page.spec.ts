import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresenPage } from './presen.page';

describe('PresenPage', () => {
  let component: PresenPage;
  let fixture: ComponentFixture<PresenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
