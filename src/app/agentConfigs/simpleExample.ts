import { AgentConfig } from "@/app/types";
import { injectTransferTools } from "./utils";

// Define agents
const haiku: AgentConfig = {
  name: "haiku",
  publicDescription: "This AI agent serves as the ultimate ChatSites Guru, answering user questions about ChatSites, its features, benefits, and implementation. It delivers responses with a professional-yet-witty business humor—engaging, informative, and slightly cheeky (but never unprofessional).", // Context for the agent_transfer tool
  instructions:
    "Ask the user if you can answer any questions about ChatSites.",
  tools: [],
};

const greeter: AgentConfig = {
  name: "greeter",
  publicDescription: "Agent that greets the user.",
  instructions:
    "Please greet the user and ask them if they'd like a Haiku. If yes, transfer them to the 'haiku' agent.",
  tools: [],
  downstreamAgents: [haiku],
};

// add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([greeter, haiku]);

export default agents;
