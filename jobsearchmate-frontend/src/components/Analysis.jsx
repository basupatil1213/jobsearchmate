/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vxQNbtRKlPT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"

export default function Analysis() {
  const [resume, setResume] = useState(`
# John Doe
Software Engineer

## Experience
### Acme Inc, Software Engineer
*January 2020 - Present*
- Developed and maintained web applications using React, Node.js, and MongoDB
- Collaborated with cross-functional teams to design and implement new features
- Participated in code reviews and provided feedback to improve code quality

### Widgets Co, Intern
*May 2019 - August 2019*
- Assisted in the development of a mobile app using React Native
- Performed bug fixes and implemented minor feature enhancements
- Gained experience in agile development methodologies

## Education
### University of Example, Bachelor of Science in Computer Science
*2015 - 2019*
- GPA: 3.8/4.0
- Relevant Coursework: Data Structures, Algorithms, Database Systems

## Skills
- JavaScript, TypeScript
- React, Node.js, Express
- MongoDB, SQL
- Git, CI/CD
- Agile methodologies
`)
  const [jobDescription, setJobDescription] = useState(`
# Software Engineer
## Job Description
We are looking for a talented Software Engineer to join our growing team. In this role, you will be responsible for designing, developing, and maintaining web applications using modern technologies. You will work closely with cross-functional teams to deliver high-quality software solutions that meet our clients' needs.

## Responsibilities
- Develop and maintain web applications using React, Node.js, and MongoDB
- Collaborate with designers, product managers, and other engineers to define and implement new features
- Participate in code reviews and provide feedback to improve code quality
- Stay up-to-date with the latest industry trends and technologies
- Contribute to the overall technical direction of the team

## Requirements
- 2+ years of experience in web development
- Proficient in JavaScript, TypeScript, and modern front-end frameworks (e.g., React)
- Experience with Node.js, Express, and MongoDB
- Strong problem-solving and critical thinking skills
- Ability to work in a fast-paced, agile environment
- Excellent communication and teamwork skills
- Bachelor's degree in Computer Science or a related field
`)
  const [aiNotes, setAiNotes] = useState(`
Based on the provided resume and job description, here are some suggestions for improvements:

1. Highlight more specific achievements and quantifiable impact in your work experience. For example, mention the number of features you developed, the percentage of bug fixes you implemented, or the amount of time/cost savings you achieved.

2. Expand on your technical skills to demonstrate a deeper understanding of the required technologies. Consider including the specific libraries, frameworks, or tools you have experience with.

3. Tailor your resume more closely to the job description. Emphasize the skills and experience that are most relevant to the Software Engineer role, such as your experience in developing and maintaining web applications using React, Node.js, and MongoDB.

4. Consider adding a "Projects" section to showcase any personal or academic projects you have worked on that are relevant to the position. This can help demonstrate your practical application of the skills mentioned in your resume.

5. Ensure your resume is well-organized and easy to read. Use clear section headings, concise bullet points, and consistent formatting to make it easy for the hiring manager to quickly understand your background and qualifications.
`)
  const [isResumePdf, setIsResumePdf] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  // const [resumeExpanded, setResumeExpanded] = useState(true)
  // const [jobDescriptionExpanded, setJobDescriptionExpanded] = useState(true)
  // const [aiNotesExpanded, setAiNotesExpanded] = useState(true)
  const handleResumeUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type === "application/pdf") {
      setResumeFile(file)
      setIsResumePdf(true)
      setResume("")
    } else {
      setResumeFile(null)
      setIsResumePdf(false)
    }
  }
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-6">Resume Review</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto">
        <div className="border rounded-lg p-4 resize-x overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Resume</h2>
          </div>
          <div>
            {isResumePdf ? (
              <iframe src={URL.createObjectURL(resumeFile)} className="w-full h-[500px]" />
            ) : (
              <textarea
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                className="w-full h-[500px] resize-none"
              />
            )}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">Upload Resume</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleResumeUpload}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 resize-x overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Job Description</h2>
          </div>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full h-[500px] resize-none"
          />
        </div>
        <div className="border rounded-lg p-4 resize-x overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">AI Notes</h2>
          </div>
          <textarea
            value={aiNotes}
            onChange={(e) => setAiNotes(e.target.value)}
            className="w-full h-[500px] resize-none"
          />
        </div>
      </div>
    </div>
  )
}