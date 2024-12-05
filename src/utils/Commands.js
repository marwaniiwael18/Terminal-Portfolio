const commands = {
  help: () => `
Available Commands:
  help        - Display available commands
  about       - About Wael Marwani
  clear       - Clear the terminal
  education   - Show education background
  projects    - View my projects
  socials     - Social media links
  whoami      - About me
  echo [text] - Print text
  email       - Send an email to me
  gui         - Go to my portfolio in GUI
  history     - View command history
`,
  about: () => `
Hi There! 👋🏻
I'M Wael Marwani
IT Engineering Student | Full Stack Developer | Blockchain Enthusiast
I fell in love with programming and love solving real-world problems.
`,
  education: () => `
Education Background:
- Bachelor's degree in TIC | ESPRIT (2021-2025)
- High School Diploma | Lycée Chebbi (2016-2020)
Certifications:
- Fortinet FortiGate 7.4 Operator
- CCNAv7: Switching, Routing, and Wireless Essentials
- AI-900 Azure Artificial Intelligence
`,
  projects: () => `
Projects:
- Sports Reservation App (Java, Symfony)
- Game Development with SDL and Arduino
- Web App for Furniture Exchange (PHP, JavaScript)
Check more on GitHub: <a href="https://github.com/marwaniiwael18" target="_blank">GitHub</a>
`,
  socials: () => `
Find me on:
- <a href="https://linkedin.com/in/wael-marwani" target="_blank">LinkedIn</a>
- <a href="https://github.com/marwaniiwael18" target="_blank">GitHub</a>
`,
  whoami: () => `
I am Wael Marwani, a passionate IT Engineering Student with experience in:
- Full Stack Development
- Embedded Systems (STM32, ESP32)
- Blockchain Technologies
- Node.js, React.js, and Next.js
`,
  email: () => {
    window.location.href = "mailto:wael.marwani@esprit.tn";
    return "Opening your default email client...";
  },
  gui: () => {
    window.open("https://marwaniwael.me", "_blank");
    return "Opening GUI Portfolio...";
  },
  history: () => `
Command history:
- help
- about
- education
- projects
- socials
- whoami
- email
- gui
- clear
`,
  echo: (args) => args.join(" "),
  clear: () => "", // Clear is now handled by React state
};

export default commands;
