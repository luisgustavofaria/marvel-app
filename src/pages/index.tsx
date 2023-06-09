import Characters from '@/components/characters/Characters';
import { Container } from '@/components/layout/Container';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Characters />
    </Container>
  );
}
