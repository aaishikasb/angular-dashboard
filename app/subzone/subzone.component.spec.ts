import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubzoneComponent } from './subzone.component';

describe('SubzoneComponent', () => {
  let component: SubzoneComponent;
  let fixture: ComponentFixture<SubzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
