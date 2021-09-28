export async function handler(event,context) {
  console.log("dasd ",process.env.TABLE_NAME," qdasd",context)
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
}
