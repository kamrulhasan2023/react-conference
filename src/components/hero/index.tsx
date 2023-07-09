import React from 'react';
import { IRCHero } from './interface';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
// local images
import leftImage from './assets/img/left.jpg';
import rightImage from './assets/img/right.png';
import circle from './assets/img/circle.png';
import light from './assets/img/light.png';
import star from "./assets/img/star.png";

// style
import styles from "./hero.module.scss";

const Hero = ({ title, description, btnText }: IRCHero) => {
  return (
    <>
      <div className={`rc-hero relative pb-[100px] pt-[170px] overflow-hidden ${styles['rc-path']}`}>
        <div className="mx-auto max-w-[1552px]">
          <div className="rc-hero-content flex flex-col lg:flex-row px-[30px] lg:px-0">
            <div className="rc-hero-left lg:w-[60%] w-full">
              <div className="rc-hero-left-top rtl mb-[30px]" dir="rtl">
                <div className="relative">
                  <div className={`absolute top-[-40px] xl:left-[50%] 2xl:left-[52%] ${styles['light']}`}>
                    <Image
                      src={light}
                      width={85}
                      height={82}
                      alt="left-heading-top"
                    />
                  </div>
                  <h1 className="text-[48px] font-bold leading-[121%] text-[#111D5E] lg:text-[90px] xl:text-[140px]">
                    {title}
                  </h1>
                </div>
              </div>
              <div className={`rc-hero-left-bottom flex justify-between lg:flex-row flex-col-reverse`}>
                <div className="relative lg:w-[45%] w-full left-image">
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
                <div className="lg:w-[55%] w-full">
                  <p className="mb-[32px] mt-4 lg:text-[18px] opacity-80 2xl:mb-[80px]">
                    {description}
                  </p>
                  <button className="flex w-full max-w-[293px] items-center justify-center rounded-[30px] bg-[#FFC93E] px-[24px] py-[16px] font-medium lg:mb-0 mb-8">
                    <span className="mr-2 text-[18px] text-[#0A142F]">
                      {btnText}
                    </span>
                    <BsArrowUpRight className="text-lg"></BsArrowUpRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="rc-hero-right lg:w-[40%] w-full lg:pl-[77px] relative">
              <Image
                src={rightImage}
                width={623}
                height={648}
                alt="left-image"
                className="mt-[250px]"
              />
               <div className="absolute lg:left-[3%] lg:bottom-[-8%] right-[-12px] bottom-[-10%]">
                <Image
                  src={star}
                  width={131}
                  height={131}
                  alt="left-image"
                  className=""
                />
               </div>
            </div>
          </div>
        </div>
        {/* shape */}
        <div className={`${styles['rc-hero-shape-wrapper']}  left-0 top-0 w-[700px] h-[700px]`} >
          <div className={`${styles['rc-hero-top-left-bg']} opacity-70`}></div>
        </div>
        <div className={`${styles['rc-hero-shape-wrapper']} right-0 top-0 w-[700px] h-[700px]`} >
          <div className={`${styles['rc-hero-top-right-bg']} opacity-70`}></div>
        </div>
        <div className={`${styles['rc-hero-shape-wrapper']} left-[100px] bottom-[-50px] w-[700px] h-[700px]`} >
          <div className={`${styles['rc-hero-bottom-left-bg']}`}></div>
        </div>
        <div className={`${styles['rc-hero-shape-wrapper']} right-[-100px] bottom-[-150px]  w-[700px] h-[800px]`} >
          <div className={`${styles['rc-hero-bottom-right-bg']}`}></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
