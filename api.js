const axios = require('axios');
const GitHubClient = axios.create({
  baseURL: 'https://api.GitHub.com/',
  timeout: '1000',
  headers: {
    'Accept': 'application/vnd.GitHub.v3+json',
    //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  }
});

async function main()
{
    const noOfFollowers = 35000;
    const perPage = 10;
    const response = await GitHubClient.get(`search/users?q=followers:>${noOfFollowers}&per_page=${perPage}`, {timeout: "15000"});
    console.log(response.data);
    return response.data;
}
console.log('inicio')
main();
console.log('fim')