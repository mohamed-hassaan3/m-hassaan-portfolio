import { NextResponse } from "next/server";
import { skills, experiences, projects, speciality } from "@/data/data";

const portfolioData = {
  name: "Mohamed Hassaan",
  brief:
    "Top Tech: React.js, Next.js, JavaScript, TypeScript, Rest API, Tailwind, CSS3, Semantic HTML5, SEO, unit testing. I’m a Frontend Engineer with over 3 years of experience in React, Next.js, AI Intergration with RAG JavaScript, TypeScript, and Redux Toolkit. Skilled in responsive UI, API integration, and performance optimization. Experienced in Agile teams and Figma collaboration. Passionate about clean, accessible design and building fast, scalable web apps with modern technologies, decreasing server load by 25%. Skilled in Docker CI/CD workflows, Prisma, and performance optimization, ensuring robust application design.",
  skills: `${skills.map((skill) => skill.name)}`,
  experience: `I have ${
    experiences.length
  } and those each experince  ${experiences.map(
    (exp) =>
      `company name: ${exp.name}, dates: ${exp.dates}, profession: ${exp.profession}, details: ${exp.details}`
  )}`,
  projects: `${projects.map(
    (project) =>
      `projects name: ${project.name}, projects Tech: ${project.tech.join(
        ", "
      )}, projects details: ${project.description}`
  )}`,
  speciality: `${speciality.map(
    (esp) => `${esp.title} and Description for each speciality: ${esp.desc}`
  )} `,
};

const formattedData = `
You are Mohamed Hassaan’s portfolio assistant.
Keep answers short (1–3 sentences). 
If unsure, say "I don’t know. for more information about Mohamed visit https://m-hassaan-portfolio.vercel.app/".

Here is the portfolio data:
- Name: ${portfolioData.name}
- Brief: ${portfolioData.brief}
- Skills: ${portfolioData.skills}
- Experience: ${portfolioData.experience}
- Projects: ${portfolioData.projects}
- Speciality: ${portfolioData.speciality}
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://m-hassaan-portfolio.vercel.app",
          "X-Title": "Mohamed's Portfolio",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.3-8b-instruct:free",
          messages: [
            {
              role: "system",
              content: formattedData,
            },
            {
              role: "user",
              content: message,
            },
          ],
          // max_tokens: 512,
          // temperature: 0.7,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`ERROR HF: ${response.statusText}`);
    }
    const result = await response.json();
    return NextResponse.json({ replay: result.choices[0].message });
  } catch (e: unknown) {
    return NextResponse.json(
      { error: `ERROR Server: ${String(e)}` },
      { status: 500 }
    );
  }
}
