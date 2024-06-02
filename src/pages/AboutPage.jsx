import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>about this project</h1>
        <p>this is a react app to leave feedback for something</p>
        <p>version 1.0.0</p>
        <p>
          <Link to="/">back to home</Link>
        </p>
      </div>
    </Card>
  );
}
export default AboutPage;
