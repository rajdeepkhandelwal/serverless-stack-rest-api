export async function handler(event,context) {
  console.log(event,"asdasd",context)
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
}
