import './globals.css';

export const metadata = {
  title: 'vamo tomar uma?',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
