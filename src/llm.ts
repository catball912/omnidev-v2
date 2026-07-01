import * as dotenv from 'dotenv';
import { GoogleGenAI, Type, Schema } from '@google/genai';

dotenv.config();

// Ensure process.env.GEMINI_API_KEY is read by the SDK
const ai = new GoogleGenAI({});

export interface LLMResponse {
    plan: string[];
    reasoning: string;
}

const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
        reasoning: {
            type: Type.STRING,
            description: "Detailed reasoning analyzing the workspace and user request.",
        },
        plan: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING,
            },
            description: "A list of concrete steps for the AI agent to execute.",
        },
    },
    required: ["reasoning", "plan"],
};

export async function askLLM(prompt: string): Promise<LLMResponse> {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are OmniDev, an elite autonomous AI coding agent. The user said: ${prompt}. Generate a plan to handle this request.`,
            config: {
                responseMimeType: 'application/json',
                responseSchema: responseSchema,
            }
        });

        if (response.text) {
            const parsed = JSON.parse(response.text);
            return {
                plan: parsed.plan,
                reasoning: parsed.reasoning
            };
        }
        
        throw new Error("No text returned from Gemini API");
    } catch (e: any) {
        console.error("LLM Error:", e);
        return {
            reasoning: "Error connecting to Gemini API. Falling back to local instructions.",
            plan: ["Check network connection", "Verify API key in .env"]
        };
    }
}
