"use client";

import Image from "next/image";
import Link from "next/link";

export default function BeMePage() {
  const timeline = [
    { year: null, text: "Be me, 0 (2002)" },
    { year: "2012", text: "use a computer for the first time, play GTA San Andreas, get hooked on computers, no going back" },
    { year: "2013", text: "start swimming seriously, train across styles, build endurance, set a 25m underwater one-breath PR" },
    { year: "2015", text: "get first Android phone, experience the internet properly, curiosity around systems begins" },
    { year: "2016", text: "move to Kolkata, meet Sayan, get introduced to hacking, Linux, and learning by breaking things, start thinking differently, solve a Rubik’s cube" },
    { year: "2017", text: "become Senior Sports Captain at Kendriya Vidyalaya, Kankinara, handle responsibility early, learn leadership basics" },
    { year: "2018", text: "score 86.6% in 10th boards, get first laptop, choose science to understand computers deeply, discover Python, struggle but stay curious" },
    { year: "2019", text: "enter script-kiddie phase, write automation scripts and keyloggers, experiment without fear, learn through mistakes, necessary chaos phase" },
    { year: "2020", text: "become 'Python Bhaiya' in school, covid hits, shift online, adapt to isolation, learn typing (70 WPM) and Morse code out of boredom" },
    { year: "2021", text: "score 89% in 12th boards, second wave hits, go academic rebel, skip PCM and JEE coaching" },
    { year: null, text: "build clothing brand with Lokesh, fail miserably, assume college might not happen" },
    { year: null, text: "start teaching 5 neighborhood kids (computers, math, science), earn first ₹10,000, confidence comes back" },
    { year: "2022", text: "travel solo, learn independence the hard way, step out of comfort zone" },
    { year: null, text: "join LPU Jalandhar for Computer Science, new environment, first year 7.45 TGPA" },
    { year: null, text: "build websites with a friend, bunk classes, learn driving, still make Dean’s List (top 10%), balance chaos and output" },
    { year: "2023", text: "start gym, build discipline, learn Git and GitHub, shift from hoarding code to shipping" },
    { year: null, text: "second year 7.2 TGPA, trek first mountain (Charekh, Uttarakhand), fall in love with mountains" },
    { year: null, text: "start DSA and DAA, struggle with Java, keep going anyway" },
    { year: "2024", text: "join GitHub Student Developer Club, organize events, meet driven people, understand importance of network" },
    { year: null, text: "third year 7.95 TGPA, travel to Lansdowne, camp in mountains, find clarity" },
    { year: null, text: "explore data science and ML deeply, understand concepts properly" },
    { year: null, text: "participate in Smart India Hackathon, build Meal Minder, don’t qualify but learn a lot" },
    { year: "2025", text: "reach 8.0 TGPA, take DSA seriously, improve problem-solving mindset" },
    { year: null, text: "freelance in data annotation and code reviews, earn ₹15,000, discover Hugging Face, deploy first AI agent" },
    { year: null, text: "explore Flutter, Android Studio, APIs, apply to 150+ roles, face continuous rejection" },
    { year: null, text: "realize importance of research, write 1 paper under Dr Abdul Mallick" },
    { year: "2026", text: "start year with Himachal trip, trek to 13,000 ft, gain perspective" },
    { year: null, text: "reflect on journey, start building Aham — my virtual self" },
    { year: null, text: "go full-time, no excuses" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-xs font-mono tracking-widest text-white/60 hover:text-white transition-colors uppercase">
          gaurav.dev
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/60 hover:text-white transition-colors uppercase"
        >
          <span>←</span> Return
        </Link>
      </nav>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col px-8 md:px-14 lg:px-20 py-28 max-w-none lg:max-w-[55%] pt-20">
          <div className="relative pb-6">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black italic leading-none tracking-tight mb-6">
              be me
              <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#d4f200] ml-1 mb-2 align-middle" />
            </h1>

            <p className="text-white/40 text-xs md:text-sm font-mono leading-relaxed mb-10 max-w-sm">
              a short log of how i stopped using the world and started building it.
              <br />
              no jargon, just the trajectory.
            </p>
          </div>

          <div className="space-y-1.5 max-w-xl pb-20">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start gap-2 group">
                <span className="text-white/20 mt-0.5 shrink-0 text-[10px]">›</span>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                  {item.year && (
                    <span className="text-white/90 font-semibold mr-1">{item.year},</span>
                  )}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex-1 hidden lg:flex items-center justify-end sticky top-0 h-screen relative overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/banner.png"
              alt="Gaurav"
              fill
              className="object-cover object-bottom lg:object-right scale-125"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
