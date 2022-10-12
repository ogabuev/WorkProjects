import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBlockComponent } from './name-block.component';

describe('NameBlockComponent', () => {
  let component: NameBlockComponent;
  let fixture: ComponentFixture<NameBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
