import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    appDir: true,
  },
};
const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});
export default withMDX(nextConfig);
