const Notification = (props) => {
  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <div className="information-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <p className="message">Information Message</p>
      </div>

      <div className="success-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p className="message">Success Message</p>
      </div>
      <div className="warning-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <p className="message">Warning Message</p>
      </div>
      <div className="danger-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
        <p className="message">Danger Message</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
