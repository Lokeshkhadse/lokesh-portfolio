// src/lib/fetchWpPost.js
export async function fetchPostBySlug(slug) {
  const url = `https://learnerbits.com/wp-json/wp/v2/posts?slug=${slug}&_embed`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch post");
  const data = await res.json();
  return data[0]; // returns the single post
}
