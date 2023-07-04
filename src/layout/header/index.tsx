import Container from '@components/container';
import { IHeader } from './interface';
import CustomLink from '@components/custom-link';
import { HiBars3 } from 'react-icons/hi2';
export default function Header({ logo, menuItems }: IHeader) {
  return (
    <header role="presentation" className="fixed w-full bg-transparent z-50">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* <h1 className="text-4xl text-white">
            <CustomLink href={'/'} isOpenNewTab={false} label={logo} />
          </h1> */}
          <div className="w-[20%]">
            <img src={logo} alt="logo" />
          </div>
          {menuItems.length > 0 && (
            <nav>
              <ul className="flex w-[60%] flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
                {menuItems.map(({ label, href }, index) => (
                  <li key={index}>
                    <CustomLink
                      className="inline-flex items-end py-[38px] text-[18px] font-medium text-[#0A142F] transition hover:text-primary"
                      href={href}
                      isOpenNewTab={false}
                      label={label}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="w-[20%]" dir="rtl">
            <HiBars3></HiBars3>
          </div>
        </div>
      </Container>
    </header>
  );
}
