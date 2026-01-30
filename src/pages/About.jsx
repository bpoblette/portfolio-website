import { skills, experiences } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Brandon</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Washington State, specializing technical education through hands-on learning and building applications.
          I am a passionate developer, with experience creating full-stack applications, as well as fine tuning machine learning models. I also like to ski, play basketball, and video games!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            < div
              key={skill.name}
              className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked on several group projects, leveling up my skills and teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300" />

            <ul className="space-y-12">
              {experiences.map((experience) => (
                <li
                  key={experience.company_name}
                  className="relative flex items-start gap-6"
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full z-10"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-4 h-4 object-contain"
                    />
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 w-full">
                    <span className="text-sm text-gray-400">
                      {experience.date}
                    </span>

                    <h3 className="text-xl font-semibold text-black mt-1">
                      {experience.title}
                    </h3>

                    <p className="text-black-500 font-medium">
                      {experience.company_name}
                    </p>

                    <ul className="mt-4 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => (
                        <li
                          key={`${experience.company_name}-point-${index}`}
                          className="text-sm text-black-500/70"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section >
  )
}

export default About
About