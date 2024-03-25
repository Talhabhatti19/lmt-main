import React from 'react'
import { useParams } from 'react-router-dom'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';
import StepEight from './StepEight';
import StepNine from './StepNine';
import StepTen from './StepTen';

const MultiStep = () => {
  const { step } = useParams()
  switch (step) {
    case '1':
      return <StepOne />;
    case '2':
      return <StepTwo />;
    case '3':
      return <StepThree />;
    case '4':
      return <StepFour />;
      case '5':
      return <StepFive />;
      case '6':
      return <StepSix />;
      case '7':
      return <StepSeven />;
      case '8':
      return <StepEight />;
      case '9':
      return <StepNine />;
      case '10':
      return <StepTen />;
    default:
      return <div>no step</div>
  }
}

export default MultiStep
