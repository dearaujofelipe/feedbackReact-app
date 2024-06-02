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
    {
      id: 2,
      text: 'feedback item 2',
      rating: 10,
    },
    {
      id: 3,
      text: 'feedback item 3',
      rating: 10,
    },
  ]);

  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
