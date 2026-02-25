import { redirect } from 'next/navigation'

export default function ContactPage() {
  // Per the PDF: "Both the Contact and Book Tamara buttons lead to the same page"
  redirect('/book')
}
