export const isProjectLink = (url) => {
  if (!url || typeof url !== "string") return false;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return false;

    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "demo.com") return false;
    if (
      (host === "github.com" || host === "gitlab.com") &&
      (parsed.pathname === "/" || parsed.pathname === "")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};
