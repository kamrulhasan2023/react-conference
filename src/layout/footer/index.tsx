import Container from '@components/container';
import Image from 'next/image';
import logo from "./assets/img/footerLogo.png";
import { FaTwitter, FaFacebook, FaLinkedin, FaDribbble } from "react-icons/fa";
export default function Footer() {
  return (
    <footer role="presentation" className="bg-[#111D5E] text-light py-6 lg:py-8">
      <Container>
		<div className='flex flex-col justify-center items-center md:py-9 py-4 text-white'>
			<Image src={logo} width={175} height={48} alt="logo" />
			<div className='flex justify-center items-center gap-8 md:mt-[78px] mt-12 mb-6 text-xl'>
				<FaTwitter/>
				<FaLinkedin />
				<FaFacebook />
				<FaDribbble />
			</div>
			<div className='leading-6'>
				<span>&copy; 2023 Lemonhive. All rights reserved.</span>
			</div>
		</div>
      </Container>
    </footer>
  );
}
