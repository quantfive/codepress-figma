import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function NobleHomepage() {
  const baseUrl = "https://editable.codepress.dev";
  const pageUrl = `${baseUrl}/figma-1`;
  const title = "Noble Mobile | Get Paid to Use Your Phone Less";
  const description =
    "The first mobile plan to give you money back for unused data. Unlimited 5G data powered with the T-Mobile Network.";

  return (
    <div className="font-sans bg-[#FAF9F6]">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
      </Head>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/figma-1/dot-background.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <header className="px-12 py-12">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Image
            src="/images/figma-1/noble-logo.svg"
            alt="Noble"
            width={88}
            height={24}
          />
          <nav className="flex items-center gap-16">
            <a
              href="#how-it-works"
              className="text-[#0C1A44] text-xs font-extrabold uppercase tracking-[0.6px]"
            >
              HOW IT WORKS
            </a>
            <a
              href="#whats-noble"
              className="text-[#0C1A44] text-xs font-extrabold uppercase tracking-[0.6px]"
            >
              What&apos;s noble
            </a>
            <a
              href="#plan"
              className="text-[#0C1A44] text-xs font-extrabold uppercase tracking-[0.6px]"
            >
              PLAN
            </a>
            <a
              href="#coverage"
              className="text-[#0C1A44] text-xs font-extrabold uppercase tracking-[0.6px]"
            >
              COVERAGE
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-6 h-12 border border-[#0C1A44] rounded-[25px] text-[#0C1A44] text-xs font-extrabold uppercase tracking-[0.6px]">
              LOGIN
            </button>
            <button className="px-6 h-12 bg-[#0C1A44] rounded-[25px] text-[#FAF9F6] text-xs font-extrabold uppercase tracking-[0.6px]">
              JOIN THE REVOLUTION
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-40 pt-32 pb-20">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-[80px] leading-[0.875] font-black uppercase text-[#0C1A44] mb-7">
              GET PAID TO USE
              <br />
              YOUR PHONE LESS.
            </h1>
            <p className="text-2xl leading-[1.5] text-[#0C1A44] mb-12 max-w-[510px]">
              The first mobile plan to give you money back for unused data.
            </p>
            <button className="px-20 py-5 bg-[#FFFFFF] rounded-[30px] text-[#0C1A44] text-[15px] font-extrabold uppercase tracking-[0.75px] shadow-[0px_12.5px_0px_0px_rgba(146,217,180,1)]">
              GET STARTED
            </button>
          </div>
        </section>

        {/* Phone Image Section */}
        <section className="relative px-40 pb-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="relative">
              <Image
                src="/images/figma-1/ringo.svg"
                alt="Noble Mobile App"
                width={682}
                height={998}
                className="ml-auto"
              />
              <Image
                src="/images/figma-1/group-404.svg"
                alt=""
                width={954}
                height={242}
                className="absolute -right-32 top-1/3"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-40 pb-32">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-[20px] p-8 relative">
              <div className="inline-flex items-center border border-[#0C1A44] rounded-[5px] px-2 py-1.5 mb-8">
                <span className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#0C1A44]">
                  customer testimonials
                </span>
              </div>
              <Image
                src="/images/figma-1/user-avatar-1.svg"
                alt=""
                width={196}
                height={196}
                className="mx-auto mb-8"
              />
              <p className="text-[50px] leading-[0.96] font-black uppercase text-center text-[#0C1A44] mb-8">
                this network
                <br />
                is way better
                <br />
                than verizon
              </p>
              <div className="text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.6px] leading-[1.33] text-[#0C1A44]">
                  JORDAN
                  <br />
                  NOBLE USER SINCE AUGUST 2025
                </p>
              </div>
              <Image
                src="/images/figma-1/quote-left.svg"
                alt=""
                width={19}
                height={15}
                className="absolute top-[400px] left-16"
              />
              <Image
                src="/images/figma-1/quote-right.svg"
                alt=""
                width={19}
                height={15}
                className="absolute top-[400px] right-16"
              />
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
                <Image
                  src="/images/figma-1/user-photo-1-41587a.png"
                  alt="Jordan"
                  width={196}
                  height={196}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-[20px] p-8 relative">
              <div className="inline-flex items-center border border-[#0C1A44] rounded-[5px] px-2 py-1.5 mb-8">
                <span className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#0C1A44]">
                  customer testimonials
                </span>
              </div>
              <Image
                src="/images/figma-1/user-avatar-2.svg"
                alt=""
                width={196}
                height={196}
                className="mx-auto mb-8"
              />
              <p className="text-[50px] leading-[0.96] font-black uppercase text-center text-[#0C1A44] mb-8">
                noble pays me
                <br />
                cash each month
                <br />
                for unused data
              </p>
              <div className="text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.6px] leading-[1.33] text-[#0C1A44]">
                  MIKE
                  <br />
                  NOBLE USER SINCE JUNE 2025
                </p>
              </div>
              <Image
                src="/images/figma-1/quote-left.svg"
                alt=""
                width={19}
                height={15}
                className="absolute top-[395px] left-14"
              />
              <Image
                src="/images/figma-1/quote-right.svg"
                alt=""
                width={19}
                height={15}
                className="absolute top-[395px] right-20"
              />
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
                <Image
                  src="/images/figma-1/user-photo-2.png"
                  alt="Mike"
                  width={196}
                  height={196}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-40 pb-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex gap-8 mb-12">
              <Image
                src="/images/figma-1/checkmark-1.svg"
                alt=""
                width={19}
                height={19}
              />
              <p className="text-2xl leading-[1.5] text-[#0C1A44]">
                Unlimited 5G data powered with the T-Mobile Network
              </p>
            </div>
            <div className="flex gap-8 mb-12">
              <Image
                src="/images/figma-1/checkmark-2.svg"
                alt=""
                width={19}
                height={19}
              />
              <p className="text-2xl leading-[1.5] text-[#0C1A44]">
                Cash back for data you don&apos;t use
              </p>
            </div>
            <div className="flex gap-8 mb-12">
              <Image
                src="/images/figma-1/checkmark-3.svg"
                alt=""
                width={19}
                height={19}
              />
              <p className="text-2xl leading-[1.5] text-[#0C1A44]">
                Your first month is free
              </p>
            </div>
            <p className="text-2xl leading-[1.5] text-[#0C1A44] mt-16">
              All for only $50 a month
            </p>
          </div>
        </section>

        {/* Graphic Section */}
        <section className="relative">
          <Image
            src="/images/figma-1/group-6838.svg"
            alt=""
            width={1442}
            height={1811}
            className="w-full"
          />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-60 py-32">
          <div className="max-w-[962px] mx-auto">
            <h2 className="text-[70px] leading-[0.93] font-black uppercase text-center text-[#0C1A44] mb-16">
              How it works
            </h2>
            <p className="text-2xl leading-[1.5] text-center text-[#0C1A44] mb-6">
              UNLIMITED DATA WHEN YOU NEED IT, CASH WHEN YOU DON&apos;T.
            </p>
            <p className="text-2xl leading-[1.5] text-center text-[#0C1A44] mb-24">
              With Noble, you get an unlimited plan on the nation&apos;s most
              reliable 5G network, and the less data you use, the more cash back
              you get. Use your phone less, and save even more.
            </p>

            {/* How It Works Steps */}
            <div className="relative mb-24">
              <div className="grid grid-cols-3 gap-14">
                {/* Step 1 */}
                <div className="relative">
                  <div className="bg-[#FAF9F6] border-2 border-[#94C0E3] rounded-[40px] p-10 pt-24 h-[220px]">
                    <p className="text-[45px] leading-[0.96] font-black uppercase text-center text-[#0C1A44]">
                      sign up
                      <br />
                      in TWO
                      <br />
                      minutes
                    </p>
                  </div>
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-[75px] h-[75px] bg-[#0C1A44] rounded-full flex items-center justify-center">
                    <span className="text-[38px] font-black uppercase text-[#FAF9F6]">
                      1
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="bg-[#FAF9F6] border-2 border-[#94C0E3] rounded-[40px] p-10 pt-24 h-[220px]">
                    <p className="text-[45px] leading-[0.96] font-black uppercase text-center text-[#0C1A44]">
                      DO WHAT
                      <br />
                      YOU DO
                    </p>
                  </div>
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-[75px] h-[75px] bg-[#0C1A44] rounded-full flex items-center justify-center">
                    <span className="text-[38px] font-black uppercase text-[#FAF9F6]">
                      2
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="bg-[#FAF9F6] border-2 border-[#94C0E3] rounded-[40px] p-10 pt-24 h-[220px]">
                    <p className="text-[45px] leading-[0.96] font-black uppercase text-center text-[#0C1A44]">
                      $$$ FOR
                      <br />
                      UNUSED
                      <br />
                      DATA
                    </p>
                  </div>
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-[75px] h-[75px] bg-[#0C1A44] rounded-full flex items-center justify-center">
                    <span className="text-[38px] font-black uppercase text-[#FAF9F6]">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="px-9 py-4 bg-[#0C1A44] rounded-[24px] text-[#FAF9F6] text-xs font-extrabold uppercase tracking-[0.6px] shadow-[0px_10px_0px_0px_rgba(146,217,180,1)]">
                join nobile mobile
              </button>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="relative pt-48">
          <div className="absolute top-0 left-0 w-full h-[807px]">
            <Image
              src="/images/figma-1/ripped-paper-divider.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative bg-[#0C1A44] pt-64 pb-32 px-12">
            <div className="max-w-[1340px] mx-auto">
              <div className="grid grid-cols-3 gap-16 mb-16">
                {/* Logo and Learn More */}
                <div>
                  <Image
                    src="/images/figma-1/noble-logo.svg"
                    alt="Noble"
                    width={176}
                    height={48}
                    className="mb-8 invert"
                  />
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#94C0E3] mb-10">
                    Learn More
                  </h3>
                  <div className="flex flex-col gap-10">
                    <a
                      href="#plan"
                      className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#FAF9F6]"
                    >
                      PLAN
                    </a>
                    <a
                      href="#coverage"
                      className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#FAF9F6]"
                    >
                      COVERAGE
                    </a>
                    <a
                      href="#how-it-works"
                      className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#FAF9F6]"
                    >
                      HOW IT WORKS
                    </a>
                    <a
                      href="#whats-noble"
                      className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#FAF9F6]"
                    >
                      WHAT&apos;S NOBLE
                    </a>
                    <a
                      href="#login"
                      className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#FAF9F6]"
                    >
                      LOGIN
                    </a>
                    <a
                      href="#join"
                      className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#FAF9F6]"
                    >
                      JOIN NOBLE
                    </a>
                  </div>
                </div>

                {/* Stay in Touch */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#94C0E3] mb-8">
                    STAY IN TOUCH
                  </h3>
                  <div className="flex gap-6">
                    <a href="#" aria-label="Instagram">
                      <Image
                        src="/images/figma-1/instagram.svg"
                        alt=""
                        width={23}
                        height={23}
                        className="invert"
                      />
                    </a>
                    <a href="#" aria-label="Facebook">
                      <Image
                        src="/images/figma-1/facebook.svg"
                        alt=""
                        width={13}
                        height={23}
                        className="invert"
                      />
                    </a>
                    <a href="#" aria-label="X">
                      <Image
                        src="/images/figma-1/x-twitter.svg"
                        alt=""
                        width={21}
                        height={20}
                        className="invert"
                      />
                    </a>
                    <a href="#" aria-label="TikTok">
                      <Image
                        src="/images/figma-1/tiktok.svg"
                        alt=""
                        width={20}
                        height={23}
                        className="invert"
                      />
                    </a>
                    <a href="#" aria-label="YouTube">
                      <Image
                        src="/images/figma-1/youtube.svg"
                        alt=""
                        width={25}
                        height={19}
                        className="invert"
                      />
                    </a>
                  </div>
                </div>

                {/* Contact Us */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.6px] text-[#94C0E3] mb-8">
                    CONTACT US
                  </h3>
                  <p className="text-base leading-[1.5] text-[#FAF9F6]">
                    1 (800) 000-0000
                    <br />
                    Available daily,
                    <br />9 AM- 7PM ET
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
