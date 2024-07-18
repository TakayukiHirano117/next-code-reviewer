import axios from "axios";

class OpenaiClient {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY as string;
  }

  async completion(messages: Array<Object>) {
    const requestData = {
      model: "gpt-3.5-turbo",
      messages,
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  }
}

const openai = new OpenaiClient();
export default openai;
