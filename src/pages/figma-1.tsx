import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Figma1Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Dot Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/noble/dot-background.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Header */}
        <header className="relative z-10 max-w-[1440px] mx-auto px-[50px] py-[50px]">
          <nav className="flex items-center justify-between">
            <Image
              src="/images/noble/noble-logo.svg"
              alt="Noble"
              width={88}
              height={24}
            />
            <div className="flex items-center gap-[30px] text-xs font-extrabold tracking-[0.05em] uppercase text-[#0C1A44]">
              <a href="#how-it-works" className="hover:opacity-70">HOW IT WORKS</a>
              <a href="#" className="hover:opacity-70">What's noble</a>
              <a href="#" className="hover:opacity-70">PLAN</a>
              <a href="#" className="hover:opacity-70">COVERAGE</a>
              <button className="px-[26px] py-[18px] border border-[#0C1A44] rounded-full hover:bg-[#0C1A44] hover:text-white transition-colors">
                LOGIN
              </button>
              <button className="px-[26px] py-[18px] bg-[#0C1A44] text-[#FAF9F6] rounded-full hover:bg-[#0C1A44]/90 transition-colors">
                JOIN THE REVOLUTION
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-[163px] pt-[100px] pb-[200px]">
          <h1 className="text-[80px] font-black leading-[0.875] uppercase text-[#0C1A44] mb-[18px]">
            GET PAID TO USE<br />YOUR PHONE LESS.
          </h1>
          <p className="text-[24px] leading-[1.5] text-[#0C1A44] mb-[52px] max-w-[510px]">
            The first mobile plan to give you money back for unused data.
          </p>
          <button className="px-[77px] py-[22px] bg-white text-[#0C1A44] rounded-[30px] text-[15px] font-extrabold tracking-[0.05em] uppercase shadow-[0px_12.5px_0px_0px_rgba(146,217,180,1)] hover:translate-y-[2px] hover:shadow-[0px_10.5px_0px_0px_rgba(146,217,180,1)] transition-all">
            GET STARTED
          </button>
        </div>

        {/* Hero Illustration */}
        <div className="absolute right-0 bottom-0 w-[1442px] h-[1811px] pointer-events-none">
          <Image
            src="/images/noble/hero-illustration.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Phone Illustration */}
        <div className="absolute right-[61px] bottom-[189px] w-[682px] h-[998px] pointer-events-none">
          <Image
            src="/images/noble/phone-illustration.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-[163px] py-[100px]">
        <div className="space-y-[11px] mb-[80px]">
          <div className="flex items-start gap-[31px]">
            <Image
              src="/images/noble/checkmark.svg"
              alt=""
              width={19}
              height={19}
            />
            <p className="text-[24px] leading-[1.5] text-[#0C1A44]">
              Unlimited 5G data powered with the T-Mobile Network
            </p>
          </div>
          <div className="flex items-start gap-[31px]">
            <Image
              src="/images/noble/checkmark.svg"
              alt=""
              width={19}
              height={19}
            />
            <p className="text-[24px] leading-[1.5] text-[#0C1A44]">
              Cash back for data you don't use
            </p>
          </div>
          <div className="flex items-start gap-[31px]">
            <Image
              src="/images/noble/checkmark.svg"
              alt=""
              width={19}
              height={19}
            />
            <p className="text-[24px] leading-[1.5] text-[#0C1A44]">
              Your first month is free
            </p>
          </div>
        </div>
        <p className="text-[24px] leading-[1.5] text-[#0C1A44]">
          All for only $50 a month
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-[163px] pb-[100px]">
        <div className="grid grid-cols-2 gap-[20px]">
          {/* Testimonial 1 */}
          <div className="bg-white border border-[#0C1A44] rounded-[20px] p-[32px] relative">
            <div className="inline-flex items-center gap-[10px] px-[8px] py-[6px] bg-[#94C0E3] border border-[#0C1A44] rounded-[5px] mb-[56px]">
              <span className="text-xs font-extrabold tracking-[0.05em] uppercase text-[#0C1A44]">
                customer testimonials
              </span>
            </div>
            <div className="mb-[57px]">
              <Image
                src="/images/noble/user-jordan.svg"
                alt="Jordan"
                width={196}
                height={196}
              />
            </div>
            <p className="text-[50px] font-black leading-[0.96] uppercase text-[#0C1A44] text-center mb-[20px]">
              this network<br />is way better<br />than verizon
            </p>
            <p className="text-xs font-extrabold tracking-[0.05em] uppercase text-[#0C1A44] text-center leading-[1.33]">
              JORDAN<br />NOBLE USER SINCE AUGUST 2025
            </p>
            <Image
              src="/images/noble/quote-left.svg"
              alt=""
              width={19}
              height={15}
              className="absolute top-[413px] left-[69px]"
            />
            <Image
              src="/images/noble/quote-right.svg"
              alt=""
              width={19}
              height={15}
              className="absolute top-[318px] right-[67px]"
            />
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-[#0C1A44] rounded-[20px] p-[32px] relative">
            <div className="inline-flex items-center gap-[10px] px-[8px] py-[6px] bg-[#94C0E3] border border-[#0C1A44] rounded-[5px] mb-[56px]">
              <span className="text-xs font-extrabold tracking-[0.05em] uppercase text-[#0C1A44]">
                customer testimonials
              </span>
            </div>
            <div className="mb-[57px]">
              <Image
                src="/images/noble/user-mike.svg"
                alt="Mike"
                width={196}
                height={196}
              />
            </div>
            <p className="text-[50px] font-black leading-[0.96] uppercase text-[#0C1A44] text-center mb-[20px]">
              noble pays me<br />cash each month<br />for unused data
            </p>
            <p className="text-xs font-extrabold tracking-[0.05em] uppercase text-[#0C1A44] text-center leading-[1.33]">
              MIKE<br />NOBLE USER SINCE JUNE 2025
            </p>
            <Image
              src="/images/noble/quote-left.svg"
              alt=""
              width={19}
              height={15}
              className="absolute top-[411px] left-[66px]"
            />
            <Image
              src="/images/noble/quote-right.svg"
              alt=""
              width={19}
              height={15}
              className="absolute top-[317px] right-[493px]"
            />
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-[163px] pb-[200px]">
        <div className="flex justify-center">
          <Image
            src="/images/noble/coverage-map.svg"
            alt="Coverage Map"
            width={954}
            height={242}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 max-w-[1440px] mx-auto px-[238px] py-[100px]">
        <h2 className="text-[70px] font-black leading-[0.93] uppercase text-[#0C1A44] text-center mb-[25px]">
          How it works
        </h2>
        <p className="text-[24px] leading-[1.5] text-[#0C1A44] text-center mb-[30px]">
          UNLIMITED DATA WHEN YOU NEED IT, CASH WHEN YOU DON'T.
        </p>
        <p className="text-[24px] leading-[1.5] text-[#0C1A44] text-center mb-[50px] max-w-[770px] mx-auto">
          With Noble, you get an unlimited plan on the nation's most reliable 5G network, and the less data you use, the more cash back you get. Use your phone less, and save even more.
        </p>

        {/* How It Works Steps */}
        <div className="grid grid-cols-3 gap-[57px] mb-[47px]">
          {/* Step 1 */}
          <div className="bg-[#FAF9F6] border-2 border-[#94C0E3] rounded-[40px] p-[38px] relative">
            <div className="absolute top-0 left-[103px] w-[75px] h-[75px] bg-[#0C1A44] rounded-full flex items-center justify-center">
              <span className="text-[38px] font-black text-[#FAF9F6]">1</span>
            </div>
            <div className="pt-[61px]">
              <p className="text-[45px] font-black leading-[0.96] uppercase text-[#94C0E3] text-center">
                sign up<br />in TWO<br />minutes
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#FAF9F6] border-2 border-[#94C0E3] rounded-[40px] p-[38px] relative">
            <div className="absolute top-0 left-[103px] w-[75px] h-[75px] bg-[#0C1A44] rounded-full flex items-center justify-center">
              <span className="text-[38px] font-black text-[#FAF9F6]">2</span>
            </div>
            <div className="pt-[61px]">
              <p className="text-[45px] font-black leading-[0.96] uppercase text-[#94C0E3] text-center">
                DO WHAT<br />YOU DO
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#FAF9F6] border-2 border-[#94C0E3] rounded-[40px] p-[38px] relative">
            <div className="absolute top-0 left-[103px] w-[75px] h-[75px] bg-[#0C1A44] rounded-full flex items-center justify-center">
              <span className="text-[38px] font-black text-[#FAF9F6]">3</span>
            </div>
            <div className="pt-[61px]">
              <p className="text-[45px] font-black leading-[0.96] uppercase text-[#94C0E3] text-center">
                $$$ FOR<br />UNUSED<br />DATA
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-[37px] py-[18px] bg-[#0C1A44] text-[#FAF9F6] rounded-[24px] text-xs font-extrabold tracking-[0.05em] uppercase shadow-[0px_10px_0px_0px_rgba(146,217,180,1)] hover:translate-y-[2px] hover:shadow-[0px_8px_0px_0px_rgba(146,217,180,1)] transition-all">
            join nobile mobile
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative bg-[#0C1A44] mt-[200px]">
        {/* Ripped Paper Divider */}
        <div className="absolute top-0 left-0 w-full h-[200px] -translate-y-full">
          <Image
            src="/images/noble/ripped-paper-divider.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <footer className="max-w-[1440px] mx-auto px-[48px] py-[90px]">
          <div className="grid grid-cols-4 gap-[100px]">
            {/* Logo */}
            <div>
              <Image
                src="/images/noble/noble-logo-footer.svg"
                alt="Noble"
                width={176}
                height={48}
              />
            </div>

            {/* Learn More */}
            <div>
              <h3 className="text-xs font-extrabold tracking-[0.05em] uppercase text-[#94C0E3] mb-[39px]">
                Learn More
              </h3>
              <nav className="flex flex-col gap-[38px] text-xs font-extrabold tracking-[0.05em] uppercase text-[#FAF9F6]">
                <a href="#" className="hover:text-[#94C0E3] transition-colors">PLAN</a>
                <a href="#" className="hover:text-[#94C0E3] transition-colors">COVERAGE</a>
                <a href="#" className="hover:text-[#94C0E3] transition-colors">HOW IT WORKS</a>
                <a href="#" className="hover:text-[#94C0E3] transition-colors">WHAT's NOBLE</a>
                <a href="#" className="hover:text-[#94C0E3] transition-colors">LOGIN</a>
                <a href="#" className="hover:text-[#94C0E3] transition-colors">JOIN NOBLE</a>
              </nav>
            </div>

            {/* Stay In Touch */}
            <div>
              <h3 className="text-xs font-extrabold tracking-[0.05em] uppercase text-[#94C0E3] mb-[39px]">
                STAY IN TOUCH
              </h3>
              <div className="flex gap-[20px]">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/noble/instagram-icon.svg"
                    alt="Instagram"
                    width={23}
                    height={23}
                  />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/noble/facebook-icon.svg"
                    alt="Facebook"
                    width={13}
                    height={23}
                  />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/noble/x-icon.svg"
                    alt="X"
                    width={21}
                    height={20}
                  />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/noble/tiktok-icon.svg"
                    alt="TikTok"
                    width={20}
                    height={23}
                  />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/noble/youtube-icon.svg"
                    alt="YouTube"
                    width={25}
                    height={19}
                  />
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xs font-extrabold tracking-[0.05em] uppercase text-[#94C0E3] mb-[35px]">
                CONTACT US
              </h3>
              <p className="text-base leading-[1.5] text-[#FAF9F6]">
                1 (800) 000-0000<br />Available daily,<br />9 AM- 7PM ET
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
