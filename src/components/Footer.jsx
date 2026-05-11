function Footer() {
  return (
    <footer className="bg-black text-white py-16 mt-20 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-gradient)]">

      <div className="container-custom grid md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            DermaNerd
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Smart skincare discovery platform helping users understand and improve their skin.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white text-black outline-none"
            />

            <button className="bg-(--text-dark) text-black px-6 rounded-full font-medium">
              Join
            </button>
          </div>

        </div>

      </div>

      <div className="container-custom mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 DermaNerd. All rights reserved.
      </div>

    </footer>
  )
}
export default Footer