"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WillCaseStudy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@bineet.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-white min-h-screen font-sans">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full flex flex-col"
      >
        {/* Section 1: Hero */}
        <section className="max-w-[994px] mx-auto w-full px-5 md:px-0">
          {/* Top Nav */}
          <motion.div variants={fadeInUp} className="flex justify-between items-center w-full mb-16 mt-12">
            <a href="/#projects" className="flex items-center gap-4 text-zinc-500 hover:text-zinc-900 transition-colors group">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-[#F4F4F4] rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
              <span className="text-sm md:text-[20px] font-normal leading-none">
                Back to Projects
              </span>
            </a>
            <a href="/" className="px-5 py-2 text-sm md:px-8 md:py-3 md:text-[20px] border border-zinc-200 rounded-[20px] font-normal text-black hover:bg-[#F4F4F4] transition-colors leading-none shrink-0">
              Home
            </a>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-[36px] md:text-[64px] font-normal leading-tight text-black mb-6 md:mb-12"
          >
            UX Case Study : WILL
          </motion.h1>

          {/* Image */}
          <motion.div 
            variants={fadeInUp}
            className="w-full h-[250px] sm:h-[300px] md:h-[460px] rounded-[32px] overflow-hidden mb-12 bg-[#F4F4F4] relative"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                src="/images/will-image-1.png"
                alt="UX Case Study : WILL"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            variants={fadeInUp}
            className="text-[20px] md:text-[32px] font-normal leading-tight text-black max-w-[850px] pb-12 md:pb-24"
          >
            How do you design an app connecting India's busiest users to its least literate workforce?
          </motion.p>
        </section>

        {/* Section 2: What is WILL? */}
        <section className="max-w-[994px] mx-auto w-full px-5 md:px-0">
          <motion.div variants={fadeInUp} className="flex justify-between items-center w-full mb-8">
            <h2 className="text-[32px] text-black font-normal leading-tight">What is WILL?</h2>
            <a href="https://www.figma.com/proto/lfwa1QNC1O9rpavVkhf7vk/Will----Define?node-id=188-1005&p=f&viewport=-24%2C-434%2C0.1&t=nomB2KN7WcgZfLoY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=216%3A669&page-id=134%3A1295" target="_blank" rel="noopener noreferrer" className="border border-zinc-200 rounded-[20px] px-4 py-2 text-sm md:px-6 md:py-2 text-black hover:bg-[#F4F4F4] transition-colors">
              View prototype
            </a>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-[18px] text-zinc-600 max-w-[800px] flex flex-col gap-6 pb-24 leading-relaxed">
            <p>
              WILL is a two-sided service marketplace connecting urban Indian professionals with daily wage workers like masonry workers & labourers.
            </p>
            <p>
              The platform required two separate apps designed simultaneously: one for the customer booking a service, one for the worker receiving the job.
            </p>
            <p>
              The challenge wasn't just designing an app. It was designing trust, for a customer who's never let a stranger into his home, and a worker who's been underpaid his entire life.
            </p>
          </motion.div>
        </section>

        {/* Section 3: Project Overview */}
        <motion.section variants={fadeInUp} className="w-full bg-[#F4F4F4] py-20">
          <div className="max-w-[994px] mx-auto w-full px-5 md:px-0">
            <h2 className="text-[32px] text-black font-normal leading-tight mb-12">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-[16px] text-black">
              <div>
                <p className="text-zinc-500 mb-2">Project Duration :</p>
                <p>2 weeks</p>
              </div>
              <div>
                <p className="text-zinc-500 mb-2">Role:</p>
                <p>UX Designer - Research, IA, User Flows, Wireframes, Prototype.</p>
              </div>
              <div>
                <p className="text-zinc-500 mb-2">Tools:</p>
                <p>Figma, FigJam, Adobe Creative Suite</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: The Problem */}
        <motion.section variants={fadeInUp} className="max-w-[994px] mx-auto w-full py-24 px-5 md:px-0 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-[400px] h-auto aspect-video md:h-[260px] shrink-0 rounded-2xl overflow-hidden bg-[#F4F4F4] relative">
            <img src="/images/chowk.png" alt="The Problem" className="w-full h-full object-cover absolute inset-0" />
          </div>
          <div className="w-full flex flex-col text-left">
            <h2 className="text-[32px] text-black font-normal leading-tight mb-6">The Problem</h2>
            <p className="text-[18px] text-zinc-600 leading-relaxed">
              Every morning, skilled workers in Indian cities walk to a chowk and wait. They wait hoping someone has a job for them. Meanwhile, across the city, a software engineer discovers his roof has cracks and is leaking. He searches online, calls numbers off walls. After three days of no progress, he takes a leave from work — and goes to the same chowk to find someone who can fix it.
            </p>
          </div>
        </motion.section>
        {/* Section 5: Problem Statement & Personas */}
        <motion.section variants={fadeInUp} className="max-w-[994px] mx-auto w-full flex flex-col gap-6 pb-24 px-5 md:px-0">
          <h3 className="text-[32px] font-normal text-black mt-16 mb-8">Problem Statement & User Personas</h3>

          {/* Box 1 (2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-[#F4F4F4] rounded-[24px] p-6 md:p-12 w-full">
              <h4 className="text-[24px] font-normal mb-6 text-black">User/Customer : Sanjay</h4>
              <p className="text-[16px] text-zinc-600 leading-relaxed">No reliable, trust-verified way to book skilled workers on demand.</p>
            </div>
            <div className="bg-[#F4F4F4] rounded-[24px] p-6 md:p-12 w-full">
              <h4 className="text-[24px] font-normal mb-6 text-black">Worker : Vinod</h4>
              <p className="text-[16px] text-zinc-600 leading-relaxed">No consistent, fair way to find daily work without being underpaid.</p>
            </div>
          </div>

          {/* Box 2 (How Might We) */}
          <div className="bg-[#F4F4F4] rounded-[24px] p-6 md:p-12 w-full">
            <h4 className="text-[24px] font-normal mb-6 text-black">How Might We:</h4>
            <div className="flex flex-col gap-3 text-zinc-600 text-[16px] leading-relaxed">
              <p>Q. HMW help Sanjay trust a worker he's never met before letting them into his home?</p>
              <p>Q. HMW ensure Vinod gets paid exactly what was agreed — every time?</p>
              <p>Q. HMW make the booking experience work for someone who can't read English?</p>
              <p>Q. HMW reduce the risk of no-shows on both sides?</p>
              <p>Q. HMW design two completely different experiences that still form one seamless transaction?</p>
            </div>
          </div>

          {/* Box 3 (Understanding the Users) */}
          <div className="bg-[#F4F4F4] rounded-[24px] p-6 md:p-12 w-full">
            <h4 className="text-[24px] font-normal mb-6 text-black">Understanding the Users:</h4>
            
            <p className="text-[16px] text-zinc-600 leading-relaxed">
              <strong className="text-black font-semibold">Sanjay Mehta — The Customer (Software Engineer, 29, Bangalore)</strong><br/><br/>
              Sanjay is busy, digitally comfortable, and used to solving problems with his phone. When something breaks at home, he wants it fixed fast — without taking a day off work or letting an unverified stranger into his apartment.<br/>
              Current behaviour: Googles services, calls random numbers, asks colleagues for referrals. Core anxiety: Can I trust this person in my home? Core goal: Book a verified, skilled worker quickly without disrupting his workday. <strong className="text-black font-semibold">Quote: "I just need to know the person coming to my house is legit."</strong>
            </p>

            <div className="mt-8"></div>

            <p className="text-[16px] text-zinc-600 leading-relaxed">
              <strong className="text-black font-semibold">Vinod Kumar — The Worker (Electrician, 34, Mumbai)</strong><br/><br/>
              Vinod is skilled, experienced, and entirely dependent on word of mouth and the chowk for daily work. Some days are good. Most are unpredictable. He's been underpaid, given less than agreed, and has no way to prove his worth beyond showing up.<br/>
              Current behaviour: Goes to the chowk daily, relies on repeat clients and referrals. Core anxiety: Will I get paid what was promised? Core goal: Consistent, fairly paid work — without depending on luck every morning. <strong className="text-black font-semibold">Quote: "I do the work. Getting paid what we agreed is another fight."</strong>
            </p>
          </div>

          {/* Box 4 (Journey Maps) */}
          <div className="bg-[#F4F4F4] rounded-[24px] p-6 md:p-12 w-full">
            <h4 className="text-[24px] font-normal mb-6 text-black">Journey Maps:</h4>
            <div className="flex flex-col gap-6 text-[16px] text-zinc-600 leading-relaxed">
              <p>
                Sanjay's Arc: Notices problem → Searches online → Calls unreliable numbers → Waits with no updates → Takes leave from work → Lets a stranger in with no verification → Pays cash, no record<br/>
                Low points: No trust signals. No transparency. No accountability.
              </p>
              <p>
                Vinod's Arc: Wakes up early → Goes to chowk → Waits with no certainty → Gets a job (or doesn't) → Travels to site → Does the work → Gets paid less than agreed with no recourse<br/>
                Low points: No consistency. No protection. No dignity.
              </p>
              <p>Every negative emotion in these journey maps became a design question.</p>
            </div>
          </div>

          {/* Box 5 (Information Architecture) */}
          <div className="bg-[#F4F4F4] rounded-[24px] p-6 md:p-12 w-full">
            <h4 className="text-[24px] font-normal mb-6 text-black">Information Architecture of WILL:</h4>
            <p className="text-[16px] text-zinc-600 leading-relaxed">
              WILL required two separate information architectures — one per user type. Designing one without the other would break the transaction.
            </p>

            <div className="mt-8 w-full bg-[#111111] text-zinc-300 p-8 rounded-2xl overflow-x-auto overflow-y-auto max-h-[500px] text-[13px] leading-relaxed font-mono whitespace-pre custom-scrollbar">
{`WILL (Customer App)
│
├── 1. Onboarding
│   ├── Splash Screen
│   ├── Sign Up / Log In
│   ├── OTP Verification
│   ├── Basic Profile Setup
│   ├── Location Selection
│   └── Role Selection (Customer / Worker)
│
├── 2. Home
│   ├── Location Display
│   ├── Search Bar (Explore Services)
│   ├── Active Booking Card (conditional)
│   ├── Service Categories
│   │   ├── Masonry
│   │   ├── Cleaning
│   │   ├── Plumbing
│   │   ├── Electrician
│   │   ├── Gardening
│   │   └── See All
│   └── Top Reasons to Choose WILL (Trust Banner)
│
├── 3. Service Detail
│   ├── Service Image
│   ├── Social Proof Tag ("X people booked in last 24hrs")
│   ├── Service Name + Rating + Reviews Count
│   ├── About Tab
│   │   ├── About Service Description
│   │   └── How WILL Works (process diagram)
│   ├── Review Tab
│   │   ├── User Reviews List
│   │   └── View All Reviews
│   ├── Starting Price Display
│   └── Book Now CTA
│
├── 4. Booking Flow
│   ├── 4.1 Help Workers Understand the Task
│   │   ├── Select Work Type (Dropdown)
│   │   │   └── Other → Text Input
│   │   ├── Describe the Problem (Optional)
│   │   │   ├── Upload Photo
│   │   │   ├── Voice Note
│   │   │   └── Text Input
│   │   ├── Number of Workers Selector
│   │   └── Next CTA
│   ├── 4.2 When Should We Start?
│   │   ├── Hourly / Daily Toggle
│   │   ├── Arrival Time Selector
│   │   ├── Date Picker (7-day max)
│   │   ├── Duration Slider (if Hourly)
│   │   ├── Work Location (auto-filled, changeable)
│   │   ├── Estimated Total Display
│   │   └── Confirm CTA
│   ├── 4.3 Secure Your Booking (₹20 Fee)
│   │   ├── 100% Refundable Badge
│   │   ├── Review Booking Details
│   │   ├── Total Amount Display
│   │   ├── Add Tip Options (+50 / +100 / Custom)
│   │   ├── Payment Method Selector (UPI / Cards / Paytm)
│   │   ├── Booking Fee Display (₹20)
│   │   └── Pay Now CTA
│   └── 4.4 Searching State
│       ├── "Notifying Workers Near You" Header
│       ├── Live Map with Radius Animation
│       ├── Countdown Timer (30 min max)
│       ├── View Booking Details (expandable)
│       ├── High Demand / Status Message
│       └── Cancel Search CTA
│
├── 5. Active Booking
│   ├── 5.1 Worker Assigned
│   │   ├── Confirmation Header + Checkmark
│   │   ├── Worker Profile Card
│   │   ├── Message / Call / More Actions
│   │   ├── Work Details Card
│   │   ├── Total Amount Due Display
│   │   └── Track Status CTA
│   ├── 5.2 Track Status
│   │   ├── Progress Bar
│   │   ├── Arrival OTP Display
│   │   ├── Worker Card
│   │   └── Work Complete → Pay Now CTA
│   └── 5.3 Payment & Completion
│       ├── "Your Work is Complete" Header
│       ├── Amount Due Display
│       ├── Payment Method Selector
│       └── Pay Now CTA
│
├── 6. Booking Complete
│   ├── Payment Confirmation
│   ├── Thank You Message
│   ├── Rate Your Experience
│   └── Go to Home CTA
│
├── 7. Bookings
├── 8. Profile
└── 9. Settings

WILL (Worker App)
│
├── 1. Onboarding
│   ├── Splash Screen
│   ├── Sign Up / Log In
│   ├── OTP Verification
│   ├── Role Selection (Customer / Worker)
│   ├── Profile Setup
│   └── Skill & Document Setup
│       ├── Select Skills
│       ├── Experience (years)
│       └── Document Upload ([ID Redacted] etc.)
│
├── 2. Home (होम)
│   ├── Location Display
│   ├── Online / Offline Toggle
│   ├── Active Job Card (conditional)
│   └── Incoming Job Notification (overlay)
│       ├── Amount (large, prominent)
│       ├── Tip Display
│       ├── Job Type + Icon
│       ├── Location + Distance
│       ├── Voice Note Button
│       ├── Reject Button
│       └── Accept Button
│
├── 3. Job Flow
│   ├── 3.1 काम स्वीकृत (Job Accepted)
│   ├── 3.2 Job Detail (Active)
│   │   ├── Job Type Header (Hindi)
│   │   ├── Date & Expected Completion Time
│   │   ├── Customer Name
│   │   ├── Amount Display
│   │   ├── Work Location + Direction Button
│   │   ├── Call / Message Customer
│   │   ├── "मैं पहुँच गया हूँ" CTA (Arrival)
│   │   └── Arrival OTP Entry (4-digit)
│   └── 3.3 Job Completion
│       ├── "काम पूरा हुआ - भुगतान मांगे" CTA
│       ├── Completion OTP Entry (4-digit)
│       └── काम पूरा हुआ Screen
│
├── 4. Work (काम)
├── 5. पैसा हिसाब (Transactions)
├── 6. Profile (प्रोफाइल)
└── 7. Settings (सेटिंग)`}
            </div>
          </div>
        </motion.section>

        {/* Section 6: Key Decisions */}
        <section className="w-full bg-[#F4F4F4] py-32">
          <div className="max-w-[1100px] mx-auto w-full px-5">
            <h2 className="text-[48px] font-normal text-black mb-24 text-center">Key Decisions</h2>

            {/* Decision 01 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 md:mb-32 relative">
              <div className="w-full md:w-1/2">
                <img src="/images/decision-1.png" alt="Decision 01" className="object-contain w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                <span className="absolute -top-6 -left-2 md:-top-10 md:-left-10 text-[80px] md:text-[140px] font-bold text-zinc-50 z-0 leading-none select-none">01</span>
                <div className="relative z-10">
                  <h3 className="text-[20px] md:text-[24px] text-black mb-6">Decision 01: Two Separate Apps</h3>
                  <p className="text-[16px] font-medium text-black mb-2">The decision: Build a dedicated customer app & a dedicated worker app.</p>
                  <p className="text-[16px] text-zinc-500 leading-relaxed">Why: A single app causes heavy cognitive load. Keeping them separate allows for distinct UI/UX, different mental models, and targeted language settings for the worker demographic.</p>
                </div>
              </div>
            </div>

            {/* Decision 02 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 mb-20 md:mb-32 relative">
              <div className="w-full md:w-1/2">
                <img src="/images/decision-2.png" alt="Decision 02" className="object-contain w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                <span className="absolute -top-6 -left-2 md:-top-10 md:-left-10 text-[80px] md:text-[140px] font-bold text-zinc-50 z-0 leading-none select-none">02</span>
                <div className="relative z-10">
                  <h3 className="text-[20px] md:text-[24px] text-black mb-6">Decision 02: Hindi/Voice Navigation</h3>
                  <p className="text-[16px] font-medium text-black mb-2">The decision: Worker app defaults to Hindi with voice readouts for core actions.</p>
                  <p className="text-[16px] text-zinc-500 leading-relaxed">Why: A vast portion of our target demographic has low literacy. A text-heavy UI is non-functional. Voice and iconography allow users who can't read to still operate independently.</p>
                </div>
              </div>
            </div>

            {/* Decision 03 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 md:mb-32 relative">
              <div className="w-full md:w-1/2">
                <img src="/images/decision-3.png" alt="Decision 03" className="object-contain w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                <span className="absolute -top-6 -left-2 md:-top-10 md:-left-10 text-[80px] md:text-[140px] font-bold text-zinc-50 z-0 leading-none select-none">03</span>
                <div className="relative z-10">
                  <h3 className="text-[20px] md:text-[24px] text-black mb-6">Decision 03: ₹20 Booking Fee</h3>
                  <p className="text-[16px] font-medium text-black mb-2">The decision: Charge a nominal, 100% refundable booking fee.</p>
                  <p className="text-[16px] text-zinc-500 leading-relaxed">Why: Without financial commitment, customers cancel easily, wasting a wage worker's time. This fee ensures serious intent, while the refund guarantee protects the customer against no-shows.</p>
                </div>
              </div>
            </div>

            {/* Decision 04 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 mb-20 md:mb-32 relative">
              <div className="w-full md:w-1/2">
                <img src="/images/decision-4.png" alt="Decision 04" className="object-contain w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                <span className="absolute -top-6 -left-2 md:-top-10 md:-left-10 text-[80px] md:text-[140px] font-bold text-zinc-50 z-0 leading-none select-none">04</span>
                <div className="relative z-10">
                  <h3 className="text-[20px] md:text-[24px] text-black mb-6">Decision 04: Dual OTP System</h3>
                  <p className="text-[16px] font-medium text-black mb-2">The decision: Require an Arrival OTP and a Completion OTP.</p>
                  <p className="text-[16px] text-zinc-500 leading-relaxed">Why: The trust deficit is massive. The Arrival OTP verifies the worker before home entry. The Completion OTP authorizes payment only when the customer is satisfied. It creates a secure boundary.</p>
                </div>
              </div>
            </div>

            {/* Decision 05 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 md:mb-32 relative">
              <div className="w-full md:w-1/2">
                <img src="/images/decision-5.png" alt="Decision 05" className="object-contain w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                <span className="absolute -top-6 -left-2 md:-top-10 md:-left-10 text-[80px] md:text-[140px] font-bold text-zinc-50 z-0 leading-none select-none">05</span>
                <div className="relative z-10">
                  <h3 className="text-[20px] md:text-[24px] text-black mb-6">Decision 05: Automated Assignment</h3>
                  <p className="text-[16px] font-medium text-black mb-2">The decision: Connect users automatically based on verified skills rather than profile browsing.</p>
                  <p className="text-[16px] text-zinc-500 leading-relaxed">Why: In traditional models, customers may discriminate based on photos or names. Automatic assignment removes bias, ensures equal opportunity for verified workers, and speeds up booking.</p>
                </div>
              </div>
            </div>

            {/* Decision 06 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 relative">
              <div className="w-full md:w-1/2">
                <img src="/images/decision-6.png" alt="Decision 06" className="object-contain w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center relative">
                <span className="absolute -top-6 -left-2 md:-top-10 md:-left-10 text-[80px] md:text-[140px] font-bold text-zinc-50 z-0 leading-none select-none">06</span>
                <div className="relative z-10">
                  <h3 className="text-[20px] md:text-[24px] text-black mb-6">Decision 06: Visual Process Diagrams</h3>
                  <p className="text-[16px] font-medium text-black mb-2">The decision: Show a step-by-step visual diagram before booking commitment.</p>
                  <p className="text-[16px] text-zinc-500 leading-relaxed">Why: To lower anxiety. Users need to know exactly what happens after they hit 'Book'. Visual roadmaps answer unspoken questions and build trust instantly.</p>
                </div>
              </div>
            </div>

            {/* The Final Quote Section */}
            <div className="w-full max-w-[800px] mx-auto text-center border-t border-zinc-200 mt-16">
              <p className="text-[24px] md:text-[40px] font-normal leading-tight text-black px-5 py-16 md:py-24">
                "WILL is the first system that connects Sanjay (the user) & Vinod (the Worker) & protects simultaneously."
              </p>
            </div>
          </div>
        </section>

      </motion.div>
      {/* Footer */}
      <footer className="relative z-10 w-full bg-zinc-950 overflow-hidden py-32 md:py-40">
        <div className="mx-auto max-w-6xl px-5 md:px-12">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Left Column - CTA */}
            <div>
              <h3 
                className="text-2xl font-normal text-white md:text-3xl lg:text-4xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                I'm available for new opportunities.
              </h3>
              
              {/* Email Input */}
              <div>
                <a
                  href="mailto:hello@bineet.in"
                  className="inline-flex md:hidden items-center justify-center w-fit px-8 py-4 mt-8 bg-black border border-zinc-600 rounded-2xl text-zinc-100 text-lg hover:bg-zinc-900 hover:border-zinc-400 transition-all cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  hello@bineet.in
                </a>
                <button
                  onClick={handleCopy}
                  className="hidden md:inline-flex items-center justify-center w-fit px-8 py-4 mt-8 bg-black border border-zinc-600 rounded-2xl text-zinc-100 text-lg hover:bg-zinc-900 hover:border-zinc-400 transition-all cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {copied ? "Email copied!" : "hello@bineet.in"}
                </button>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {/* Links Column 1 */}
              <nav className="flex flex-col gap-4 items-start">
                <a
                  href="mailto:hello@bineet.in"
                  className="block md:hidden text-sm text-zinc-400 transition-colors hover:text-white md:text-base text-left"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email
                </a>
                <button
                  onClick={handleCopy}
                  className="hidden md:block text-sm text-zinc-400 transition-colors hover:text-white md:text-base text-left"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {copied ? "Copied!" : "Email"}
                </button>
                <a
                  href="https://www.linkedin.com/in/bineet-barthwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  LinkedIn
                </a>
                <a
                  href="/bineet-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Resume
                </a>
              </nav>

              {/* Links Column 2 */}
              <nav className="flex flex-col gap-4">
                <a
                  href="/#home"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Home
                </a>
                <a
                  href="/#projects"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Projects
                </a>
                <a
                  href="/#about"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  About
                </a>
                <a
                  href="/#skills"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Skills
                </a>
                <a
                  href="/privacy"
                  className="text-sm text-zinc-400 transition-colors hover:text-white md:text-base"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
