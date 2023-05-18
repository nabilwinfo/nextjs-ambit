const home = [{ id: 1, url: '/', title: 'Home' }]

const services = [
  {
    id: 1,
    url: '#',
    title: 'Bookkeeping',
    children: [
      { id: 111, title: 'Accounting & Bookkeeping', url: '/services/accounting-bookkeeping' },
      { id: 112, title: 'Catch-up Bookkeeping', url: '/services/catch-up-bookkeeping' },
      { id: 113, title: 'Payroll', url: '/services/payroll' },
      { id: 114, title: 'Accounts Receivable', url: '/services/accounts-receivable' },
      { id: 115, title: 'Accounts Payable', url: '/services/accounts-payable' },
      { id: 116, url: '/services/invoice-processing', title: 'Invoice Processing' }
    ]
  },
  {
    id: 5,
    url: '#',
    title: 'Tax',
    children: [
      { id: 51, url: '/services/tax-service', title: 'Tax Planning & Advisory' },
      { id: 52, url: '/services/tax-return', title: 'Tax Return Preparation' },
      { id: 53, url: '/services/ertc', title: 'ERTC' }
    ]
  },
  { id: 9, url: '/services/financial-reporting', title: 'Financial Reporting', children: [] }
]

const company = [
  { id: 1, url: '/about-us', title: 'About Us', children: [] },
  { id: 2, url: '/faq', title: 'FAQ', children: [] },
  { id: 6, url: '/contact', title: 'Contact' },
  { id: 7, url: '/privacy-policy', title: 'Privacy Policy', children: [] }
]

export { home, services, company }
