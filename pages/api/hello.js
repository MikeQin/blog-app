// req = HTTP incoming message, res = HTTP server response
const handler = (req, res) => {
  const { name } = req.query;
  let message;
  if (name) {
    message = "Hello, " + name;
  }
  else {
    message = 'Hello, Next.js';
  }

  return (
    res.status(200).json({ msg: message })
  );
}
 
export default handler;