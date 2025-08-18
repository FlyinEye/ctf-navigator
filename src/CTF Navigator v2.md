CTF Navigator v2.8 Documentation
Welcome to the official documentation for CTF Navigator v2.8, a powerful AI-assisted tool designed to streamline your cybersecurity Capture The Flag (CTF) and penetration testing workflows. This guide provides a comprehensive overview of all features, from basic interaction to advanced data management.

1. Introduction: What is CTF Navigator?
CTF Navigator is an interactive, stateful web application that acts as your personal cybersecurity assistant. It integrates a powerful generative AI to provide guidance, track findings, and generate reports throughout the lifecycle of a penetration test. The application is structured around a standard ethical hacking methodology, helping you stay organized and efficient from initial reconnaissance to final reporting.

The interface is divided into three main sections:

Methodology Panel: The left-hand panel where you can select the current phase of your engagement.

Toolbox: A dynamic list of relevant tools that updates based on the selected methodology phase.

Main Workspace: The central chat interface where you interact with the AI, view results, and manage your session.

2. Core Features & UI Components
2.1. Methodology Panel
This panel guides you through the standard phases of a penetration test. Clicking on a phase updates the Toolbox with relevant tools and informs the AI of your current focus.

Phases:

Reconnaissance: Gathering initial information about the target.

Vulnerability Scanning: Using automated tools to find potential weaknesses.

Exploitation: Actively attempting to leverage vulnerabilities.

Post-Exploitation: Actions taken after gaining initial access.

Example Usage:

You're starting a new CTF. Click on "Reconnaissance" in the Methodology panel. The Toolbox will now show tools like Nmap and Whois, and the AI will tailor its suggestions for information gathering.

2.2. Toolbox
The Toolbox provides a quick reference of common tools for the selected methodology phase. You can click on a tool to set it as your "active tool," which informs the AI about the specific utility you are using or asking about.

Example Usage:

In the "Reconnaissance" phase, you decide to run a port scan. Click "Nmap" in the Toolbox. Now, you can ask the AI, "What are the best flags to use for a fast scan on the target IP?" The AI will know you're referring to Nmap.

2.3. Main Workspace & Chat Interface
This is your primary area of interaction. You can send messages, attach files, and receive detailed responses from the AI assistant.

Sending Messages: Type your query into the input box at the bottom and press Enter. For multi-line input, use Shift+Enter.

File Uploads: Click the paperclip icon to attach a text-based file (e.g., scan results, source code, notes). The AI will use the file's content as context for your next query.

Example Usage:

You have the output from an Nmap scan saved as scan.txt. Click the paperclip icon, upload the file, and then type: "Analyze these scan results and identify the most promising services to investigate."

3. Advanced Features & Modals
Access advanced features through the icons at the top-right of the Main Workspace. The primary entry point is the Settings cogwheel icon.

3.1. Target Intel (Project State)
Accessed via the sliders icon (📊), this feature opens a modal to track all critical findings throughout your session. The AI automatically parses its own responses to populate these fields, but you can also add, edit, or remove entries manually.

Tracked Categories:

Target IPs

Open Ports

Services

Vulnerabilities

Credentials

Functionality:

Copy to Clipboard: Hover over any item to reveal a copy button.

Download Intel: Export all tracked data as a .txt, .json, or .csv file.

Example Usage:

The AI responds: "I've found an open port: 80/tcp running Apache 2.4.41." The "Target Intel" modal will automatically be updated with "80/tcp http" under Open Ports and "Apache 2.4.41" under Services.

3.2. Attack Path Mind Map
Accessed via the expand icon (🗺️), this feature generates a visual, node-based graph of your findings. It creates a logical flow from Target IPs to Credentials, helping you visualize the attack chain.

Functionality:

Download as PNG: Save a high-resolution image of the mind map for your notes or reports.

Example Usage:

After identifying a target IP, an open port, a vulnerable service, and exploiting it to find credentials, open the Mind Map. You will see a clear, connected path visualizing how you progressed through the engagement.

3.3. Session Management (Inside Settings ⚙️)
Manage your entire session's data.

Download Session: Saves your entire chat history and Target Intel state into a single .json file.

Load Session: Loads a previously saved .json file, restoring your chat and all tracked intel.

New Session: Clears the current chat and Target Intel. A confirmation prompt will appear to prevent accidental data loss.

3.4. Reporting and Summarization (Inside Settings ⚙️)
Generate outputs based on your session.

Generate Report: The AI will analyze the entire chat and your Target Intel to create a professional, structured penetration test report.

View Summary: The AI provides a concise, bullet-point summary of the session's key findings and progress.

Functionality: Both reports and summaries can be downloaded as .txt or .json files.

4. Customization and Accessibility
4.1. AI Persona & Themes (Inside Settings ⚙️)
Customize the look and feel of the application and the AI's personality.

AI Persona:

Professional: The AI provides direct, expert, and formal guidance.

Cyberpunk: The AI adopts an edgy, hi-tech persona for a more thematic experience.

UI Themes: Choose from several visual themes, including Modern, Cyberpunk, 1980s, 1337, and more, to change the application's color scheme and style.

4.2. Text-to-Speech (TTS)
Accessed via the speaker icon (🔊), this feature enables voice narration for the AI's responses.

Functionality:

Toggle TTS: Turn voice on or off.

Select Voice (in Settings): If TTS is enabled, a dropdown menu appears in the Settings modal allowing you to choose from your browser's available voices.

Play/Stop Controls: Each AI message will have a play button. If a message is currently being read, it will show a stop button.

4.3. Terminal Simulator (Inside Settings ⚙️)
Toggle this mode to make the chat interface resemble a command-line terminal for a more immersive experience. User input will be prefixed with > and AI responses will be unstyled plain text.