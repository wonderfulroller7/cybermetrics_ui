import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvedataComponent } from './cvedata.component';

describe('CvedataComponent', () => {
  let component: CvedataComponent;
  let fixture: ComponentFixture<CvedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
