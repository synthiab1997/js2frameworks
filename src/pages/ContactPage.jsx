import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.fullName.length < 3) newErrors.fullName = 'Full name must be at least 3 characters.';
    if (formData.subject.length < 3) newErrors.subject = 'Subject must be at least 3 characters.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (formData.body.length < 3) newErrors.body = 'Body must be at least 3 characters.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Handle form submission
      setFormData({ fullName: '', subject: '', email: '', body: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}  // Add value for the subject input
            onChange={handleChange}   // Add onChange handler for the subject input
            className="border p-2 w-full"
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <textarea
            name="body"
            placeholder="Message"
            value={formData.body}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          {errors.body && <p className="text-red-500">{errors.body}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
