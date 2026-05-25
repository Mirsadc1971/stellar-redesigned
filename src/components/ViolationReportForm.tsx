import { useState } from 'react';
import { AlertTriangle, User, MapPin, Phone, Calendar, FileText, Send, Shield, Scale, Clock, CheckCircle2 } from 'lucide-react';

interface ViolationFormData {
  reporter_name: string;
  reporter_unit_address: string;
  reporter_contact: string;
  report_date: string;
  violator_name: string;
  violator_unit: string;
  violation_types: string[];
  violation_details: string;
  reported_before: string;
  requested_action: string;
  signature: string;
  acknowledged_sharing: boolean;
  certified_accurate: boolean;
  acknowledged_contact: boolean;
}

// All violation reports are delivered to this inbox via FormSubmit.co.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mirsad@stellarpropertygroup.com';

const inputClass =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 transition-all focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100';
const labelClass = 'mb-2 flex items-center gap-2 text-sm font-semibold text-ink-800';
const sectionTitleClass = 'mb-4 font-display text-lg font-bold text-ink-900';

const emptyForm = (): ViolationFormData => ({
  reporter_name: '',
  reporter_unit_address: '',
  reporter_contact: '',
  report_date: new Date().toISOString().split('T')[0],
  violator_name: '',
  violator_unit: '',
  violation_types: [],
  violation_details: '',
  reported_before: 'no',
  requested_action: 'warning',
  signature: '',
  acknowledged_sharing: false,
  certified_accurate: false,
  acknowledged_contact: false,
});

export function ViolationReportForm() {
  const [formData, setFormData] = useState<ViolationFormData>(emptyForm());
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
          violation_types: formData.violation_types.join(', '),
          _subject: `Violation Report — ${formData.reporter_name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: formData.reporter_contact,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(emptyForm());
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
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'violation_types') {
        const violationType = (e.target as HTMLInputElement).value;
        setFormData((prev) => ({
          ...prev,
          violation_types: checked
            ? [...prev.violation_types, violationType]
            : prev.violation_types.filter((t) => t !== violationType),
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const commonViolations = [
    'Noise disturbances and quiet hours violations',
    'Unauthorized modifications to common areas',
    'Parking and vehicle violations',
    'Pet policy violations',
    'Improper waste disposal',
    'Smoking in prohibited areas',
    'Unauthorized subletting or Airbnb rentals',
    'Balcony and patio regulation violations',
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
      <div className="border-b border-ink-100 bg-gradient-to-b from-brand-50 to-white p-8 text-center">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <AlertTriangle className="h-7 w-7" />
        </span>
        <h2 className="font-display text-2xl font-extrabold text-ink-900">
          Illinois Condominium Violation Report
        </h2>
        <p className="mt-1.5 text-sm text-ink-500">
          Pursuant to Section 35 of the Ombudsperson Act
        </p>
        <div className="mt-5 rounded-xl border border-gold-200 bg-gold-50 p-4 text-left">
          <p className="text-sm text-ink-700">
            <strong className="font-semibold text-ink-900">Important:</strong> This form is for
            reporting potential violations related to condominium properties in accordance with
            the Illinois Condominium Property Act. For emergencies, please call 911.
          </p>
        </div>
      </div>

      <div className="p-8">
        {submitStatus === 'success' && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
            <p className="font-semibold">Your violation report has been submitted successfully!</p>
            <p className="text-sm">
              We will review your report and contact you if additional information is needed.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
            <p className="font-semibold">Oops! Something went wrong.</p>
            <p className="text-sm">
              Please try again or contact us directly at mirsad@stellarpropertygroup.com
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Reporter Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="reporter_name" className={labelClass}>
                  <User className="h-4 w-4 text-brand-500" />
                  Your Name *
                </label>
                <input
                  type="text"
                  id="reporter_name"
                  name="reporter_name"
                  required
                  value={formData.reporter_name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="reporter_unit_address" className={labelClass}>
                  <MapPin className="h-4 w-4 text-brand-500" />
                  Unit Address *
                </label>
                <input
                  type="text"
                  id="reporter_unit_address"
                  name="reporter_unit_address"
                  required
                  value={formData.reporter_unit_address}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Unit 301, 123 Main St, Chicago, IL 60601"
                />
              </div>

              <div>
                <label htmlFor="reporter_contact" className={labelClass}>
                  <Phone className="h-4 w-4 text-brand-500" />
                  Phone/Email *
                </label>
                <input
                  type="text"
                  id="reporter_contact"
                  name="reporter_contact"
                  required
                  value={formData.reporter_contact}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Phone number or email address"
                />
              </div>

              <div>
                <label htmlFor="report_date" className={labelClass}>
                  <Calendar className="h-4 w-4 text-brand-500" />
                  Date of Report *
                </label>
                <input
                  type="date"
                  id="report_date"
                  name="report_date"
                  required
                  value={formData.report_date}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Violator Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="violator_name" className={labelClass}>
                  Violator's Name (if known)
                </label>
                <input
                  type="text"
                  id="violator_name"
                  name="violator_name"
                  value={formData.violator_name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="violator_unit" className={labelClass}>
                  Unit Number
                </label>
                <input
                  type="text"
                  id="violator_unit"
                  name="violator_unit"
                  value={formData.violator_unit}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Unit 205"
                />
              </div>
            </div>
          </div>

          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Nature of Violation (check all that apply)</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                { value: 'noise', label: 'Noise/disturbance' },
                { value: 'construction', label: 'Unauthorized construction/alteration' },
                { value: 'pet', label: 'Pet violation' },
                { value: 'parking', label: 'Parking/vehicle issue' },
                { value: 'harassment', label: 'Harassment' },
                { value: 'other', label: 'Other' },
              ].map((violation) => (
                <label
                  key={violation.value}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink-200 p-3.5 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
                >
                  <input
                    type="checkbox"
                    name="violation_types"
                    value={violation.value}
                    checked={formData.violation_types.includes(violation.value)}
                    onChange={handleChange}
                    className="h-5 w-5 rounded accent-brand-600"
                  />
                  <span className="text-sm text-ink-700">{violation.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Details of the Violation</h3>

            <div className="mb-5">
              <label htmlFor="violation_details" className={labelClass}>
                <FileText className="h-4 w-4 text-brand-500" />
                Include dates, times, witnesses *
              </label>
              <textarea
                id="violation_details"
                name="violation_details"
                required
                value={formData.violation_details}
                onChange={handleChange}
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder="Please provide detailed information about the violation including specific dates, times, and any witnesses..."
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-sm font-semibold text-ink-800">
                Have you reported this before? *
              </label>
              <div className="flex gap-6">
                {['yes', 'no'].map((opt) => (
                  <label key={opt} className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="reported_before"
                      value={opt}
                      checked={formData.reported_before === opt}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 accent-brand-600"
                    />
                    <span className="text-sm capitalize text-ink-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="requested_action" className={labelClass}>
                <Scale className="h-4 w-4 text-brand-500" />
                Requested Action
              </label>
              <select
                id="requested_action"
                name="requested_action"
                value={formData.requested_action}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="warning">Warning</option>
                <option value="fine">Fine</option>
                <option value="hearing">Hearing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Signature</h3>
            <div>
              <label htmlFor="signature" className={labelClass}>
                Signature *
              </label>
              <p className="mb-2 text-sm text-ink-500">Type your full name as signature</p>
              <input
                type="text"
                id="signature"
                name="signature"
                required
                value={formData.signature}
                onChange={handleChange}
                className={inputClass}
                placeholder="Type your full name"
              />
            </div>
          </div>

          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Acknowledgements</h3>
            <div className="space-y-4">
              {[
                {
                  name: 'acknowledged_sharing',
                  checked: formData.acknowledged_sharing,
                  text: 'I understand that this report may be shared with the association board, management company, or other relevant parties as part of the investigation process. *',
                },
                {
                  name: 'certified_accurate',
                  checked: formData.certified_accurate,
                  text: 'I certify that the information provided in this report is true and accurate to the best of my knowledge. *',
                },
                {
                  name: 'acknowledged_contact',
                  checked: formData.acknowledged_contact,
                  text: 'I understand that I may be contacted for additional information regarding this report. *',
                },
              ].map((ack) => (
                <label key={ack.name} className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name={ack.name}
                    checked={ack.checked}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-5 w-5 shrink-0 rounded accent-brand-600"
                  />
                  <span className="text-sm leading-relaxed text-ink-600">{ack.text}</span>
                </label>
              ))}
            </div>
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
                <span>Submit Violation Report</span>
              </>
            )}
          </button>

          <p className="text-center text-sm text-ink-400">
            * Required fields. This report is delivered to mirsad@stellarpropertygroup.com
          </p>
        </form>

        <div className="mt-12 space-y-8 border-t border-ink-100 pt-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Shield className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold text-ink-900">
                Violation Reporting &amp; Resolution Process
              </h3>
            </div>
            <p className="leading-relaxed text-ink-500">
              Maintaining community standards requires consistent, fair enforcement of association
              rules and regulations. Our violation reporting process ensures all concerns are
              addressed professionally while respecting the rights of all residents. Reports can be
              submitted confidentially, and all matters are handled according to Illinois
              Condominium Property Act guidelines.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-display text-lg font-bold text-ink-900">
              Common Violations We Address
            </h4>
            <ul className="grid gap-2.5 md:grid-cols-2">
              {commonViolations.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-3">
              <Clock className="h-5 w-5 text-brand-600" />
              <h4 className="font-display text-lg font-bold text-ink-900">
                Our Investigation Process
              </h4>
            </div>
            <p className="leading-relaxed text-ink-500">
              Every violation report triggers a systematic investigation process. We document the
              complaint, gather evidence including photos and witness statements, review applicable
              rules and precedents, and contact involved parties for their perspective. Our goal is
              always to resolve issues through communication and cooperation before formal
              enforcement becomes necessary.
            </p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-3">
              <Scale className="h-5 w-5 text-brand-600" />
              <h4 className="font-display text-lg font-bold text-ink-900">
                Fair Enforcement &amp; Due Process
              </h4>
            </div>
            <p className="leading-relaxed text-ink-500">
              Stellar Property Management follows strict due process procedures including written notice
              of alleged violations, opportunity to respond or cure the violation, formal hearing
              before the board if requested, and progressive enforcement from warnings to fines.
              All enforcement actions are documented and applied consistently across all residents.
              Appeals processes are available for disputed violations.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h4 className="mb-3 font-display text-lg font-bold text-ink-900">
              Illinois Ombudsman Act Information
            </h4>
            <p className="mb-3 leading-relaxed text-ink-600">
              The Condominium and Common Interest Community Ombudsperson Act (765 ILCS 615/)
              provides a means by which unit owners can report potential violations of the
              Condominium Property Act or the Common Interest Community Association Act.
            </p>
            <p className="leading-relaxed text-ink-600">
              For more information about the Illinois Ombudsman Act or to file a complaint directly
              with the state, visit the Illinois Department of Financial and Professional
              Regulation website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
