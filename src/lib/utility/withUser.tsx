import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Loader } from '@components/elements/Loader';
import { Center } from '@components/layout/Center';

const withUser = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const { data: session, status } = useSession();
    const isLoading = status === 'loading';
    const router = useRouter();

    useEffect(() => {
      if (isLoading) return;
      if (!session) {
        router.push('/');
        return;
      }
      return;
    }, [isLoading, router, session]);

    if (isLoading || !session) {
      return (
        <Center minH='100vh'>
          <Loader />
        </Center>
      );
    }

    return <Component {...props} />;
  };
};

export { withUser };
