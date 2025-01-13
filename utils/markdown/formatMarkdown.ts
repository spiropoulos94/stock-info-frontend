import { marked } from "marked";

/**
 * Formats a string with Markdown elements into properly formatted HTML.
 * @param markdownContent - A string containing Markdown elements.
 * @returns A promise resolving to a string containing the formatted HTML.
 * @throws Error if the input is not a valid string.
 */
export async function formatMarkdown(markdownContent: string): Promise<string> {
  if (!markdownContent || typeof markdownContent !== "string") {
    throw new Error("Input must be a non-empty string.");
  }

  // Configure marked options if needed
  marked.setOptions({
    breaks: true, // Converts line breaks to <br>
    gfm: true,    // Enables GitHub Flavored Markdown
  });

  try {
    // Convert markdown to HTML (marked may return a Promise or a string)
    const result = marked(markdownContent);

    // If the result is a Promise, wait for it to resolve
    return await Promise.resolve(result);
  } catch (error) {
    throw new Error(`Failed to format markdown: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Example usage:
// (async () => {
//   const markdownString = `# Hello World\n\nThis is a **bold** text and [a link](https://example.com).`;
//   const formattedHTML = await formatMarkdown(markdownString);
//   console.log(formattedHTML);
// })();
