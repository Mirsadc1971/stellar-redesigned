import { useState } from 'react';
import { Mail, Phone, User, Building, MessageSquare, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry_type: string;
  property_address: string;
  number_of_units: string;
  message: string;
}

// All submissions are delivered to this inbox via FormSubmit.co.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mirsad@stellarpropertygroup.com';

const inputClass =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 transition-all focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100';
const labelClass = 'mb-2 flex items-center gap-2 text-sm font-semibold text-ink-800';

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiry_type: 'general',
  property_address: '',
  number_of_units: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ ...initialForm });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New website inquiry — ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ ...initialForm });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card sm:p-9">
      <div className="mb-7">
        <h2 className="font-display text-2xl font-extrabold text-ink-900">Get in touch</h2>
        <p className="mt-1.5 text-sm text-ink-500">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
          <p className="font-semibold">Thank you for contacting us!</p>
          <p className="text-sm">We'll respond to your inquiry shortly at {formData.email}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          <p className="font-semibold">Oops! Something went wrong.</p>
          <p className="text-sm">Please try again or call us directly at 773.728.0652</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              <User className="h-4 w-4 text-brand-500" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              <Mail className="h-4 w-4 text-brand-500" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              <Phone className="h-4 w-4 text-brand-500" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="(773) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              <Building className="h-4 w-4 text-brand-500" />
              Company/Association
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your Association Name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="inquiry_type" className={labelClass}>
            <MessageSquare className="h-4 w-4 text-brand-500" />
            Inquiry Type *
          </label>
          <select
            id="inquiry_type"
            name="inquiry_type"
            required
            value={formData.inquiry_type}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="general">General Inquiry</option>
            <option value="property_management">Property Management Services</option>
            <option value="quote">Request a Quote</option>
            <option value="maintenance">Maintenance Request</option>
          </select>
        </div>

        {(formData.inquiry_type === 'property_management' ||
          formData.inquiry_type === 'quote') && (
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="property_address" className={labelClass}>
                Property Address
              </label>
              <input
                type="text"
                id="property_address"
                name="property_address"
                value={formData.property_address}
                onChange={handleChange}
                className={inputClass}
                placeholder="123 Main St, Chicago, IL"
              />
            </div>

            <div>
              <label htmlFor="number_of_units" className={labelClass}>
                Number of Units
              </label>
              <input
                type="number"
                id="number_of_units"
                name="number_of_units"
                value={formData.number_of_units}
                onChange={handleChange}
                className={inputClass}
                placeholder="50"
                min="1"
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="message" className={labelClass}>
            <MessageSquare className="h-4 w-4 text-brand-500" />
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your property management needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lift disabled:cursor-not-allowed disabled:bg-ink-300"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className="text-center text-sm text-ink-400">
          By submitting this form, you agree to be contacted by Stellar Property Group regarding
          your inquiry.
        </p>
      </form>
    </div>
  );
}
