import { Octokit } from 'octokit';

async function handler(req, res) {
  const octokit = new Octokit({
    auth: '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',
  });

  if (req.method === 'GET') {
    await octokit.request('GET /users/{username}', {
      username: 'USERNAME',
    });
  }
}

export default handler;
