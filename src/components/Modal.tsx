import "./RegistrationModal.css"; // Import the CSS file

const RegistrationModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Registration Forms</h2>

        <form>
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter the name of your art"
              className="form-input"
            />
          </div>

          {/* Phone Number Input */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="form-input"
            />
          </div>

          {/* How Did You Hear About Us Dropdown */}
          <div className="form-group">
            <label htmlFor="source">
              Where did you hear about us? <span className="required">*</span>
            </label>
            <select id="source" className="form-input">
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Other</option>
            </select>
          </div>

          {/* Pay Currency Section */}
          <div className="form-group">
            <label>Pay Currency</label>
            <div className="button-group">
              <button type="button" className="currency-button">
                ریال
              </button>
              <button type="button" className="currency-button">
                USDT
              </button>
            </div>
          </div>

          {/* Amount Input */}
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="amount"
                placeholder="8.000.000"
                className="form-input"
              />
              <span className="input-suffix">ریال</span>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
