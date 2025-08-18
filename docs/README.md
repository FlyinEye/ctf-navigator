# 🕶️ CTF Navigator – The Hacker’s Co-Pilot

Welcome to **CTF Navigator**.
Think of it as your AI wingman during Capture-the-Flag ops.
It remembers your recon, helps you build attack chains, and can even spit out reports so you don’t have to write them at 3AM.

Not a tool, a **navigator**.

---

## ⚡ What It Can Do

### 🎭 **Change the Mood**

Switch themes like swapping masks:

* *Cyberpunk*: neon glow, glitchy vibes.
* *1337*: ASCII borders + random glitch text.
* *1980s*: pure green-on-black terminal.
* *Dark-Web*: blood-red on black.
* Or go “Modern” if you’re boring.

**Try it:** Flip to `1337` and watch *Dashboard* mutate into `D45HB04RD`.

---

### 🤖 **Two AI Personas**

* **Professional**: clean, no-nonsense, like a senior pentester.
* **Cyberpunk**: snarky, edgy, drops hints like a streetwise hacker.

**Example:**
You: *How do I check SMB shares?*

* *Professional*: “Run `enum4linux -a <ip>` for enumeration.”
* *Cyberpunk*: “Aim `enum4linux` at that SMB box and see what secrets spill out.”

---

### 📊 **The Dashboard**

Keeps tabs on your loot:

* IPs, Ports, Services
* Vulns, CVEs, Credentials

**Example:**
Run `nmap` → Dashboard shows `IPs:1 | Ports:3 | Services:2 | Vulns:0`.

---

### 🧰 **Toolbox**

Split into phases like a real pentest playbook:

* Recon → Nmap, Gobuster, Whois…
* Vuln Scan → Nessus, Nikto…
* Exploitation → Metasploit, SQLMap…
* Post-Ex → Priv-Esc scripts, looters.

Add your own tools on the fly.

---

### 💬 **Chat + File Drops**

Talk to the Navigator, drop in logs, configs, or source code.
It parses and advises.

**Example:**
Upload `index.php` with sketchy SQL → Navigator suggests injection payloads.

---

### 🔊 **Text-to-Speech**

Don’t want to read? Navigator talks back.
Pick the voice. Pretend it’s HAL. Or Cortana. Or Glados.

---

### 🗂️ **Sessions**

Save all your ops, reload later, or nuke the session and start fresh.

**Example:**
End of the night: save as `ctf_session.json`.
Next morning: load and keep rolling.

---

### 🎯 **Attack Plans**

One click = numbered battle plan based on your recon.

**Example Output:**

```
1. Nmap -sV -sC on 10.0.0.5 to ID services.
2. Use Gobuster on port 80 to hunt hidden dirs.
3. Enum SMB with enum4linux for shares.
```

---

### 📑 **Instant Reports**

Hate writing? Let Navigator do it.
Spits out exec summaries, findings, and recommendations.
Perfect for CTF writeups or boss briefings.

---

### 🕸️ **Mind Map**

Visual graph of your targets → ports → services → vulns → creds.
Like tracing neon wires across the grid.

---

### 🖥️ **Terminal Mode**

Flip the switch, ditch the chat bubbles.
Pure terminal simulation.

```
> nmap -sV 10.0.0.5
CTF-NAV-AI: Found Apache 2.4.41 on port 80
```

---

## 🚀 How You Might Use It

1. Set theme to `cyberpunk`.
2. Feed in target IP.
3. Run `nmap`, watch Dashboard light up.
4. Ask Navigator how to pivot → get instant attack plan.
5. At the end, hit *Generate Report* → drop it into your CTF writeup.

---

That’s the Navigator.
Not a manual. A co-pilot.

---

