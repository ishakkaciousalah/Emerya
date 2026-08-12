function Hero1() {
    return (
        <>
         <section
        id="accueil"
        className="min-h-screen bg-[#f8f5f0] px-6 pt-24"
      >
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Texte */}
          <div className="max-w-xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              Salon de beauté
            </p>

            <h1 className="text-5xl font-light leading-tight text-neutral-900 md:text-7xl">
              Votre beauté,
              <br />
              <span className="font-semibold">notre savoir-faire.</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
              Découvrez l'univers Emerya, un espace dédié à votre beauté,
              votre élégance et votre bien-être.
            </p>

            {/* Boutons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-neutral-700"
              >
                Prendre rendez-vous
              </a>

              <a
                href="#services"
                className="rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-medium text-neutral-800 transition duration-300 hover:bg-neutral-100"
              >
                Découvrir nos services
              </a>

            </div>
          </div>

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                alt="Salon de beauté Emerya"
                className="h-[550px] w-full object-cover md:h-[650px]"
              />
            </div>

            {/* Petit élément décoratif */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-6 py-5 shadow-lg md:block">
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Bienvenue chez
              </p>

              <p className="mt-1 text-xl font-semibold tracking-widest text-neutral-900">
                EMERYA
              </p>
            </div>

          </div>

        </div>
      </section>
        </>
    )
}export default Hero1