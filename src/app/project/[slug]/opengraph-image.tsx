import React from "react";
import { ImageResponse } from "next/og";
import { projects } from "@/data/data";

export const runtime = "edge";

export default async function Image({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((item) => item.slug === slug);
  if(!project) return {}
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 700, marginBottom: 24 }}>
            {project.name}
          </div>
          {project.description && (
            <div style={{ fontSize: 32, fontWeight: 400 }}>{project.description}</div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (err) {
    if (err instanceof Error) throw new Error("Failed to get OG");
  }

}
