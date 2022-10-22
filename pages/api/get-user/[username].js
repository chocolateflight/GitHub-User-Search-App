async function handler(req, res) {
  let userData;
  if (req.method === 'GET') {
    const { username } = req.query;
    const response = await fetch(`https://api.github.com/users/${username}`);
    userData = await response.json();
    res.status(200).send(userData);
  }
}

export default handler;
