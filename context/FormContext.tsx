import React, { createContext, useContext, useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success';

interface FormContextType {
  status: FormStatus;
  submitForm: (email: string) => Promise<void>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const submitForm = async (email: string) => {
    if (!email) return;
    setStatus('loading');

    // ------------------------------------------------------------------
    // CONFIGURATION: Formspark
    // ------------------------------------------------------------------
    const FORM_ENDPOINT = "https://submit-form.com/pC8SbLr74";

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setStatus('success');
        } else {
            const data = await response.json();
            if (data.errors) {
                 throw new Error(data.errors.map((err: any) => err.message).join(", "));
            }
            throw new Error("Form submission failed");
        }
    } catch (error) {
        console.error(error);
        setStatus('idle');
        alert("There was a problem joining the waitlist. Please try again.");
    }
  };

  return (
    <FormContext.Provider value={{ status, submitForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};