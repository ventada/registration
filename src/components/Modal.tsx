import { useState } from "react";
import "./RegistrationModal.css";

const RegistrationModal = () => {
  const [paymentMethod, setPaymentMethod] = useState("USD");

  const [formInfo, setFormInfo] = useState({
    amount: "100",
    information: {
      name: "",
      email: "",
      phoneNumber: "",
      reason: "",
    },
  });

  const handleInputChange = (field: any, value: any) => {
    setFormInfo((prev) => ({
      ...prev,
      information: {
        ...prev.information,
        [field]: value,
      },
    }));
  };

  const handleAmountChange = (value: any) => {
    setFormInfo((prev) => ({
      ...prev,
      amount: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://masterpiece-api.sensifia.vc/invoices/stripe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formInfo),
        }
      );

      const data = await response.json();
      if (response.ok && data.checkoutLink) {
        window.location.href = data.checkoutLink; // Redirect to Stripe checkout
      } else {
        alert("Error creating invoice. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Registration Forms</h2>

        <form onSubmit={handleSubmit}>
          {/* Pay Currency Section */}
          <div className="form-group">
            <label>Pay Currency</label>
            <select
              onChange={(e) => setPaymentMethod(e.target.value)}
              id="source"
              className="form-input"
              value={paymentMethod}
            >
              <option value="USD">USD</option>
            </select>
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
              value={formInfo.information.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              disabled={paymentMethod === "other"}
              style={{
                width: "95%",
              }}
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
              value={formInfo.information.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              disabled={paymentMethod === "other"}
              style={{
                width: "95%",
              }}
            />
          </div>

          {/* How Did You Hear About Us Dropdown */}
          <div className="form-group">
            <label htmlFor="source">
              Where did you hear about us? <span className="required">*</span>
            </label>
            <select
              id="source"
              className="form-input"
              disabled={paymentMethod === "other"}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              value={formInfo.information.reason}
            >
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Google">Google</option>
              <option value="Other">Other</option>
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
                value={formInfo.amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                disabled={true}
                style={{
                  width: "95%",
                }}
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
