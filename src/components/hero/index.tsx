import React from 'react';
import { IRCHero } from './interface';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
// local images
import leftImage from './assets/img/left.jpg';
import rightImage from './assets/img/right.jpg';
import circle from './assets/img/circle.png';
import light from './assets/img/light.png';
import path from './assets/img/path.png';

const Hero = ({ title, description, btnText }: IRCHero) => {
  return (
    <>
      <div className="rc-hero relative pb-[100px] pt-[170px]">
        <div className="mx-auto max-w-[1552px]">
          <div className="rc-hero-content flex">
            <div className="rc-hero-left w-[60%]">
              <div className="rc-hero-left-top rtl mb-[30px]" dir="rtl">
                <div className="relative">
                  <div className="absolute top-[-40px] xl:left-[50%] 2xl:left-[52%]">
                    <Image
                      src={light}
                      width={85}
                      height={82}
                      alt="left-heading-top"
                    />
                  </div>
                  <h1 className="text-[48px] font-bold leading-[121%] text-[#111D5E] lg:text-[90px] 2xl:text-[140px]">
                    React Conference
                  </h1>
                </div>
              </div>
              <div className="rc-hero-left-bottom flex justify-between">
                <div className="relative w-[45%]">
                  <Image
                    src={leftImage}
                    width={330}
                    height={420}
                    alt="left-image"
                  />
                  <Image
                    src={circle}
                    width={196}
                    height={190}
                    alt="left-circle"
                    className="absolute bottom-[-85px] right-0 z-[-1]"
                  />
                </div>
                <div className="w-[55%]">
                  <p className="mb-[32px] mt-4 text-[18px] opacity-80 2xl:mb-[80px]">
                    Lorem uis diam turpis quam id fermentum.In quis diam turpis
                    quam id fermentum..id fermentum.In quis diam turpis quam id
                    fermentum.
                  </p>
                  <button className="flex w-full max-w-[293px] items-center justify-center rounded-[30px] bg-[#FFC93E] px-[24px] py-[16px] font-medium">
                    <span className="mr-2 text-[18px] text-[#0A142F]">
                      Buy Tickets
                    </span>
                    <BsArrowUpRight className="text-lg"></BsArrowUpRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="rc-hero-right w-[40%]">
              <Image
                src={rightImage}
                width={623}
                height={648}
                alt="left-image"
                className="mt-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
