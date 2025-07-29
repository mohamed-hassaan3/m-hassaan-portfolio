import { Layout } from '@/modules';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact",
};
const page = () => {
  return (
    <Layout>
      Contact
    </Layout>
  )
}

export default page
