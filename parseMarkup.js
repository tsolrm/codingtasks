const parseMarkup = ([ tag, ...children ]) => {
  if (children.length === 0) return `<${tag}/>`;

  let result = `<${tag}>`;

  children.forEach((child) => {
    if (Array.isArray(child)) {
      result += parseMarkup(child);
    } else {
      result += child.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
  });

  return result += `</${tag}>`;
}