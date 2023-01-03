const pricingList = [
  {
    price: 0,
    plan: 'Free Trial',
    features: ['Bank Entries', 'Credit card entries', 'Reconciliation', 'Payroll Entries', '3-Month Bookkeeping'],
    suffix: ''
  },
  {
    price: 200,
    plan: 'Fixed Monthly',
    features: ['Most Popular', '0-15 Hours', 'Fixed Fee', 'Back-up expert', 'Monthly billing'],
    suffix: 'mo'
  },
  {
    price: 600,
    plan: 'Fixed Hours (starts at)',
    features: ['Recommended for CPA', '0-50 Hours', '51-100 Hours', '101-150 Hours', 'Monthly billing'],
    suffix: 'mo'
  },
  {
    price: 15,
    plan: 'Full Time',
    features: ['Dedicated Staff', '8 hours/day', '160 hours/month', 'Value for Money', 'Monthly Billing'],
    suffix: 'hr'
  }
]

export default { pricingList }
