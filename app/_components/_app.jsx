// src/pages/_app.jsx
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
