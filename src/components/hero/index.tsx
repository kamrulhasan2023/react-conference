import React from 'react';
import { IRCHero } from './interface';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
// local images
import leftImage from './assets/img/left.jpg';
import rightImage from './assets/img/right.jpg';

const Hero = ({ title, description, btnText }: IRCHero) => {
  return (
    <>
      <div className="rc-hero">
        <div className="mx-auto max-w-[1440px] 2xl:max-w-[1552px]">
          <div className="rc-hero-content flex">
            <div className="rc-hero-left w-[60%]">
              <div className="rc-hero-left-top">
                <h1 className="text-right text-[48px] font-bold text-[#111D5E] 2xl:text-[140px]">
                  React <br /> Conference
                </h1>
              </div>
              <div className="rc-hero-left-bottom flex">
                <Image
                  src={leftImage}
                  width={398}
                  height={500}
                  alt="left-image"
                />
                <div>
                  <p className="mb-[32px] text-[18px] opacity-80 2xl:mb-[80px]">
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
