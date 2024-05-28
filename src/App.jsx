import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
  }

  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
