import axios from "axios";
import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    const response = await axios.get("https://www.producthunt.com/feed", {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
      transformResponse: [
        (data) => {
          const dom = new JSDOM(data);
          const document = dom.window.document;

          const feed = document.getElementsByTagName("feed")[0];
          const entries = feed.getElementsByTagName("entry");

          const jsonData = {
            entries: Array.from(entries).map((entry) => ({
              id: (entry as Element).getElementsByTagName("id")[0]?.textContent,
              name: (entry as Element).getElementsByTagName("title")[0]
                ?.textContent,
              description:
                (entry as Element)
                  .getElementsByTagName("content")[0]
                  ?.textContent?.match(/<p>\s*(.*?)\s*<\/p>/)?.[1] || "",
              published: (entry as Element).getElementsByTagName("published")[0]
                ?.textContent,
            })),
          };

          return jsonData.entries;
        },
      ],
    });

    console.log(response.data);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
  }
}
