import Characters from '@/components/characters/Characters';
import Comics from '@/components/comics/Comics';
import { Container } from '@/components/layout/Container';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Comics />
    </Container>
  );
}
