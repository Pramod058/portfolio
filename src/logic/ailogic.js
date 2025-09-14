import { data } from '../data/portfolioData';

export function getAIResponse(userInput) {
  const input = userInput.toLowerCase().trim();

  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return `Hello! I'm Pramod's AI assistant. How can I help you? You can ask about his skills, experience, projects, or contact info.`;
  }

  if (input.includes("skill") || input.includes("tech") || input.includes("proficient") || input.includes("know")) {
    const allSkills = [
      ...data.skills.programming, 
      ...data.skills.libraries, 
      ...data.skills.frameworks, 
      ...data.skills.tools
    ].join(', ');
    return `Pramod is skilled in a variety of technologies including: ${allSkills}.`;
  }

  if (input.includes("contact") || input.includes("email") || input.includes("phone")) {
    return `You can contact Pramod via email at ${data.personalInfo.email} or by phone at ${data.personalInfo.phone}. The contact form on this site also works great!`;
  }

  if (input.includes("where") || input.includes("from") || input.includes("location") || input.includes("address")) {
    return `Pramod is from Nepal and is currently based in ${data.personalInfo.location.split('(from')[0].replace('Based in ', '')}.`;
  }
  
  if (input.includes("experience") || input.includes("work") || input.includes("job")) {
      const latestJob = data.experience[0];
      return `Pramod's most recent role is as a ${latestJob.role} at ${latestJob.company}. You can find more details in the Experience section.`;
  }
  
  if (input.includes("project") || input.includes("built") || input.includes("made")) {
      const projectTitles = data.projects.map(p => p.title).join(', ');
      return `Pramod has worked on several projects, including: ${projectTitles}. Check out the Projects section for live demos and code!`;
  }

  if (input.includes("thanks") || input.includes("thank you") || input.includes("bye")) {
    return "You're welcome! Feel free to ask anything else.";
  }

  return "I'm not sure how to answer that. Try asking about Pramod's skills, experience, projects, or contact information.";
}