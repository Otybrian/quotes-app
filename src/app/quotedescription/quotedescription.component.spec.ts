import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedescriptionComponent } from './quotedescription.component';

describe('QuotedescriptionComponent', () => {
  let component: QuotedescriptionComponent;
  let fixture: ComponentFixture<QuotedescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotedescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
