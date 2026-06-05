import Link from "next/link";

export default function LogosPage() {
  const logos = [
    { name: "AI Fest", file: "aifestlogo.svg" },
    { name: "CUBE", file: "cubelogo.svg" },
    { name: "AI Convergence", file: "AIconvergencelogo.svg" },
    { name: "Nari (SynHERgy)", file: "narilogo.svg" },
    { name: "Sandbox", file: "sandboxlogo.svg" }
  ];

  return (
    <main className="relative flex flex-col bg-white overflow-x-hidden w-full max-w-[100vw] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 w-full px-5 md:px-12">
        <div className="w-full max-w-6xl mx-auto">
          <Link
            href="/work?tab=Creative"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-[#1C1C1C] transition-colors group w-fit"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </span>
            <span className="font-medium text-sm md:text-base">Back to Work</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-5 md:px-12 flex flex-col items-center w-full">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-normal text-gray-900 md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-sans)' }}>
            Logo Design
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
            Crafting memorable brand identities through thoughtful logo design.
          </p>
        </div>
      </section>
      
      {/* Logos Grid */}
      <section className="relative z-10 flex w-full flex-col items-center px-5 md:px-12 pb-24">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {logos.map((logo) => (
              <div 
                key={logo.name} 
                className="group relative rounded-[20px] bg-white aspect-square border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer overflow-hidden bg-gray-50/50 p-6"
              >
                <img 
                  src={`/images/${logo.file}`} 
                  alt={logo.name} 
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
