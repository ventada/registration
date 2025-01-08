import { useState } from "react";
import "./RegistrationModal.css"; // Import the CSS file

const RegistrationModal = () => {
  const [paymentMethod, setPaymentMethod] = useState("USD");
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Registration Forms</h2>

        <form>
          {/* Pay Currency Section */}
          <div className="form-group" style={{}}>
            <label>Pay Currency</label>
            <div className="button-group">
              <select
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
                id="source"
                className="form-input"
              >
                <option value="USD">USD</option>
                <option value="other">other</option>
              </select>
              {/* <button type="button" className="currency-button">
                <img src={ParsTech} alt="" />
              </button>
              <button type="button" className="currency-button">
                <img src={Mastercard} alt="" />
              </button>
              <button type="button" className="currency-button">
                <img src={Paypal} alt="" />
              </button> */}
            </div>
          </div>
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
              style={{
                width: "95%",
              }}
              disabled={paymentMethod == "other"}
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
              style={{
                width: "95%",
              }}
              disabled={paymentMethod == "other"}
            />
          </div>

          {/* How Did You Hear About Us Dropdown */}
          <div className="form-group">
            <label htmlFor="source">
              Where did you hear about us? <span className="required">*</span>
            </label>

            <select
              disabled={paymentMethod == "other"}
              id="source"
              className="form-input"
            >
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Other</option>
            </select>
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
                style={{
                  width: "95%",
                }}
                disabled={paymentMethod == "other"}
              />
              <span className="input-suffix">USD</span>
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
