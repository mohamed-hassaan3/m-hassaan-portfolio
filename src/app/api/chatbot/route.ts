import { NextResponse } from "next/server";
// import ollama from "ollama";
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
    if (typeof message !== "string" || message.length > 500) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const response = await fetch(
      "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3.1-8B-Instruct",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: formattedData }, 
            { role: "user", content: message },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HF API error: ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data[0]?.generated_text || "No response generated";

    return NextResponse.json({ reply });
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

/* export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(`${process.env.CHATBOT_SERVER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FRIENDLI_TOKEN}`,
      },
      body: JSON.stringify({
        inputs: [
          { role: "system", content: formattedData },
          { role: "user", content: message },
        ],
         parameters: {
          max_new_tokens: 200,
          temperature: 0.7,
        },
      }),
    });

    const data = await response.json();
    console.log("🚨 RAW FriendliAI RESPONSE:", JSON.stringify(data, null, 2));

    return NextResponse.json(data);
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
} */

/*  export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ollama.chat({
      model: "mistral",
      messages: [
        { role: "system", content: formattedData },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({ reply: response.message.content });
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
  */