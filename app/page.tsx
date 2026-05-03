import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoachAI — Your AI Coaching Assistant",
  description: "The AI agent built for certified coaches. Automate client follow-ups, session notes, and progress tracking.",
};

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <div className="text-xl font-bold text-white">CoachAI</div>
      <div className="flex gap-4 items-center">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
          For ICF-Certified Coaches
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Your AI Coaching Assistant,<br />
          <span className="text-blue-400">Available 24/7</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Automate client follow-ups, generate session notes, track progress, and deliver better outcomes — 
          all while your AI handles the administrative work.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#pricing" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition">
            Start Free Trial
          </a>
          <a href="#demo" className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition">
            See Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Session Notes Auto-Generated",
      desc: "After every call, your AI compiles key insights, action items, and client reflections — ready to review in seconds.",
      icon: "📝",
    },
    {
      title: "Client Follow-Up Automation",
      desc: "Set it and forget it. Your AI sends check-ins, resources, and reminders between sessions automatically.",
      icon: "💬",
    },
    {
      title: "Progress Tracking Dashboard",
      desc: "Visual timeline of each client's journey. Goals, milestones, and mood trends all in one place.",
      icon: "📊",
    },
    {
      title: "Coaching Framework Library",
      desc: "GROW, CLEAR, AIWA — layer in structured frameworks and your AI applies them contextually.",
      icon: "🧭",
    },
  ];

  return (
    <section className="px-6 py-20 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Built for Professional Coaches</h2>
        <p className="text-gray-400 text-center mb-12">Everything you need to scale your practice without burning out.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoChat() {
  return (
    <section id="demo" className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Try CoachAI</h2>
        <p className="text-gray-400 text-center mb-8">See how it works — start a conversation below.</p>
        <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
          <div className="bg-gray-900 px-4 py-3 border-b border-gray-700 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-xs text-gray-500">CoachAI Demo</span>
          </div>
          <div className="p-6 space-y-4 h-80 overflow-y-auto">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">C</div>
              <div className="bg-gray-700 rounded-lg p-3 text-gray-200 text-sm max-w-md">
                Hi Sarah, great session yesterday! I've drafted your session notes — want me to send them to you now?
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-blue-600 rounded-lg p-3 text-white text-sm max-w-md">
                Yes please! And can you add a reminder for the mindfulness exercise I recommended?
              </div>
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold shrink-0">Y</div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">C</div>
              <div className="bg-gray-700 rounded-lg p-3 text-gray-200 text-sm max-w-md">
                Done! I've sent your session notes and scheduled a reminder for Monday. Also, I've updated your progress tracker — you've hit 3 of your 5 Q2 goals!
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask CoachAI anything..."
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 bg-gray-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, Scalable Pricing</h2>
        <p className="text-gray-400 mb-12">Start free. Scale when you're ready.</p>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-blue-500/30 max-w-md mx-auto">
          <div className="text-blue-400 font-medium mb-2">Professional</div>
          <div className="text-5xl font-bold text-white mb-1">$79<span className="text-xl text-gray-400">/mo</span></div>
          <p className="text-gray-400 text-sm mb-6">Billed monthly · Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {["Unlimited coaching sessions", "50 client profiles", "Automated follow-ups", "Session notes generation", "Progress tracking", "Email support"].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-green-400">✓</span> {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition">
            Start 14-Day Free Trial
          </button>
          <p className="text-gray-500 text-xs mt-3">No credit card required</p>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="px-6 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-500 text-sm mb-4">Trusted by coaches worldwide</p>
        <div className="flex justify-center gap-8 text-gray-600">
          <span className="text-white font-semibold">ICF</span>
          <span className="text-white font-semibold">CCA</span>
          <span className="text-white font-semibold">EMCC</span>
        </div>
        <div className="mt-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700 max-w-xl mx-auto">
          <p className="text-gray-300 italic mb-4">
            "CoachAI cut my admin time by 60%. I can focus on what matters — my clients."
          </p>
          <p className="text-gray-500 text-sm">— Life Coach, Sydney</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-gray-800 text-center">
      <p className="text-gray-500 text-sm">© 2026 CoachAI. Built for certified coaches.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-950 text-gray-100 font-sans min-h-screen">
          <NavBar />
          <Hero />
          <SocialProof />
          <Features />
          <DemoChat />
          <Pricing />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}