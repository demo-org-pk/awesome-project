import React, { useState } from 'react';

const Form = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Simulating an error condition
    const error = true;

    if (error) {
      setErrorMessage('There was an error submitting the form. Please try again later.');
    } else {
      // Submit the form
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Form;
