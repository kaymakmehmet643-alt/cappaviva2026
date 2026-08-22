import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // ŞİFREYİ ARTIK GİZLİ KASADAN ÇEKİYORUZ!
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      throw new Error("API Şifresi kasada bulunamadı!");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.6-flash", 
      systemInstruction: "Sen Kapadokya Göreme'de bulunan CappaViva seyahat acentesi ve otelinin dijital asistanısın. Müşterilere kısa, samimi, saygılı ve net cevaplar ver."
    });

    const gecmisMesajlar = messages.slice(0, -1).map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));
    const sonMesaj = messages[messages.length - 1].content;

    const chat = model.startChat({ history: gecmisMesajlar });
    const result = await chat.sendMessage(sonMesaj);
    const text = result.response.text();

    return Response.json({ text });

  } catch (error: any) {
    console.error("Google Motor Hatası:", error);
    return Response.json({ error: "Google'dan Hata: " + error.message }, { status: 500 });
  }
}