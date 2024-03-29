import { Component, ViewChild, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { StepOneComponent } from './step-one.component';
import { StepTwoComponent } from './step-two.component';
import { StepThreeComponent } from './step-three.component';

@Component({
  selector: 'create-profile-component',
  templateUrl: './create-profile.component.html'
})

export class CreateProfileComponent {

  @ViewChild('StepOneComponent') stepOneComponent: StepOneComponent;
  @ViewChild('StepTwoComponent') stepTwoComponent: StepTwoComponent;
  @ViewChild('StepTwoComponent') stepThreeComponent: StepThreeComponent;

  get frmStepOne() {
    return this.stepOneComponent.frmStepOne;
  }

  get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo : null;
  }

  get frmStepThree() {
    return this.stepThreeComponent ? this.stepThreeComponent.frmStepThree : null;
  }

  constructor(private fb: FormBuilder) { }


}
