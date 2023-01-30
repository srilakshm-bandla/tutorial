const Notification = (props) => {
  //  Write your code here.
  const { className,message, iconUrl } = props

  const containerClassName = {`notification-container ${className}`}
  return (
    <div className={containerClassName}>
      <img src={iconUrl} className="icon" />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <div className="information-container">
        <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
        <Notification message="Information Message" />
      </div>
      <div className="success-container">
        <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
        <Notification message="Success Message" />
      </div>
      <div className="warning-container">
        <Notification iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        <Notification message="Warning Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
