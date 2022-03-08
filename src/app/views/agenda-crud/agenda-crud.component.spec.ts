import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCrudComponent } from './agenda-crud.component';

describe('AgendaCrudComponent', () => {
  let component: AgendaCrudComponent;
  let fixture: ComponentFixture<AgendaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
