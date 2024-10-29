import { createContext, useContext, useState } from 'react'

const MultiStepFormContext = createContext()

export const useMultiStepFormContext = () => useContext(MultiStepFormContext)

export const MultiStepFormProvider = ({ children }) => {
  const [formData, setFormData] = useState()

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }))
  }

  return (
    <MultiStepFormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </MultiStepFormContext.Provider>
  )
}
