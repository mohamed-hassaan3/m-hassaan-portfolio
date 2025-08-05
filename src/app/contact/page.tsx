import { Layout } from '@/modules';
import ContactForm from '@/modules/contact/ContactForm';
import ContactQuestion from '@/modules/contact/ContactQuestion';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact",
};
const page = () => {
  return (
    <Layout>
      <ContactForm />
      <ContactQuestion />
    </Layout>
  )
}

export default page
