import { useRouteError } from 'react-router-dom';
import { H1 } from '../../components/Typography/H1';
import { Subtitle1 } from '../../components/Typography/Subtitle1';
import { Container } from './styles';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Container>
      <H1>Oops!</H1>
      <Subtitle1>Sorry, an unexpected error has occurred.</Subtitle1>
      <Subtitle1>
        <i>{error.statusText || error.message}</i>
      </Subtitle1>
      <Subtitle1>
        <i>{error.status}</i>
      </Subtitle1>
    </Container>
  );
}
