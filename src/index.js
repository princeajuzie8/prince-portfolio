import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactGA from "react-ga4";
import App from './App';

import reportWebVitals from "../src/reportWebvitals";
const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize("G-5M9G8E01PE");
root.render(
  <React.StrictMode>
   
    <App />
    
  </React.StrictMode>
);
const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

