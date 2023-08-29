import Gallery from "@/components/Gallery";

export function generateMetadata({ params: { term } }) {
  return {
    title: `Results for ${term}`,
  };
}

export default function SearchResults({ params: { term } }) {
  return <Gallery topic={term} />;
}
