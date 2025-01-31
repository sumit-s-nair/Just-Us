import './globals.css';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Just US',
  description: 'Well its just us',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
