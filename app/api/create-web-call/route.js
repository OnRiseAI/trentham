export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      },
      body: JSON.stringify({
        agent_id: body.agent_id || process.env.RETELL_AGENT_ID,
        metadata: {
          source: "trentham-demo",
          domain: "trentham.onrise.ai",
        },
        retell_llm_dynamic_variables: {
          caller_source: "web_demo",
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Retell API error:", response.status, errorData);
      return Response.json(
        { error: "Failed to create web call" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return Response.json({
      access_token: data.access_token,
      call_id: data.call_id,
    });
  } catch (error) {
    console.error("Create web call error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
