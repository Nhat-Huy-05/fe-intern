export default function Skills() {
  const skills = [
    { name: "HTML", level: "Familiar", color: "bg-orange-100 text-orange-600" },
    { name: "CSS", level: "Familiar", color: "bg-blue-100 text-blue-600" },
    { name: "JavaScript", level: "Familiar", color: "bg-yellow-100 text-yellow-600" },
    { name: "React", level: "Familiar", color: "bg-cyan-100 text-cyan-600" },
    { name: "Next.js", level: "Familiar", color: "bg-gray-100 text-gray-700" },
    { name: "Tailwind CSS", level: "Familiar", color: "bg-teal-100 text-teal-600" },
    { name: "Git / GitHub", level: "Learning", color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Skills</span>
          <h2 className="text-4xl font-bold text-white">Kỹ năng của tôi</h2>
          <p className="text-gray-400">Những công nghệ tôi đã và đang học trên con đường trở thành Full Stack Developer.</p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col gap-2 hover:border-amber-400/50 transition-all duration-300">
              <span className="text-white font-semibold">{skill.name}</span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${skill.color}`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}