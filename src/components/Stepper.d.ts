import { ReactNode } from "react";

interface StepperProps {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: Record<string, unknown>;
  nextButtonProps?: Record<string, unknown>;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: (props: {
    step: number;
    currentStep: number;
    onStepClick: (step: number) => void;
  }) => ReactNode;
  [key: string]: unknown;
}

interface StepProps {
  children: ReactNode;
}

export function Step(props: StepProps): JSX.Element;
export default function Stepper(props: StepperProps): JSX.Element;
