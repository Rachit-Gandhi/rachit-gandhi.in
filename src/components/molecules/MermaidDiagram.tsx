import { useEffect, useId, useRef, useState } from "react";
import styles from "./MermaidDiagram.module.css";

type MermaidDiagramProps = {
  chart: string;
  caption?: string;
};

type ThemeColors = {
  bg: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textMuted: string;
};

type MermaidInstance = typeof import("mermaid")["default"];

let mermaidLoader: Promise<MermaidInstance> | null = null;

export default function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
  const id = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let disposed = false;

    const render = async () => {
      const container = containerRef.current;
      if (!container) return;

      const mermaid = await loadMermaid();
      const colors = readThemeColors();

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        themeVariables: {
          background: colors.bg,
          primaryColor: colors.surface,
          primaryBorderColor: colors.primary,
          primaryTextColor: colors.text,
          secondaryColor: colors.bg,
          secondaryBorderColor: colors.secondary,
          secondaryTextColor: colors.text,
          tertiaryColor: colors.surface,
          tertiaryBorderColor: colors.accent,
          tertiaryTextColor: colors.text,
          lineColor: colors.primary,
          textColor: colors.text,
          mainBkg: colors.surface,
          nodeBorder: colors.primary,
          clusterBkg: colors.bg,
          clusterBorder: colors.secondary,
          edgeLabelBackground: colors.bg,
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif",
        },
        flowchart: {
          curve: "basis",
          htmlLabels: true,
          nodeSpacing: 48,
          rankSpacing: 58,
        },
      });

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        if (disposed) return;
        container.innerHTML = svg;
        setError(null);
      } catch (renderError) {
        if (disposed) return;
        container.textContent = "";
        setError(renderError instanceof Error ? renderError.message : "Unable to render Mermaid diagram.");
      }
    };

    void render();

    const observer = new MutationObserver(() => {
      void render();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [chart, id]);

  return (
    <figure className={styles.figure}>
      <div className={styles.viewport}>
        {error ? <pre className={styles.error}>{error}</pre> : null}
        <div ref={containerRef} className={styles.content} aria-hidden={error ? "true" : undefined} />
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}

function loadMermaid() {
  mermaidLoader ??= import("mermaid").then((module) => module.default);
  return mermaidLoader;
}

function readThemeColors(): ThemeColors {
  const computed = getComputedStyle(document.documentElement);

  return {
    bg: readCssVar(computed, "--bg"),
    surface: readCssVar(computed, "--surface"),
    primary: readCssVar(computed, "--primary"),
    secondary: readCssVar(computed, "--secondary"),
    accent: readCssVar(computed, "--accent", readCssVar(computed, "--highlight", "#A67C52")),
    text: readCssVar(computed, "--text"),
    textMuted: readCssVar(computed, "--textMuted"),
  };
}

function readCssVar(computed: CSSStyleDeclaration, name: string, fallback = "#000000") {
  return computed.getPropertyValue(name).trim() || fallback;
}
