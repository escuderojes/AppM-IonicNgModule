import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnviadoPage } from './enviado.page';

describe('EnviadoPage', () => {
  let component: EnviadoPage;
  let fixture: ComponentFixture<EnviadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
