# **Gonzo Labs: CTF Navigator v2.10**

**CTF Navigator** is a comprehensive, AI-powered workspace designed to streamline cybersecurity operations, particularly for penetration testing, CTF challenges, and Red Team engagements. It provides a structured, all-in-one environment to manage the entire lifecycle of an assessment, from initial reconnaissance to final reporting, significantly reducing context-switching and improving operational efficiency.

## **Overview**

This tool integrates a stateful project management system with a dual-mode AI assistant to create a dynamic and responsive workflow. It empowers operators by helping them track findings, manage specialized tools, adhere to a standard industry methodology, and generate professional documentation. By centralizing these functions, CTF Navigator ensures that the operator can focus more on the engagement and less on juggling disparate applications and notes.

## **Key Features for Cybersecurity Professionals**

### **📈 Real-Time Intel Dashboard**

* **At-a-Glance KPIs:** A dedicated dashboard provides a live, numerical count of all tracked intel, including **Target IPs**, **Open Ports**, **Services**, **Vulnerabilities**, **CVEs**, and **Credentials**. This serves as the mission control center for your engagement.  
* **Situational Awareness:** Instantly gauge the progress of an engagement and the scope of the attack surface from a single, consolidated view. Seeing the number of discovered vulnerabilities tick up in real-time allows for rapid strategic adjustments and better-informed decision-making.

### **🎯 Stateful Project & Intel Management**

* **Centralized Intel:** The system automatically parses and aggregates critical data points from AI responses and user-uploaded files. For example, if an Nmap scan reveals port 445 is open, the tool automatically adds '445' to Open Ports, ready for further enumeration.  
* **Manual Control:** Operators can manually add, edit, or remove findings at any time. This is crucial for correcting potential AI misinterpretations, removing false positives, or adding intel gathered from offline sources, ensuring the project state is always accurate.  
* **Data Export:** Export all collected intelligence in various formats (.txt, .json, .csv) for seamless integration with external tools, custom scripts, or dedicated reporting platforms.

### **metodologia Methodology Tracker**

* **Structured Workflow:** The tool guides the user through the standard phases of a penetration test: **Reconnaissance**, **Vulnerability Scanning**, **Exploitation**, and **Post-Exploitation**. This ensures a comprehensive and repeatable process, minimizing the risk of overlooking critical steps.  
* **Phase-Specific Context:** The AI's responses and tool suggestions are intelligently tailored to the currently selected phase. This means you get relevant guidance for enumeration when in Reconnaissance, and exploit-focused advice when in the Exploitation phase.

### **🧰 Customizable Toolbox**

* **Phase-Specific Tools:** Each methodology phase has a pre-populated list of common and effective tools (e.g., Nmap for Reconnaissance, Metasploit for Exploitation), providing a solid foundation for any assessment.  
* **Add Your Own:** Operators can add their own custom scripts or preferred tools to the toolbox for each phase. This allows the platform to adapt to a team's specific TTPs (Tactics, Techniques, and Procedures), making the environment fully customizable to any workflow.

### **🤖 Dual-Mode AI Assistance & Analysis**

* **Two Distinct AI Personas:** Choose the assistance style that best fits your needs.  
  * **Professional Mode:** A direct, expert-level AI that provides clear, concise, and accurate solutions. Ask it for a specific command, and it will provide it, optimizing for speed and efficiency in live engagements.  
  * **Cyberpunk Mode:** A "tutor" AI persona that offers hints, suggestions, and context rather than direct answers. This mode is designed to guide learning and critical thinking, making it perfect for CTFs, training scenarios, or when you want to understand the "why" behind an attack.  
* **File Analysis:** Upload tool outputs (e.g., Nmap scans, Nessus reports) and ask the AI to analyze the content. It will automatically extract key information like new ports or CVEs and update the project's intel, turning raw data into actionable intelligence.

### **📄 Automated Reporting & Planning**

* **Attack Plan Generation:** Based on the currently tracked intel, the AI can generate a logical, step-by-step attack plan. This feature helps operators strategize by suggesting the most likely paths for exploitation based on the available data.  
* **Professional Reports:** Automatically generate a comprehensive cybersecurity report that includes an executive summary, scope, methodology, and a detailed list of findings. This feature dramatically reduces the time spent on documentation, which is often the most time-consuming part of an engagement.  
* **Session Summary:** Quickly generate a bullet-point summary of the entire engagement for quick debriefs, status updates, or shift handovers.

### **🧠 Attack Path Mind Map**

* **Visual Correlation:** Automatically generates a visual mind map that connects discovered intel. It helps you "connect the dots" between a target IP, its services, their vulnerabilities, and any associated credentials, revealing complex, multi-stage attack paths that might be missed in a text-only view.

## **Pentesting & Red Team Workflow**

1. **Setup & Reconnaissance:** An operator starts a new session and selects the **Reconnaissance** phase. They use a tool like Nmap to scan a target IP range, then upload the output file. They watch as the **Dashboard** and intel panels instantly populate with discovered hosts, open ports, and running services, providing an immediate baseline of the attack surface.  
2. **Scanning & Enumeration:** The operator moves to the **Vulnerability Scanning** phase and runs a tool like Nikto. The AI parses the uploaded results, identifies potential web server vulnerabilities and CVEs, and automatically adds them to the Target Intel dashboard.  
3. **Generate Attack Plan:** With a solid base of intel, the operator generates an **Attack Plan**. The AI analyzes the collected data and proposes a clear, actionable strategy, suggesting that a specific vulnerability on a web server is the most promising entry point.  
4. **Exploitation:** The operator switches to the **Exploitation** phase. Following the attack plan, they use the AI's guidance to craft an exploit. Upon gaining access, they discover a set of user credentials and add them manually to the intel manager.  
5. **Visualize & Pivot:** At any stage, the operator can use the **Mind Map** feature to visualize the attack path and identify potential pivot points. The map might reveal that the compromised credentials could grant access to another service discovered during reconnaissance.  
6. **Reporting:** Once the engagement is complete, the operator uses the **Generate Report** feature. The system compiles all tracked intel, chat logs, and methodology steps into a professional document, ready for delivery to the client or stakeholders.

## **Additional Features**

* **Customizable Themes:** Switch between multiple UI themes, including Cyberpunk, 1980s, 1337, and Dark Web, allowing you to reduce eye strain or work in an environment that matches your style.  
* **Text-to-Speech (TTS):** Enable TTS to have the AI's responses read aloud, which is useful for multitasking or for operators who absorb information better audibly.  
* **Session Management:** Save your entire session (chat logs and project state) to a .json file. This ensures no data is lost between sessions and facilitates seamless handoffs between team members during multi-day engagements.