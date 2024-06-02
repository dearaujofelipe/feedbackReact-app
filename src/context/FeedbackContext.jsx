import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'feedback item 1',
      rating: 10,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
  }

  function updateFeedback(id, updItem) {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
