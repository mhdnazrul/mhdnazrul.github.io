'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { DotGrid } from '@/components/ui/DotGrid';

const skillsData = [
{
category: 'Languages',
skills: ['C++', 'C', 'C#', 'Java', 'PHP', 'Kotlin', 'TypeScript', 'Python', 'JavaScript']
},
{
category: 'Frameworks',
skills: ['React', 'Next.js', 'Vue', 'Express.js',  'Tailwind CSS']
},
{
category: 'Databases',
skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase']
},
{
category: 'Tools',
skills: ['VSCode',  'Git', 'Figma', 'Postman', 'Linux']
},
{
category: 'DevOps & Cloud',
skills: ['Vercel', 'Netlify', 'GitHub Actions']
},
{
category: 'Backend/Others',
skills: ['Node.js', ' REST API', 'JWT', 'OAuth']
},
{
category: 'IoT & Hardware',
skills: ['Arduino', 'ESP32', 'ESP8266']
},
{
category: 'Design/Other',
skills: ['HTML', 'CSS', 'Tailwind CSS', 'UI/UX Design']
}
];

const OverlappingSquares = () => (
  <div className="absolute inset-0 opacity-20">
    <div className="absolute w-32 h-32 border border-[#ABB2BF] top-20 left-10 rotate-45"></div>
    <div className="absolute w-40 h-40 border border-[#C778DD] top-40 left-0 rotate-12"></div>
    <div className="absolute w-24 h-24 border border-[#ABB2BF] bottom-20 right-20 -rotate-12"></div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <SectionHeading title="skills" />
      
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Decorative SVGs */}
          <div className="col-span-1 relative h-80 hidden lg:block">
            <DotGrid size={24} spacing={40} opacity={0.3} />
            <OverlappingSquares />
          </div>

          {/* Right: Skills Grid */}
          <div className="col-span-1 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsData.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  // Box padding removed to make the header border full-width
                  className="border border-[#ABB2BF] bg-transparent hover:border-[#C778DD] transition-colors"
                >
                  {/* Added padding here and a bottom border to match the design */}
                  <h4 className="text-white font-mono text-sm font-bold p-3 border-b border-[#ABB2BF]">
                    {skillGroup.category}
                  </h4>
                  {/* Changed to flex-wrap so items flow horizontally, added padding */}
                  <ul className="flex flex-wrap gap-x-1 gap-y-1 p-2">
                    {skillGroup.skills.map((skill) => (
                      <li
                        key={skill}
                        // added individual borders
                        className="text-[#ABB2BF] border border-[#ABB2BF] px-1 font-mono text-sm leading-relaxed"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}