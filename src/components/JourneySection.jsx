import { timeline } from '../data/journey'

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-cream/30 border-t border-latte/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-hand text-2xl text-coffee px-4 py-1.5 rounded-full bg-white inline-block mb-3 border border-latte/30">
            Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-roast">
            Brewing My Journey
          </h2>
          <p className="text-roast/70 text-sm mt-2">
            Education, practical experience, and the road ahead.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-latte/40 ml-4 md:ml-32 space-y-12">
          {timeline.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              <div
                className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full ${item.dotClass} border-4 border-white shadow`}
              />
              <div className="md:absolute md:-left-36 md:top-0 text-xs font-bold text-coffee uppercase tracking-wider mb-2 md:mb-0 md:text-right md:w-28">
                {item.date}
              </div>
              <div className="bg-white p-6 rounded-2xl border border-latte/30 shadow-sm hover:shadow-md transition">
                <span className="px-2.5 py-1 rounded bg-cream text-roast text-[10px] font-bold">
                  {item.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-roast mt-2">{item.title}</h3>
                <p className="text-xs text-coffee font-semibold mt-0.5">{item.organization}</p>
                <ul className="text-roast/70 text-xs leading-relaxed mt-3 list-disc list-inside space-y-1">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
