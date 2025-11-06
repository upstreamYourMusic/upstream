export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#4777c8] to-white text-gray-800">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Get Real Feedback. Grow Your Music.
        </h1>
        <p className="text-lg text-gray-100 max-w-2xl mb-8">
          Upstream connects artists with real curators and pros who listen and respond — not bots.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-[#4777c8] px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Submit Your Track
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#4777c8] transition">
            Join as a Curator
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {title: 'Upload Your Song', text: 'Drop your track and tell us what kind of feedback you want.'},
            {title: 'Get Reviewed', text: 'Curators give feedback within 72 hours.'},
            {title: 'Grow', text: 'Use honest insight to level up your music.'}
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#4777c8] rounded-full" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 h-64 rounded-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Artists & Curators Love Upstream</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Fast, honest feedback from real people</li>
              <li>• Earn cash as a curator</li>
              <li>• Easy-to-use submission system</li>
              <li>• Scalable opportunities for exposure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {tier: 'Starter', price: '$5', desc: 'per track'},
            {tier: 'Pro', price: '$10', desc: 'priority review'},
            {tier: 'Premium', price: '$20', desc: 'fast review + top curators'}
          ].map((plan, i) => (
            <div key={i} className="border rounded-2xl shadow-sm p-8 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{plan.tier}</h3>
              <p className="text-4xl font-bold text-[#4777c8] mb-2">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.desc}</p>
              <button className="bg-[#4777c8] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Submit Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#4777c8] text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Start your next release the smart way.</h2>
        <button className="bg-white text-[#4777c8] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
          Submit Your Track
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">Upstream</h3>
            <p className="text-sm">Empowering artists and curators through real feedback.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Follow</h4>
            <p className="text-sm">Social icons here</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
