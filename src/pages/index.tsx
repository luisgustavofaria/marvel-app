import { Container } from '@/components/layout/Container';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <div>
        <h1>Hello Word</h1>
      </div>
    </Container>
  );
}
