import Image from "next/image";
export default function ExpressArteLandingPage() {
  const services = [
    {
      title: "Identidad visual",
      description:
        "Diseño de elementos gráficos que dan personalidad, coherencia y presencia a tu marca.",
    },
    {
      title: "Diseño para redes sociales",
      description:
        "Piezas visuales atractivas y funcionales para comunicar con estilo en medios digitales.",
    },
    {
      title: "Material publicitario",
      description:
        "Diseños para flyers, invitaciones, anuncios y materiales impresos o digitales.",
    },
    {
      title: "Diseño personalizado",
      description:
        "Propuestas gráficas adaptadas a cada necesidad, idea o proyecto.",
    },
  ];

  const portfolio = [
    {
      title: "Branding elegante",
      category: "Identidad visual",
    },
    {
      title: "Contenido para redes",
      category: "Social media",
    },
    {
      title: "Diseño editorial",
      category: "Material gráfico",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#1f1f1f]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,173,170,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(119,201,120,0.14),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-expressarte.png"
                alt="Logo ExpressArte"
                width={180}
                height={60}
                className="h-auto w-[190px] sm:w-[220px]"
                priority
              />
            </div>
            <nav className="hidden gap-8 text-sm text-[#444] md:flex">
              <a href="#sobre" className="transition hover:text-[#4DADAA]">
                Sobre nosotros
              </a>
              <a href="#servicios" className="transition hover:text-[#4DADAA]">
                Servicios
              </a>
              <a href="#portafolio" className="transition hover:text-[#4DADAA]">
                Portafolio
              </a>
              <a href="#contacto" className="transition hover:text-[#4DADAA]">
                Contacto
              </a>
            </nav>
          </header>

          <div className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#4DADAA]/25 bg-white/70 px-4 py-1 text-sm text-[#3e8f8d] shadow-sm">
                Arte, diseño y personalidad visual
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Diseño gráfico que inspira, comunica y deja huella.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#555] sm:text-lg">
                Creamos propuestas visuales con estilo, creatividad y personalidad para dar vida a ideas,
                marcas y proyectos que buscan destacar.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#4DADAA] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#4DADAA]/20 transition hover:-translate-y-0.5"
                >
                  Contáctanos
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#d7d7d1] bg-white px-6 py-3 text-sm font-medium text-[#222] transition hover:border-[#4DADAA]/40 hover:text-[#3e8f8d]"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#77c978]/20 blur-2xl" />
              <div className="absolute -right-6 bottom-4 h-32 w-32 rounded-full bg-[#4DADAA]/20 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-2xl shadow-black/5 backdrop-blur">
                <div className="rounded-[1.75rem] border border-[#eceae3] bg-[#fcfcfa] p-8">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#4DADAA]" />
                    <div className="h-3 w-3 rounded-full bg-[#77c978]" />
                    <div className="h-3 w-3 rounded-full bg-[#d9d7cf]" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#7b7b7b]">ExpressArte</p>
                      <p className="mt-2 text-3xl font-semibold italic text-[#4DADAA]">Creatividad con intención</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-[#eff8f7] p-5">
                        <p className="text-sm text-[#5d5d5d]">Estilo</p>
                        <p className="mt-1 text-lg font-semibold">Artístico</p>
                      </div>
                      <div className="rounded-2xl bg-[#f2faef] p-5">
                        <p className="text-sm text-[#5d5d5d]">Enfoque</p>
                        <p className="mt-1 text-lg font-semibold">Elegante y moderno</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-dashed border-[#4DADAA]/30 p-5">
                      <p className="text-sm text-[#5a5a5a]">
                        Cada diseño nace de una idea, una emoción y una intención clara: comunicar con
                        belleza, orden y personalidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#4DADAA]">Sobre ExpressArte</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Diseño con esencia, creatividad con intención.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#555] sm:text-lg">
              En ExpressArte transformamos ideas en soluciones visuales que comunican, conectan y
              proyectan identidad. Cada diseño nace de una mezcla entre creatividad, armonía y atención
              al detalle, buscando siempre un resultado elegante, moderno y con personalidad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#e8e6df] bg-white p-6 shadow-sm">
              <p className="text-sm text-[#666]">Enfoque</p>
              <p className="mt-2 text-xl font-semibold">Identidad visual clara</p>
            </div>
            <div className="rounded-[1.75rem] border border-[#e8e6df] bg-white p-6 shadow-sm">
              <p className="text-sm text-[#666]">Estilo</p>
              <p className="mt-2 text-xl font-semibold">Elegancia contemporánea</p>
            </div>
            <div className="rounded-[1.75rem] border border-[#e8e6df] bg-white p-6 shadow-sm sm:col-span-2">
              <p className="text-sm text-[#666]">Propósito</p>
              <p className="mt-2 text-xl font-semibold">Crear diseños memorables que conecten con tu esencia.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#4DADAA]">Servicios</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Soluciones visuales con estilo y personalidad.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-[#e8e6df] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#eff8f7]" />
              <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5f5f]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portafolio" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#4DADAA]">Portafolio</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Una muestra del estilo visual de ExpressArte.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#666]">
            Esta sección puede crecer con imágenes reales, proyectos destacados y piezas visuales de la
            marca.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-[#e8e6df] bg-white shadow-sm"
            >
              <div
                className={`h-72 w-full ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,#4DADAA_0%,#9fe3df_100%)]"
                    : index === 1
                    ? "bg-[linear-gradient(135deg,#ffffff_0%,#d9f5d4_100%)]"
                    : "bg-[linear-gradient(135deg,#f5f4ee_0%,#dceceb_100%)]"
                }`}
              />
              <div className="p-6">
                <p className="text-sm text-[#666]">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-[#e8e6df] bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#4DADAA]">Nuestra visión</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Diseño que conecta con tu visión.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#555] sm:text-lg">
                Cada proyecto es una oportunidad para crear algo auténtico. En ExpressArte buscamos
                entender la esencia de cada idea para convertirla en una propuesta visual clara, estética
                y memorable.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-[#f7f6f2] p-8">
              <p className="text-sm text-[#666]">Diseño que busca</p>
              <ul className="mt-4 space-y-4 text-lg font-medium">
                <li>Comunicar con claridad</li>
                <li>Transmitir identidad</li>
                <li>Destacar con elegancia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] bg-[#1d1d1d] px-8 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#bceceb]">Contacto</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Hablemos de tu próximo proyecto.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Estamos listos para ayudarte a dar forma visual a tus ideas. Próximamente podrás
                contactarnos por WhatsApp, redes sociales y correo personalizado con dominio propio.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-[#4DADAA] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Solicita información
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Próximamente en WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e6e3dc] px-6 py-8 text-center text-sm text-[#666] sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} ExpressArte. Diseño gráfico con creatividad, estilo y personalidad.</p>
      </footer>
    </main>
  );
}
