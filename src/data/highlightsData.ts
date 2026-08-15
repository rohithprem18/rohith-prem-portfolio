export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image?: string;
  link?: string;
  /** If true, clicking the card navigates straight to `link` instead of opening the proof modal. */
  external?: boolean;
};

export const highlightsData: Highlight[] = [
  {
    id: "ibm-z-datathon",
    title: "1st place — IBM Z Datathon 2024 (national-level)",
    badge: "1st Place",
    image: "/project-image/ibm_z_datathon.jpg",
  },
  {
    id: "isro-iit-kgp",
    title: "Top 4 nationally — ISRO x IIT Kharagpur Hackathon",
    badge: "Top 4",
    image: "/project-image/iit_kgp.jpg",
  },
  {
    id: "oracle-sql",
    title: "Oracle Database SQL Certified Associate (1Z0-914)",
    badge: "Certification",
    image: "/project-image/oracle_badge.jpg",
  },
  {
    id: "quizonquants",
    title: "Runner-up — QuizOnQuants, Saveetha Engineering College",
    badge: "Runner-up",
    image: "/project-image/quiz_on_quants.jpg",
  },
  {
    id: "leetcode",
    title: "300+ Data Structures & Algorithms problems solved on LeetCode",
    badge: "LeetCode",
    image: "/project-image/leetcode.png",
    link: "https://leetcode.com/u/rohithprem_18/",
    external: true,
  },
  {
    id: "flipkart-grid-7",
    title: "National Semi-Finalist — Flipkart GRID 7.0",
    badge: "Semi-Finalist",
    image: "/project-image/flipkart_grid_7.jpg",
  },
];
