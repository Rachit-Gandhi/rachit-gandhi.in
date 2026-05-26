import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

type FetchLine = {
  label: string;
  value: string;
};

const fetchLines: FetchLine[] = [
  {
    label: "Role",
    value: "Software engineer brewing production GenAI systems",
  },
  {
    label: "Kernel",
    value: "Backend architecture, API design, and boring reliability",
  },
  {
    label: "Packages",
    value: "Python, Go, SQL, FastAPI, Django REST, Gin, Node.js",
  },
  {
    label: "AI Stack",
    value: "RAG, LangGraph, Azure OpenAI Foundry, Azure AI Search",
  },
  {
    label: "Data Path",
    value: "PostgreSQL, PySpark, Pinecone, Databricks, Kafka",
  },
  {
    label: "Latest Patch",
    value: "Multi-agent workflows, LMS OAuth, reusable chat surfaces",
  },
  {
    label: "Paper Trail",
    value: "Primary author, ICER 2025 code-evaluation research",
  },
  {
    label: "Shell Mood",
    value: "Ships practical systems; debugs before the coffee gets cold",
  },
];

type ColorSwatch = {
  title: string;
  color: string;
};

const swatches: ColorSwatch[] = [
  { title: "primary", color: "var(--primary)" },
  { title: "bg", color: "var(--bg)" },
  { title: "surface", color: "var(--surface)" },
  { title: "secondary", color: "var(--secondary)" },
];

export default function Hero() {
  // A broad, side-view cappuccino bowl
  const steam = String.raw`
                                                                      ░░                                                      
                                                                ████                                                      
                                                                ██░░                                                      
                                                                  ██                                                      
                                                                    ██▒▒                                                  
                                                                      ██                                                  
                                ▒▒                                    ░░██                                                
                                  ▒▒▒▒▒▒                                ██                                                
                                  ░░  ████              ▒▒              ██                                                
                                          ████          ████            ██                                                
                                            ████          ████          ██                                                
                                              ██            ██        ████                                                
                                            ████            ██        ██                                                  
                                          ████          ██████      ██                                                    
                                        ████          ████          ██                                                    
                                      ██              ██            ██                                                    
                                      ██              ████          ██                                                    
                                        ██              ████        ██                                                    
                                          ▓▓▓▓██                    ░░▓▓                                                  
                                              ██                                                                          
                                              ░░                                        
                `;
  const coffee = String.raw`
                                                                    
                                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                      
                          ▓▓▓▓▓▓██░░░░    ░░░░    ░░░░    ░░░░    ░░░░    ░░░░  ░░██▓▓▓▓▓▓██                              
                    ▓▓▓▓████░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒  ░░░░░░  ████                            
                  ████░░░░░░▓▓▓▓████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓▓▓    ████                          
                  ██░░▓▓▓▓████░░░░                                            ░░▒▒░░░░██▓▓██  ██                          
                ░░▓▓  ██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██  ██                          
                  ▓▓  ██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██  ██        ▒▒▓▓▓▓▒▒██        
                ░░▓▓  ░░░░██▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓██  ██    ▒▒████  ░░░░████      
                  ▓▓      ░░░░░░▒▒░░░░████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████░░░░▒▒    ██  ████░░░░      ░░██▒▒    
                  ██                  ░░░░░░▒▒░░░░▒▒▒▒░░░░▒▒▒▒░░░░▒▒░░░░░░▒▒▒▒░░░░░░          ██████░░            ░░██▒▒  
                  ▓▓                                                                          ████    ██████████    ░░▓▓  
                  ▓▓                                                                          ████████        ████    ░░██
                  ▓▓                                                                          ██  ██            ██    ░░██
                  ▓▓                                                                          ████              ██    ░░██
                  ▓▓        ██                                                                ████          ██████    ░░██
                  ▓▓        ██                                                                ████████████████        ░░██
                  ▓▓        ██                                                                ██                      ░░██
                  ▓▓        ██                                                                ██                    ░░████
                  ▓▓        ████                                                              ████                ██▓▓    
                  ▓▓          ██                                                              ████████████████████        
                  ▓▓          ████                                                            ██░░      ░░    ░░░░        
                  ██▓▓          ██                                                            ██                          
                  ░░████          ██                                                          ██                          
                      ██▓▓        ████                                                    ▓▓▓▓██                          
                      ░░██▓▓        ████                                              ▓▓▓▓██  ░░                          
              ▓▓██▓▓▓▓▓▓██████      ░░██▓▓██                                      ▓▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓██              
      ████▓▓████  ░░░░    ░░██▓▓██        ██                                      ██████  ░░░░    ░░░░    ░░▓▓▓▓▓▓▓▓▒▒    
    ████░░░░░░░░            ░░████▓▓██    ░░                                  ▓▓██████░░                    ░░░░░░  ██▒▒  
  ████                          ██████                                    ████████                                    ░░██
  ██░░                            ████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████                                      ████
  ████                            ▒▒████████████████████████████████████████▒▒                                      ████░░
    ██                              ░░░░▒▒░░░░░░▒▒░░░░░░▒▒░░░░▒▒░░░░░░░░░░                                  ▒▒▒▒▒▒████░░  
    ████▒▒                                                                                        ▒▒▒▒▒▒▒▒████▒▒▒▒░░░░    
    ░░  ██▒▒▒▒                                                                        ▒▒▒▒▒▒▒▒▒▒████▒▒░░░░▒▒░░            
          ░░████████████████████████████████████                            ██████████                                    
                                              ██████████████████████████████▓▓                                            
  `;

  const steamLines = steam.trimEnd().split("\n");
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const total = steamLines.length;
    const interval = window.setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= total) {
          return 0;
        }
        return prev + 1;
      });
    }, 140);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visibleSteam = steamLines
    .map((line, index) => {
      const total = steamLines.length;
      const shouldShow = index >= total - visibleLines;
      // Keep each line's width constant; hide unrevealed lines as spaces
      if (shouldShow) return line;
      return " ".repeat(line.length || 1);
    })
    .join("\n");

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.fetchPanel} aria-label="Rachit neofetch summary">
          <div className={styles.chromeBar}>
            <div className={styles.windowDots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className={styles.fetchPrompt}>rachit@portfolio:~$ neofetch</div>
          </div>
          <div className={styles.fetchOutput}>
            <div className={styles.asciiWrap} aria-hidden="true">
              <pre className={styles.asciiArt}>
                {visibleSteam}
                {coffee}
              </pre>
            </div>
            <div className={styles.fetchInfo}>
              <div className={styles.fetchIdentity}>
                <h1 className={styles.fetchName}>Rachit Gandhi</h1>
                <p className={styles.fetchSubtitle}>
                  Software engineer / backend systems / GenAI pragmatist
                </p>
              </div>
              <dl className={styles.fetchList}>
                {fetchLines.map((line) => (
                  <div className={styles.fetchLine} key={line.label}>
                    <dt>{line.label}</dt>
                    <dd>{line.value}</dd>
                  </div>
                ))}
              </dl>
              <div className={styles.swatches} aria-label="Theme colors">
                {swatches.map((swatch) => (
                  <span
                    key={swatch.title}
                    className={styles.swatch}
                    style={{ background: swatch.color }}
                    title={swatch.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.credit}>
            Coffee ASCII from{" "}
            <a
              href="https://textart.sh/topic/coffee"
              target="_blank"
              rel="noreferrer"
            >
              textart.sh
            </a>
            . Steam patched in at runtime.
          </div>
        </div>
      </div>
    </section>
  );
}
