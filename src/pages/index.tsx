import { Button } from '@components/elements/Button';
import { Box } from '@components/layout/Box';
import { Center } from '@components/layout/Center';
import { WithNoUser } from '@lib/utility/withNoUser';
import { signIn } from 'next-auth/react';

const Index = () => {
  const handleGithub = async () => {
    await signIn('github');
  };
  return (
    <Box>
      <Center minH='100vh'>
        <Box minW='30rem'>
          <Button onClick={handleGithub} fullWidth color='green'>
            Sign in with github
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default WithNoUser(Index);
