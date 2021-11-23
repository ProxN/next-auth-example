import { Button } from '@components/elements/Button';
import { Text } from '@components/elements/Text';
import { Box } from '@components/layout/Box';
import { Center } from '@components/layout/Center';
import { withUser } from '@lib/utility/withUser';
import { useSession, signOut } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <Center minH='100vh'>
      <Box textAlign='center'>
        <Text>username: {session?.user?.name}</Text>
        <Button color='red' onClick={handleLogout}>
          Log out
        </Button>
      </Box>
    </Center>
  );
};

export default withUser(Home);
