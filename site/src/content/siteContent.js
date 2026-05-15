export const SAR_URL = 'https://sar.bircom.in/'
export const DONATE_URL = 'https://donate.bircom.in/#donate'
export const BIRCOM_IN_URL = 'https://bircom.in/'
export const TRACKER_URL = 'https://tracker.bircom.in/'
export const SUPPORT_EMAIL = 'support@mail.bircom.in'
export const CIN = 'U88900UP2025NPL229680'
export const URN_80G = 'AANCB8208RF20251'

export const page = {
  eyebrow: 'Donate',
  title: 'Please donate to the Foundation',
  summary:
    'Bank details, Section 80G tax benefit information, and instructions for donors in India and abroad.',
}

export const preparationNotice =
  'Donations support preparation of the Foundation (equipment, training, organisation). Operational rescue services have not commenced.'

export const introParagraphs = [
  'You will land on this site if you have opted to donate to the foundation.',
  'The bank details of the Foundation are as follows:',
]

export const bankDetails = {
  accountName: 'Bircom Search and Rescue Foundation',
  accountNumber: '50200111781921',
  ifsc: 'HDFC0001292',
  bank: 'HDFC Bank Ltd.',
  branch: 'Shop No 8, B 127, Sector 41, Noida - 201303',
}

export const taxBenefitParagraph =
  'The Foundation has received clearances from the Government of India Tax Authorities for tax benefits to those who donate to the Foundation under Section 80G. The Unique Registration Number allotted to the Foundation is shown below.'

export const indiaDonorParagraph =
  'If you send money to us as a donation to the above bank account from anywhere in India, please write to us after transferring so we can acknowledge your gift and assist with 80G documentation where applicable.'

export const foreignDonorParagraph =
  'If you are sending from outside India, please write to us before sending the money. We must obtain prior permission from the Government before accepting donations from outside India.'

export const feedbackParagraph = 'Share your views or questions with us at the email below. Thank you.'

export const menuLinks = [
  { label: 'Foundation home', url: SAR_URL, eyebrow: 'sar.bircom.in' },
  { label: 'Donate', url: DONATE_URL, eyebrow: 'This page', current: true },
  { label: 'Mission', url: `${SAR_URL}#mission`, eyebrow: 'Foundation' },
  { label: 'Services', url: `${SAR_URL}#services`, eyebrow: 'Foundation' },
  { label: 'How it works', url: `${SAR_URL}#how`, eyebrow: 'Foundation' },
  { label: 'Get involved', url: `${SAR_URL}#involve`, eyebrow: 'Foundation' },
  { label: 'Disclaimer', url: `${SAR_URL}#disclaimer`, eyebrow: 'Foundation' },
  { label: 'Contact', url: `${SAR_URL}#contact`, eyebrow: 'Foundation' },
  { separator: true },
  { label: 'Bircom.in community', url: BIRCOM_IN_URL, eyebrow: 'Paragliding / Meshtastic' },
  { label: 'Paragliding tracker', url: TRACKER_URL, eyebrow: 'tracker.bircom.in' },
]
