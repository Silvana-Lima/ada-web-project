// MultiStepForm.js
import { useForm, FormProvider } from 'react-hook-form'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { useState } from 'react'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)
  const methods = useForm()

  const handleNext = () => setStep((prev) => prev + 1)
  const handleBack = () => setStep((prev) => prev - 1)

  return (
    <FormProvider {...methods}>
      {step === 1 && <Step1 handleNext={handleNext} register={methods.register} />}
      {step === 2 && (
        <Step2
          handleNext={handleNext}
          handleBack={handleBack}
          handleCareerChange={methods.setValue.bind(null, 'career')}
          handleCourseChange={methods.setValue.bind(null, 'course')}
          handleDisabilityChange={methods.setValue.bind(null, 'disability')}
          selectedCareer={methods.watch('career')}
          selectedCourse={methods.watch('course')}
          hasDisability={methods.watch('disability')}
          register={methods.register}
        />
      )}
      {step === 3 && <Step3 handleNext={handleNext} handleBack={handleBack} register={methods.register} />}
    </FormProvider>
  )
}

export default MultiStepForm
