import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplicationForm.css';
import DetailedFooter from '../components/DetailedFooter';
import ApplicationHeader from '../components/ApplicationHeader';
import formData from '../data/formData.json';
import axios from 'axios';

function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormState((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormState((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const convertToApplicationData = (formState) => ({
    personal_information: {
      full_name: formState.fullName || '',
      date_of_birth: formState.dateOfBirth || '',
      gender: formState.gender || '',
      phone_number: formState.phone || '',
      email: formState.email || '',
      residential_address: formState.residentialAddress || '',
      nin: formState.nin || '',
      bvn: formState.bvn || ''
    },
    employment_and_income: {
      employment_status: formState.employmentStatus || '',
      employer_name: formState.employerName || '',
      work_address: formState.workAddress || '',
      employment_start_date: formState.employmentStartDate || '',
      monthly_income: formState.monthlyIncome || ''
    },
    banking_information: {
      salary_account_bank_name: formState.salaryAccountBankName || '',
      bank_account_number: formState.bankAccountNumber || ''
    },
    financial_history: {
      has_existing_loans: formState.existingLoans || '',
      monthly_loan_repayment: formState.monthlyLoanRepayment || '',
      has_loan_defaults: formState.pastLoanDefaults || '',
      owns_credit_cards: formState.ownCreditCards || ''
    },
    lifestyle_information: {
      marital_status: formState.maritalStatus || '',
      number_of_dependents: formState.numberOfDependents || '',
      mode_of_transport: formState.modeOfTransport || '',
      residence_type: formState.rentOrOwnHome || ''
    },
    consents: {
      consent_bvn_access: !!formState.consentBvn,
      consent_credit_history_access: !!formState.consentCreditHistory,
      consent_data_use: !!formState.consentRiskModeling
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const applicationData = convertToApplicationData(formState);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', applicationData);
      console.log('API response:', response.data);
      navigate('/thank-you');
    } catch (error) {
      console.error('Failed to submit application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'select':
        return (
          <select id={field.id} name={field.id} required={field.required} value={formState[field.id] || ''} onChange={handleInputChange}>
            {field.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div className="checkbox-group">
            <input
              type="checkbox"
              id={field.id}
              name={field.id}
              checked={!!formState[field.id]}
              onChange={handleInputChange}
              required={field.required}
            />
            <label htmlFor={field.id}>{field.label}</label>
          </div>
        );
      case 'file':
        return (
          <div className="custom-file-dropzone">
            <label htmlFor={field.id} className="file-dropzone-label">
              {formState[field.id]?.name || field.placeholder || "Upload file PNG, JPEG, PDF"}
              <span className="file-upload-icon" aria-hidden="true">
                <svg width="28" height="28" fill="none" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 19V6M5 12l7-7 7 7"/>
                </svg>
              </span>
            </label>
            <input
              type="file"
              id={field.id}
              name={field.id}
              accept={field.accept}
              onChange={handleInputChange}
              required={field.required}
              className="file-dropzone-input"
            />
          </div>
        );
      default:
        return (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            placeholder={field.placeholder}
            value={formState[field.id] || ''}
            onChange={handleInputChange}
            required={field.required}
          />
        );
    }
  };

  const renderStepContent = () => {
    const currentStepData = formData.steps[currentStep - 1];
    return (
      <div className="step-content">
        {/* <h2>{currentStepData.title}</h2> */}
        <div className="form-grid">
          {currentStepData.fields.map((field) => (
            <div key={field.id} className="form-group">
              {field.type !== 'checkbox' && <label htmlFor={field.id}>{field.label}</label>}
              {renderField(field)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator">
        {formData.steps.map((step, index) => (
          <div key={index} className={`step-item ${index + 1 <= currentStep ? 'active' : ''}`}>
            <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="step-name">{step.title}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="application-page-container">
      <ApplicationHeader />
      <div className="form-divider"></div>
      <div className="application-form-content">
        <div className="form-wrapper">
          {renderStepIndicator()}
          <div className="section-label">{formData.steps[currentStep - 1].title}</div>
          <form className="application-form" onSubmit={handleSubmit}>
            {renderStepContent()}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" onClick={handlePreviousStep} className="prev-button">
                  Previous
                </button>
              )}
              {currentStep < formData.steps.length ? (
                <button type="button" onClick={handleNextStep} className="next-button">
                  <span style={{ fontWeight: '700' }}>Next:</span> {formData.steps[currentStep].title} →
                </button>
              ) : (
                <button type="submit" className="submit-button">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <DetailedFooter />
    </div>
  );
}

export default ApplicationForm; 