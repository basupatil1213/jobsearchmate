# JobSearchMate

**JobSearchMate** is a web application designed to assist job seekers in optimizing their resumes, generating cover letters, and keeping track of their job applications. With JobSearchMate, users can easily match their resumes to job descriptions, analyze their resumes, and save all their job application materials in one place.

## Features

1. **Resume Matching**: Paste a job description and upload your resume to get a resume matching score.
2. **Resume Analysis**: Receive detailed analysis of your resume to improve its effectiveness.
3. **Cover Letter Generation**: Automatically generate a customized cover letter based on the job description and your resume.
4. **Application Tracking**: Save and organize all your job application materials, including resumes and cover letters, so you can track which materials were used for each job application.

## Tech Stack

- **Next.js**: For building the React-based frontend and server-side rendering.
- **MongoDB**: For storing user data, resumes, cover letters, and job application details.
- **OpenAI**: For generating cover letters and providing resume analysis.
- **Clerk**: For secure user authentication and management.

## Getting Started

To get started with JobSearchMate, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. Clone the repository:

   ```bash
        git clone https://github.com/yourusername/jobsearchmate.git

2. Navigate to the project directory:

    ```bash
        cd jobsearchmate

3. Install the dependencies:

    ```bash
        npm install
4. Set up environment variables:

Create a .env.local file in the root of the project and add the following variables:

    ```bash
        MONGODB_URI=your_mongodb_connection_string
        OPENAI_API_KEY=your_openai_api_key
        CLERK_FRONTEND_API=your_clerk_frontend_api
        CLERK_API_KEY=your_clerk_api_key

5. Run the development server:
    ```bash
        npm run dev

Open your browser and navigate to http://localhost:3000 to see the application in action.

## Usage
* Resume Matching: Upload your resume and paste the job description to get a matching score.
* Resume Analysis: Analyze your resume to identify areas for improvement.
* Cover Letter Generation: Generate a cover letter based on the job description and your resume.
* Application Tracking: Save your resumes and cover letters for each job application and view them later.

## Contributing
Contributions are welcome! If you’d like to contribute to JobSearchMate, please follow these steps:

* Fork the repository.
* Create a new branch (git checkout -b feature/your-feature).
* Commit your changes (git commit -am 'Add new feature').
* Push to the branch (git push origin feature/your-feature).
* Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
