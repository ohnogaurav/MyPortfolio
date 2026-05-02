"use client";

import Image from "next/image";
import Link from "next/link";

export default function BeMePage() {
  const timeline = [
    { year: null, text: "Be me, 0 (2003)" },
    { year: "2009", text: "get a computer, play FarmVille, get bored" },
    { year: "2014", text: "spend the entire summer at my dad's startup (a smart watch with no digital screens), get into Arduinos and ECE" },
    { year: "2015", text: "track runner + school football team captain" },
    { year: "2017", text: "work ass off to join one of the finest schools in India" },
    { year: "2018", text: "spend summer break teaching kids how to code, make $150" },
    { year: null, text: "10th grade boards (92.2%)" },
    { year: "2019", text: "become VP of school's CS + Entrepreneurship club, lead teams and win hackathons + pitching events" },
    { year: null, text: "academic rebel, miss all PCM classes and JEE coaching to build 7 iterations of krishgoel.com and party" },
    { year: null, text: "drop out of Python at school, take up physical education to play football all day" },
    { year: "2020", text: "covid hit, school's online" },
    { year: null, text: "miss all online classes and learn RL" },
    { year: null, text: "launch a clothing brand to battle fast fashion with 2 friends, fail miserably" },
    { year: null, text: "no hopes of going to college" },
    { year: null, text: "teach cousin and 5 kids Python online" },
    { year: null, text: "build a smart mirror with temperature detection for public spaces aftermath of the pandemic" },
    { year: "2021", text: "second wave hits" },
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
