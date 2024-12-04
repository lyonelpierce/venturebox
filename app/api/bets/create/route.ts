import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { startupId, values, token } = body;

  if (!startupId || !values || !token) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  try {
    const response = await fetch(
      `https://www.stadium.science/api/venture_vox/${startupId}/create_bet`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          company_id: startupId,
          protocol_title: values.question,
          protocol_falsifiable_hypothesis:
            "Company XYZ will achieve 25% revenue growth in Q4 2024",
          protocol_daily_question:
            "Is the company on track to meet the Q4 revenue target?",
          protocol_steps: "helloworld",
          protocol_start_date: new Date().toISOString(),
          protocol_end_date: new Date(
            Date.now() + 180 * 24 * 60 * 60 * 1000
          ).toISOString(),
          bet_type: "yes_no",
          possible_answers: ["Yes", "No"],
          answer_rules: {
            frequency: "daily",
            validation_criteria: "Must be supported by revenue data",
          },
        }),
      }
    );
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "Hello, world!" }, { status: 200 });
}
