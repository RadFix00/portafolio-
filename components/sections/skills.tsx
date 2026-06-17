"use client";

const skills = [
    {
        title: 'Html',
        percent: '80%',
        proyect: 'all',
        aplicative: 'donde lo aplique we:V'
    },
    {
        title: 'Css',
        percent: '72%',
        proyect: 'all',
        aplicative: 'donde lo aplique we:V'
    },
    {
        title: 'WordPress',
        percent: '40%',
        proyect: 'allnt',
        aplicative: 'donde lo aplique we:V'
    },
    {
        title: 'Next.js',
        percent: '30%',
        proyect: 'all',
        aplicative: 'donde lo aplique we:V'
    },
    {
        title: 'JavaScript',
        percent: '20%',
        proyect: 'all',
        aplicative: 'donde lo aplique we:V'
    },
    {
        title: 'Email Development',
        percent: '80%',
        proyect: 'all',
        aplicative: 'donde lo aplique we:V'
    },
    {
        title: 'Web Admin',
        percent: '30%',
        proyect: 'all',
        aplicative: 'donde lo aplique we:V'
    }
];

export default function SkillsTable() {
  return (
    <section className="relative py-20 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black italic text-green-500 drop-shadow-[0_0_5px_green]">
            Skills
          </h2>
          <h3 className="mx-auto mt-5 max-w-2xl text-slate-400 text-4xl max-w-2xl font-semibold text-white">
            Tecnologías y herramientas que uso en mis proyectos.
          </h3>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/60 backdrop-blur-md shadow-2xl">
          <table className="w-full border-collapse text-left">
            <thead className="bg-white text-black">
              <tr>
                <th className="px-6 py-4 text-sm font-black uppercase tracking-widest">
                  Skill
                </th>
                <th className="px-6 py-4 text-sm font-black uppercase tracking-widest">
                  Nivel
                </th>
                <th className="px-6 py-4 text-sm font-black uppercase tracking-widest">
                  Proyecto
                </th>
                <th className="px-6 py-4 text-sm font-black uppercase tracking-widest">
                  Aplicación
                </th>
              </tr>
            </thead>

            <tbody>
              {skills.map((skill, index) => {
                const value = Number(skill.percent.replace("%", ""));

                return (
                  <tr
                    key={index}
                    className="border-t border-white/10 transition hover:bg-white/10"
                  >
                    <td className="px-6 py-5">
                      <span className="text-xl font-black italic">
                        {skill.title}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="relative h-16 w-16 rounded-full"
                          style={{
                            background: `conic-gradient(white ${value}%, rgba(255,255,255,0.15) ${value}%)`,
                          }}
                        >
                          <div className="absolute inset-2 flex items-center justify-center rounded-full bg-black">
                            <span className="text-xs font-black">
                              {skill.percent}
                            </span>
                          </div>
                        </div>

                        <div className="h-2 w-28 overflow-hidden rounded-full bg-white/15">
                          <div
                            className="h-full rounded-full bg-white"
                            style={{ width: skill.percent }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 font-semibold text-white/80">
                      {skill.proyect}
                    </td>

                    <td className="px-6 py-5 text-sm leading-6 text-white/70">
                      {skill.aplicative}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}