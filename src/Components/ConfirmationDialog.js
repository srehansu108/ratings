import React from 'react';
import './Confirmation.css';
const ConfirmationDialog = ({ onSubmit, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <p>Are you sure you want to submit the survey?</p>
      <button onClick={onSubmit}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ConfirmationDialog;
