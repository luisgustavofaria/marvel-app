import CardList from '@/components/cards/CardList';
import { Container } from '@/components/layout/Container';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <CardList />
    </Container>
  );
}
