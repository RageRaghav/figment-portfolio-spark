
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                <p className="text-sm opacity-80">ABES Engineering College (2022-26)</p>
                <p className="text-sm text-purple-400">CGPA: 7.5/10</p>
              </div>
              <div>
                <h4 className="font-medium">Senior Secondary Education</h4>
                <p className="text-sm opacity-80">DPS Rajnagar Extension (2022)</p>
                <p className="text-sm text-purple-400">GPA: 9.2/10</p>
              </div>
              <div>
                <h4 className="font-medium">High School</h4>
                <p className="text-sm opacity-80">DPS Rajnagar Extension (2020)</p>
                <p className="text-sm text-purple-400">GPA: 9.2/10</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Joint Secretary @ DataVerse</h4>
                <p className="text-sm opacity-80">Led a team of 50+ students at ABESEC's Data Science & AI Club. Successfully organized major events, including the frontend-based hackathon 'HackOVerse'.</p>
              </div>
              <div>
                <h4 className="font-medium">Events Lead @ AR/VR Club</h4>
                <p className="text-sm opacity-80">Spearheaded multiple engaging events for gaming and immersive tech enthusiasts, fostering a strong community around AR/VR innovation.</p>
              </div>
              <div>
                <h4 className="font-medium">Cultural Secretary @ DPSRNE</h4>
                <p className="text-sm opacity-80">Played a key role in organizing the Annual Function by coordinating with faculty and managing student participation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
