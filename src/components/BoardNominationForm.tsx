import { useState } from 'react';
import { Users, User, Mail, Phone, MapPin, FileText, Send, Award, CheckCircle, Printer } from 'lucide-react';

interface BoardNominationFormData {
  nominee_name: string;
  nominee_email: string;
  nominee_phone: string;
  nominee_unit_address: string;
  years_at_property: string;
  ownership_type: string;
  current_employment: string;
  previous_board_experience: string;
  relevant_skills: string;
  motivation: string;
  time_commitment: string;
  references: string;
  signature: string;
  acknowledged_terms: boolean;
  acknowledged_commitment: boolean;
  acknowledged_attendance: boolean;
}

// All board nomination applications are delivered to this inbox via FormSubmit.co.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mirsad@stellarpropertygroup.com';

const inputClass =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 transition-all focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100';
const labelClass = 'mb-2 flex items-center gap-2 text-sm font-semibold text-ink-800';
const sectionTitleClass = 'mb-4 font-display text-lg font-bold text-ink-900';

const initialState: BoardNominationFormData = {
  nominee_name: '',
  nominee_email: '',
  nominee_phone: '',
  nominee_unit_address: '',
  years_at_property: '',
  ownership_type: 'owner',
  current_employment: '',
  previous_board_experience: '',
  relevant_skills: '',
  motivation: '',
  time_commitment: 'yes',
  references: '',
  signature: '',
  acknowledged_terms: false,
  acknowledged_commitment: false,
  acknowledged_attendance: false,
};

export function BoardNominationForm() {
  const [formData, setFormData] = useState<BoardNominationFormData>({ ...initialState });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<BoardNominationFormData | null>(null);

  const handlePrint = () => {
    window.print();
  };

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
          acknowledged_terms: formData.acknowledged_terms ? 'Yes' : 'No',
          acknowledged_commitment: formData.acknowledged_commitment ? 'Yes' : 'No',
          acknowledged_attendance: formData.acknowledged_attendance ? 'Yes' : 'No',
          _subject: `Board Nomination Application — ${formData.nominee_name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: formData.nominee_email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmittedData({ ...formData });
        setFormData({ ...initialState });
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
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const responsibilities = [
    'Attend regular board meetings (typically monthly)',
    'Review financial reports and budgets',
    'Make decisions on maintenance and improvements',
    'Address owner concerns and communications',
    'Oversee compliance with governing documents',
    'Work with property management company',
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
      <div className="border-b border-ink-100 bg-gradient-to-b from-brand-50 to-white p-8 text-center">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
          <Users className="h-7 w-7" />
        </span>
        <h2 className="font-display text-2xl font-extrabold text-ink-900">
          Board Member Nomination Application
        </h2>
        <p className="mt-1.5 text-sm text-ink-500">
          Apply to serve on your condominium or HOA board
        </p>
        <div className="mt-5 rounded-xl border border-brand-100 bg-brand-50 p-4 text-left">
          <p className="text-sm text-ink-700">
            <strong className="font-semibold text-ink-900">Note:</strong> Board positions are
            typically determined by percentage of votes received during elections. This
            application helps the nominating committee evaluate candidates for board service.
          </p>
        </div>
      </div>

      <div className="p-8">
        {submitStatus === 'success' && submittedData && (
          <div className="mb-6 space-y-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
              <p className="font-semibold">
                Your board nomination application has been submitted successfully!
              </p>
              <p className="text-sm">
                The nominating committee will review your application and contact you regarding
                next steps.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-700 print:hidden"
              >
                <Printer className="h-5 w-5" />
                <span>Print Application Copy</span>
              </button>
            </div>

            <div className="hidden bg-white p-8 print:block">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                  Board Member Nomination Application
                </h1>
                <p className="text-gray-600">Stellar Property Management</p>
                <p className="text-sm text-gray-500">
                  Submitted on {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-4">
                  <h2 className="mb-3 text-xl font-bold text-gray-900">Nominee Information</h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">Full Name:</p>
                      <p className="text-gray-900">{submittedData.nominee_name}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Email:</p>
                      <p className="text-gray-900">{submittedData.nominee_email}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Phone:</p>
                      <p className="text-gray-900">{submittedData.nominee_phone}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Unit Address:</p>
                      <p className="text-gray-900">{submittedData.nominee_unit_address}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Years at Property:</p>
                      <p className="text-gray-900">{submittedData.years_at_property}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Ownership Status:</p>
                      <p className="text-gray-900">{submittedData.ownership_type}</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-300 pb-4">
                  <h2 className="mb-3 text-xl font-bold text-gray-900">Professional Background</h2>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">Current Employment/Profession:</p>
                      <p className="text-gray-900">
                        {submittedData.current_employment || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        Previous Board or Leadership Experience:
                      </p>
                      <p className="whitespace-pre-wrap text-gray-900">
                        {submittedData.previous_board_experience || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Relevant Skills &amp; Expertise:</p>
                      <p className="whitespace-pre-wrap text-gray-900">
                        {submittedData.relevant_skills}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-300 pb-4">
                  <h2 className="mb-3 text-xl font-bold text-gray-900">Motivation &amp; Commitment</h2>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">
                        Why do you want to serve on the board?
                      </p>
                      <p className="whitespace-pre-wrap text-gray-900">
                        {submittedData.motivation}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        Can you commit to attending monthly board meetings?
                      </p>
                      <p className="text-gray-900">{submittedData.time_commitment}</p>
                    </div>
                    {submittedData.references && (
                      <div>
                        <p className="font-semibold text-gray-700">References:</p>
                        <p className="whitespace-pre-wrap text-gray-900">
                          {submittedData.references}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-b border-gray-300 pb-4">
                  <h2 className="mb-3 text-xl font-bold text-gray-900">Signature</h2>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-700">Applicant Signature:</p>
                    <p className="mt-2 text-2xl text-gray-900">{submittedData.signature}</p>
                  </div>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-bold text-gray-900">Acknowledgements</h2>
                  <div className="space-y-2 text-sm">
                    {[
                      'I understand that board members have fiduciary duties to the association and must act in the best interests of all owners.',
                      'I understand that serving on the board requires a significant time commitment.',
                      'I certify that the information provided is true and accurate.',
                    ].map((ack) => (
                      <div key={ack} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                        <p className="text-gray-700">{ack}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            <h3 className={sectionTitleClass}>Nominee Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="nominee_name" className={labelClass}>
                  <User className="h-4 w-4 text-brand-500" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="nominee_name"
                  name="nominee_name"
                  required
                  value={formData.nominee_name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="nominee_email" className={labelClass}>
                    <Mail className="h-4 w-4 text-brand-500" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="nominee_email"
                    name="nominee_email"
                    required
                    value={formData.nominee_email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="nominee_phone" className={labelClass}>
                    <Phone className="h-4 w-4 text-brand-500" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="nominee_phone"
                    name="nominee_phone"
                    required
                    value={formData.nominee_phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(773) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="nominee_unit_address" className={labelClass}>
                  <MapPin className="h-4 w-4 text-brand-500" />
                  Unit Address *
                </label>
                <input
                  type="text"
                  id="nominee_unit_address"
                  name="nominee_unit_address"
                  required
                  value={formData.nominee_unit_address}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Unit 301, 123 Main St, Chicago, IL 60601"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="years_at_property" className={labelClass}>
                    Years at Property *
                  </label>
                  <input
                    type="number"
                    id="years_at_property"
                    name="years_at_property"
                    required
                    value={formData.years_at_property}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="5"
                    min="0"
                    step="0.5"
                  />
                </div>

                <div>
                  <label htmlFor="ownership_type" className={labelClass}>
                    Ownership Status *
                  </label>
                  <select
                    id="ownership_type"
                    name="ownership_type"
                    required
                    value={formData.ownership_type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="owner">Owner</option>
                    <option value="renter">Renter (if allowed by bylaws)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Professional Background</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="current_employment" className={labelClass}>
                  Current Employment/Profession
                </label>
                <input
                  type="text"
                  id="current_employment"
                  name="current_employment"
                  value={formData.current_employment}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g., Software Engineer at Tech Company"
                />
              </div>

              <div>
                <label htmlFor="previous_board_experience" className={labelClass}>
                  Previous Board or Leadership Experience
                </label>
                <textarea
                  id="previous_board_experience"
                  name="previous_board_experience"
                  value={formData.previous_board_experience}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe any previous experience serving on boards, committees, or leadership positions..."
                />
              </div>

              <div>
                <label htmlFor="relevant_skills" className={labelClass}>
                  <FileText className="h-4 w-4 text-brand-500" />
                  Relevant Skills &amp; Expertise *
                </label>
                <textarea
                  id="relevant_skills"
                  name="relevant_skills"
                  required
                  value={formData.relevant_skills}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="e.g., Financial management, legal background, construction/engineering, communication skills, property management..."
                />
              </div>
            </div>
          </div>

          <div className="border-b border-ink-100 pb-7">
            <h3 className={sectionTitleClass}>Motivation &amp; Commitment</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="motivation" className={labelClass}>
                  Why do you want to serve on the board? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe your motivation for serving on the board and what you hope to contribute to the community..."
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-ink-800">
                  Can you commit to attending monthly board meetings? *
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  {[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                    { value: 'mostly', label: 'Mostly, with occasional conflicts' },
                  ].map((opt) => (
                    <label key={opt.value} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="time_commitment"
                        value={opt.value}
                        checked={formData.time_commitment === opt.value}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 accent-brand-600"
                      />
                      <span className="text-sm text-ink-700">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="references" className={labelClass}>
                  References (Optional)
                </label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Names and contact information of references (other unit owners, professional contacts, etc.)"
                />
              </div>
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
                  name: 'acknowledged_terms',
                  checked: formData.acknowledged_terms,
                  text: "I understand that board members have fiduciary duties to the association and must act in the best interests of all owners. I agree to comply with the association's governing documents and all applicable laws. *",
                },
                {
                  name: 'acknowledged_commitment',
                  checked: formData.acknowledged_commitment,
                  text: 'I understand that serving on the board requires a significant time commitment including attending regular meetings, reviewing documents, and responding to association matters. *',
                },
                {
                  name: 'acknowledged_attendance',
                  checked: formData.acknowledged_attendance,
                  text: 'I certify that the information provided in this application is true and accurate to the best of my knowledge. *',
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
                <span>Submit Board Nomination Application</span>
              </>
            )}
          </button>

          <p className="text-center text-sm text-ink-400">
            * Required fields. Your application is delivered to mirsad@stellarpropertygroup.com
          </p>
        </form>

        <div className="mt-12 space-y-6 border-t border-ink-100 pt-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold text-ink-900">
                Board Service Information
              </h3>
            </div>
            <p className="leading-relaxed text-ink-500">
              Serving on your condominium or HOA board is a valuable way to contribute to your
              community. Board members make important decisions about the property's management,
              finances, and future direction while working collaboratively with professional
              management.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-display text-lg font-bold text-ink-900">
              Board Member Responsibilities
            </h4>
            <ul className="grid gap-2.5 md:grid-cols-2">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h4 className="mb-3 font-display text-lg font-bold text-ink-900">Election Process</h4>
            <p className="leading-relaxed text-ink-600">
              Board positions are typically determined by the percentage of votes received during
              the annual election. All eligible unit owners may vote, with voting power often based
              on percentage of ownership. The nominating committee reviews applications and may
              interview candidates before presenting them to the membership for election.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
