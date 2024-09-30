import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempComponent } from './temp.component';

describe('HomeComponent', () => {
  let component: TempComponent;
  let fixture: ComponentFixture<TempComponent>;

  beforeEach(() => {
    console.log('Before each test setup for temp');

    TestBed.configureTestingModule({
      declarations: [TempComponent]
    });
    fixture = TestBed.createComponent(TempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Running the "should create" test for temp');
    expect(component).toBeTruthy();
  });
});
