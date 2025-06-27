import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:shankaryuvan90@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
  };

  return (
    <section className="contact-section">
      <h4 className="contact-subheading">Contact</h4>
      <ul className="contact-list">
        <li><strong>Email:</strong> shankaryuvan90@gmail.com</li>
        <li><strong>Phone:</strong> 8807337421</li>
        <li><strong>Location:</strong> Coimbatore, India</li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/yuvan-shankar-56785a32b"
            target="_blank"
            rel="noopener noreferrer"
          >
            yuvan-shankar-56785a32b
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/Yuvan-Shankar-K-J"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuvan-Shankar-K-J
          </a>
        </li>
      </ul>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="contact-input"
            placeholder="Your Name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="contact-input"
            placeholder="your@email.com"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="contact-textarea"
            placeholder="Your message..."
            rows={5}
          />
        </label>
        <button type="submit" className="cta-btn">Send Message</button>
      </form>
    </section>
  );
}
