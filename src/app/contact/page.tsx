import { ContactForm, ContactQuestion } from '@/modules/contact';
import Layout from '@/modules/Layout';
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
