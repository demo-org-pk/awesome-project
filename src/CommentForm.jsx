import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(DOMPurify.sanitize(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulating server-side processing
    setSubmittedComment(DOMPurify.sanitize(comment));
  };

  return (
    <div>
      <h2>Comment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment:</label>
          <textarea value={comment} onChange={handleCommentChange}></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedComment && (
        <div>
          <h3>Submitted Comment:</h3>
          <p>{submittedComment}</p>
        </div>
      )}
    </div>
  );
};

export default CommentForm;