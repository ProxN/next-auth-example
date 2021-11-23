import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Loader } from '@components/elements/Loader';
import { Center } from '@components/layout/Center';

const WithNoUser = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const isLoading = status === 'loading';

    useEffect(() => {
      if (isLoading || !session) return;
      router.push('/home');
    }, [isLoading, router, session]);

    if (isLoading || session) {
      return (
        <Center minH='100vh'>
          <Loader />
        </Center>
      );
    }

    return <Component {...props} />;
  };
};

export { WithNoUser };
