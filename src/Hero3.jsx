import { useState } from "react";

function Hero3() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    service: "",
    date: "",
    heure: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Bonjour Emerya,

Je souhaite prendre un rendez-vous.

👤 Nom : ${formData.nom}
📱 Téléphone : ${formData.telephone}
💇 Service : ${formData.service}
📅 Date : ${formData.date}
🕐 Heure : ${formData.heure}

💬 Message :
${formData.message || "Aucun message"}

Merci.
`;

    const whatsappUrl = `https://wa.me/213553463608?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-[#f7f4ef] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* TITRE */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-400">
            Réservation
          </p>

          <h2 className="text-4xl font-light text-neutral-900 md:text-6xl">
            Prenez votre{" "}
            <span className="font-semibold">moment.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500">
            Réservez votre rendez-vous chez Emerya.
            Remplissez le formulaire et envoyez directement votre demande
            sur WhatsApp.
          </p>
        </div>

        {/* CONTENU */}
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2">

          {/* GAUCHE */}
          <div className="bg-neutral-900 p-8 text-white md:p-12">

            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              EMERYA
            </p>

            <h3 className="mt-8 text-3xl font-light leading-tight md:text-4xl">
              Votre beauté,
              <br />
              <span className="font-semibold">
                votre moment.
              </span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-neutral-400">
              Chaque rendez-vous est pensé pour vous offrir
              une expérience élégante, agréable et personnalisée.
            </p>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Téléphone
              </p>

              <p className="mt-2 text-sm">
                0553 46 36 08
              </p>
            </div>

            <a
              href="https://wa.me/213553463608"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-neutral-900"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* FORMULAIRE */}
          <div className="p-8 md:p-12">

            <h3 className="text-2xl font-semibold text-neutral-900">
              Réserver un rendez-vous
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* NOM */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nom complet
                </label>

                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none focus:border-neutral-900"
                />
              </div>

              {/* TELEPHONE */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Téléphone
                </label>

                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  placeholder="05 XX XX XX XX"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none focus:border-neutral-900"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Service
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none focus:border-neutral-900"
                >
                  <option value="">
                    Choisir un service
                  </option>

                  <option value="Coiffure">
                    Coiffure
                  </option>

                  <option value="Soin du visage">
                    Soin du visage
                  </option>

                  <option value="Manucure & Pédicure">
                    Manucure & Pédicure
                  </option>

                  <option value="Maquillage">
                    Maquillage
                  </option>

                  <option value="Soins & Bien-être">
                    Soins & Bien-être
                  </option>
                </select>
              </div>

              {/* DATE + HEURE */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Heure
                  </label>

                  <input
                    type="time"
                    name="heure"
                    value={formData.heure}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none focus:border-neutral-900"
                  />
                </div>

              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Une précision..."
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 outline-none focus:border-neutral-900"
                />
              </div>

              {/* BOUTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-neutral-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                Confirmer mon rendez-vous →
              </button>

              <p className="text-center text-xs text-neutral-400">
                Votre demande sera envoyée directement sur WhatsApp.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero3;