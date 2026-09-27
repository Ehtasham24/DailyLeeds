// Framer's animation + layout engine, split into its own chunk so it loads
// right after the page instead of blocking it. domMax (not domAnimation)
// because the nav's active-link pill uses layoutId.
export { domMax as default } from "framer-motion";
