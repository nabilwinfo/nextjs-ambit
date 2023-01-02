import { Contact } from 'components/blocks/contact'
import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'
import { FC } from 'react'

const ContactPage: NextPage = () => {
  return (
    <PageLayout title="Get in touch" backgroundUrl="/img/photos/bg-contact.jpg">
      <Contact />
    </PageLayout>
  )
}

export default ContactPage
