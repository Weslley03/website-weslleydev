import colors from "./colors";

const stripTags = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

export function highlightTech(text) {
  const clean = stripTags(text);
  const regex = /\b(typescript|javascript|react|vue(?:\.js)?|nestjs|pinia|html|css)\b/gi;

  const nodes= [];
  let lastIndex = 0;
  let m

  while ((m = regex.exec(clean)) !== null) {
    const word = m[0];
    const before = clean.slice(lastIndex, m.index);
    nodes.push(before);

    const key = word.toLowerCase().replace(".js", "");

    nodes.push(
      <span key={`${m.index}-${word}`} style={{ color: colors[key], fontWeight: 600 }}>
        {word}
      </span>
    );

    lastIndex = regex.lastIndex;
  }

  nodes.push(clean.slice(lastIndex));
  return nodes;
}
