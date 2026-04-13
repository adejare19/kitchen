import './globals.css'

export const metadata = {
  title: 'The Marina African Restaurant | Authentic African Cuisine in London, UK',
  description: "Experience the rich flavours of West Africa at The Marina African Restaurant, London's premier authentic African restaurant. Jollof rice, suya, egusi soup & more. Book your table today.",
  keywords: 'African restaurant London, West African food UK, authentic jollof rice London, Nigerian restaurant London',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
