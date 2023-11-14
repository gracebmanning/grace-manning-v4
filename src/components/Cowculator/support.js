import './cowculator.css';
import { HiArrowLeft } from 'react-icons/hi2';

export default function Support() {
  return (
    <div className="section-solid">
        <div className="container">
            <a href="/cowculator" id="back-arrow">
                <HiArrowLeft className="icon" />
            </a>
            <br/>
            <h1 className="cowculator-title">Cowculator Support</h1>
            <br/>
            <p>
              If you have any questions about this app, reach out to: <b>support@grace-manning.com</b>
              <br/>
              Thanks for checking out the Cowculator! :-)
            </p>
        </div>
    </div>
  );
}