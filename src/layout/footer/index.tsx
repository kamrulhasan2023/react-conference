import Container from '@components/container';

export default function Footer() {
  return (
    <footer role="presentation" className="bg-[#111D5E] text-light py-6 lg:py-8">
      <Container>
        <p className="text-center text-base text-white">
          &copy; Lemon Hive. {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
