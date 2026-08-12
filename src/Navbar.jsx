function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">

        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
            E
          </div>

          <span className="text-xl font-semibold tracking-wide text-neutral-900">
            EMERYA
          </span>
        </a>

        {/* Menu mobile */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 md:hidden"
          aria-label="Ouvrir le menu"
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        {/* Navigation */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4 font-medium md:mt-0 md:flex-row md:items-center md:gap-8 md:p-0">

            <li>
              <a
                href="#accueil"
                className="text-sm text-neutral-900 transition hover:text-neutral-500"
              >
                Accueil
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="text-sm text-neutral-600 transition hover:text-neutral-900"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#apropos"
                className="text-sm text-neutral-600 transition hover:text-neutral-900"
              >
                À propos
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm text-neutral-600 transition hover:text-neutral-900"
              >
                Contact
              </a>
            </li>

           {/* WhatsApp */}
<li>
  <a
    href="https://wa.me/213553463608"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
  >
    WhatsApp
  </a>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;