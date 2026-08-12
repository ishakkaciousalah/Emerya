function Hero2() {
    return (
        <>
        <section
  id="services"
  className="bg-white px-6 py-24 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="mx-auto mb-16 max-w-2xl text-center">

      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
        Nos prestations
      </p>

      <h2 className="text-4xl font-light text-neutral-900 md:text-5xl">
        Prenez soin de <span className="font-semibold">vous.</span>
      </h2>

      <p className="mt-5 text-base leading-relaxed text-neutral-500 md:text-lg">
        Découvrez nos soins et prestations pensés pour révéler
        votre beauté et vous offrir un véritable moment de bien-être.
      </p>

    </div>

    {/* Services */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {/* Service 1 */}
      <div className="group overflow-hidden rounded-3xl bg-[#f8f5f0]">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
            alt="Coiffure"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Beauté
          </p>

          <h3 className="text-2xl font-semibold text-neutral-900">
            Coiffure
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Coupes, brushing et coiffures adaptées à votre style.
          </p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="group overflow-hidden rounded-3xl bg-[#f8f5f0]">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
            alt="Soin du visage"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Bien-être
          </p>

          <h3 className="text-2xl font-semibold text-neutral-900">
            Soin du visage
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Des soins adaptés pour une peau fraîche et éclatante.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="group overflow-hidden rounded-3xl bg-[#f8f5f0]">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
            alt="Manucure"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Élégance
          </p>

          <h3 className="text-2xl font-semibold text-neutral-900">
            Manucure & Pédicure
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Sublimez vos mains et vos pieds avec nos soins beauté.
          </p>
        </div>
      </div>

      {/* Service 4 */}
      <div className="group overflow-hidden rounded-3xl bg-[#f8f5f0]">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
            alt="Maquillage"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Beauté
          </p>

          <h3 className="text-2xl font-semibold text-neutral-900">
            Maquillage
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Un maquillage élégant adapté à chaque occasion.
          </p>
        </div>
      </div>

      {/* Service 5 */}
      <div className="group overflow-hidden rounded-3xl bg-[#f8f5f0]">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
            alt="Soins beauté"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Détente
          </p>

          <h3 className="text-2xl font-semibold text-neutral-900">
            Soins & Bien-être
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Un moment de détente dans un environnement apaisant.
          </p>
        </div>
      </div>

      {/* Service 6 */}
      <div className="group overflow-hidden rounded-3xl bg-[#f8f5f0]">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
            alt="Brushing et coiffage"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Style
          </p>

          <h3 className="text-2xl font-semibold text-neutral-900">
            Brushing & Coiffage
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Une finition soignée pour un look élégant et naturel.
          </p>
        </div>
      </div>

    </div>

    {/* Bouton */}
    <div className="mt-14 text-center">
      <a
        href="#contact"
        className="inline-block rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-700"
      >
        Prendre rendez-vous
      </a>
    </div>

  </div>
</section>
        
        </>
    )
}export default Hero2