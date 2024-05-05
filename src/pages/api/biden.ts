import axios from "axios";

export default async function handler(req: any, res: any) {
  try {
    const token = 'YOUR_API_TOKEN'; // Replace 'YOUR_API_TOKEN' with your actual API token
    const query = encodeURIComponent('title:Biden AND (election OR polls) AND sentiment:(positive OR negative) AND language:english');
    const apiUrl = `https://api.webz.io/newsApiLite?token=${token}&q=${query}`;

    const result = await axios.get(apiUrl);
    res.status(200).json({ data: result.data });
  } catch (error: any) {
    res.status(error.response.status).json({ message: error.response.statusText });

  }
}