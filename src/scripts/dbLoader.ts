/* import { DataAPIClient } from "@datastax/astra-db-ts";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
import { OpenAI } from "openai";
import dotenv from "dotenv";

type SimilartyMetrics = "dot_product" | "cosine" | "euclidean";

dotenv.config();
const { ASTRA_API_ENDPOINT, ASTRA_API_TOKEN, ASTRA_NAME_SPACE, OPENAI_KEY } =
  process.env;

// Defined OpenAI
const openai = new OpenAI({ apiKey: OPENAI_KEY });

// Your Own Data which will retrive for AI
const ownData = [
  "https://m-hassaan-portfolio.vercel.app/",
  "https://m-hassaan-portfolio.vercel.app/projects",
  "https://m-hassaan-portfolio.vercel.app/about",
  "https://m-hassaan-portfolio.vercel.app/contact",
  "https://www.linkedin.com/in/mohamed-hassaan3/",
  "https://github.com/mohamed-hassaan3",
];

// send data to dataStax
const collection = new DataAPIClient(ASTRA_API_TOKEN);
const db = collection.db(ASTRA_API_ENDPOINT, {
  keyspace: ASTRA_NAME_SPACE,
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 512,
  chunkOverlap: 100,
});

// Create Collection to store your vector
const createCollection = async (
  similartyMetrics: SimilartyMetrics = "dot_product"
) => {
  const res = await db.createCollection(ASTRA_NAME_SPACE, {
    vector: {
      dimension: 1536,
      metric: similartyMetrics,
    },
  });
  console.log("Create Collection Response", res);
};

// Embedding the vectore in OpenAI
const loadOwnData = async () => {
  const collection = await db.collection(ASTRA_NAME_SPACE);
  for await (const url of ownData) {
    const content = await scrapePage(url);
    const chunks = await splitter.splitText(content);
    // Embedding the context
    for (const chunk of chunks) {
      const embedding = openai.embeddings.create({
        model: "openai/gpt-oss-20b:together",
        input: chunk,
        encoding_format: "float",
      });
      const vector = (await embedding).data[0].embedding;
      const result = collection.insertOne({
        $vector: vector,
        text: chunk,
      });
      console.log("VECTOR", result);
    }
  }
};

const scrapePage = async (url: string) => {
  const loader = new PuppeteerWebBaseLoader(url, {
    launchOptions: {
      headless: true,
    },
    gotoOptions: {
      waitUntil: "domcontentloaded",
    },
    evaluate: async (page, browser) => {
      const result = await page.evaluate(() => document.body.innerHTML);
      await browser.close();
      return result;
    },
  });
  return (await loader.scrape())?.replace(/<[^>]*>?/gm, "");
};

createCollection().then(() => loadOwnData());
 */