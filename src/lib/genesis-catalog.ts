import featureArtwork from "@/assets/genesis-feature.jpg";
import creationArtwork from "@/assets/genesis-creation.jpg";
import josephArtwork from "@/assets/genesis-joseph.jpg";

export type StoryArc = "Creation" | "The Fall" | "Noah" | "Abraham" | "Isaac & Jacob" | "Joseph";

export type GenesisEpisode = {
  id: string;
  chapterStart: number;
  chapterEnd: number;
  title: string;
  artwork: string;
  youtubeId?: string;
};

export const storyArcs: { name: StoryArc; start: number; end: number; artwork: string }[] = [
  { name: "Creation", start: 1, end: 2, artwork: creationArtwork },
  { name: "The Fall", start: 3, end: 5, artwork: featureArtwork },
  { name: "Noah", start: 6, end: 11, artwork: creationArtwork },
  { name: "Abraham", start: 12, end: 25, artwork: featureArtwork },
  { name: "Isaac & Jacob", start: 26, end: 36, artwork: josephArtwork },
  { name: "Joseph", start: 37, end: 50, artwork: josephArtwork },
];

export const genesisEpisodes: GenesisEpisode[] = [
  { id: "genesis-1", chapterStart: 1, chapterEnd: 1, title: "Six days that shook eternity", artwork: creationArtwork, youtubeId: "CyacCzk60rs" },
  { id: "genesis-2", chapterStart: 2, chapterEnd: 2, title: "Four rivers and the Four Gospels", artwork: featureArtwork, youtubeId: "jLVEkL97vzQ" },
  { id: "genesis-3", chapterStart: 3, chapterEnd: 3, title: "The Fall of Man", artwork: featureArtwork, youtubeId: "JUaI24wlP-A" },
  { id: "genesis-4", chapterStart: 4, chapterEnd: 4, title: "Cain and Abel — The First Murder", artwork: creationArtwork, youtubeId: "3UFs0Jb3SOE" },
  { id: "genesis-5", chapterStart: 5, chapterEnd: 5, title: "Strength through genealogy", artwork: creationArtwork, youtubeId: "ql32a0ETlyQ" },
  { id: "genesis-6", chapterStart: 6, chapterEnd: 6, title: "Creation outsmarting the Creator", artwork: featureArtwork, youtubeId: "_gjTUUd9ksU" },
  { id: "genesis-7", chapterStart: 7, chapterEnd: 7, title: "A deluge descends", artwork: creationArtwork, youtubeId: "R0WkvAnVzGU" },
  { id: "genesis-8", chapterStart: 8, chapterEnd: 8, title: "The altar and the promise", artwork: featureArtwork, youtubeId: "W-lj3E8TWhg" },
  { id: "genesis-9", chapterStart: 9, chapterEnd: 9, title: "Never again", artwork: creationArtwork, youtubeId: "csUAS5qKji8" },
  { id: "genesis-10", chapterStart: 10, chapterEnd: 10, title: "Genesis 10", artwork: featureArtwork, youtubeId: "Av560jVm8zY" },
  { id: "genesis-11", chapterStart: 11, chapterEnd: 11, title: "Genesis 11", artwork: creationArtwork },
  { id: "genesis-12", chapterStart: 12, chapterEnd: 12, title: "Faith, failure, redemption", artwork: featureArtwork },
  { id: "genesis-13", chapterStart: 13, chapterEnd: 13, title: "Abraham and Lot separate", artwork: josephArtwork },
  { id: "genesis-14", chapterStart: 14, chapterEnd: 14, title: "The rescue", artwork: creationArtwork },
  { id: "genesis-15", chapterStart: 15, chapterEnd: 15, title: "The covenant of blood and fire", artwork: featureArtwork },
  { id: "genesis-16", chapterStart: 16, chapterEnd: 16, title: "The God who sees", artwork: josephArtwork },
  { id: "genesis-17", chapterStart: 17, chapterEnd: 17, title: "A new promise", artwork: creationArtwork },
  { id: "genesis-18", chapterStart: 18, chapterEnd: 18, title: "A promised son", artwork: featureArtwork },
  { id: "genesis-19", chapterStart: 19, chapterEnd: 19, title: "The fall of Sodom and Gomorrah", artwork: creationArtwork },
  { id: "genesis-20", chapterStart: 20, chapterEnd: 20, title: "God speaks to Abimelech", artwork: josephArtwork },
  { id: "genesis-21", chapterStart: 21, chapterEnd: 21, title: "Promise, pain and peace", artwork: featureArtwork },
  { id: "genesis-22", chapterStart: 22, chapterEnd: 22, title: "God tests Abraham", artwork: creationArtwork },
  { id: "genesis-23", chapterStart: 23, chapterEnd: 23, title: "The death of Sarah", artwork: josephArtwork },
  { id: "genesis-24", chapterStart: 24, chapterEnd: 24, title: "Isaac and Rebekah", artwork: featureArtwork },
  { id: "genesis-25-26", chapterStart: 25, chapterEnd: 26, title: "Genesis 25 and 26", artwork: creationArtwork },
  { id: "genesis-27-29", chapterStart: 27, chapterEnd: 29, title: "Genesis 27–29", artwork: josephArtwork },
  { id: "genesis-30-32", chapterStart: 30, chapterEnd: 32, title: "The story of Joseph", artwork: featureArtwork },
  { id: "genesis-33-37", chapterStart: 33, chapterEnd: 37, title: "Jacob and Joseph", artwork: josephArtwork },
  { id: "genesis-38-40", chapterStart: 38, chapterEnd: 40, title: "Genesis chapters 38–40", artwork: creationArtwork },
  { id: "genesis-41", chapterStart: 41, chapterEnd: 41, title: "The purpose of God — Joseph's story", artwork: josephArtwork },
  { id: "genesis-42", chapterStart: 42, chapterEnd: 42, title: "Joseph sees his brothers again", artwork: featureArtwork },
  { id: "genesis-43", chapterStart: 43, chapterEnd: 43, title: "The family reunion that changed history", artwork: josephArtwork },
  { id: "genesis-44", chapterStart: 44, chapterEnd: 44, title: "Joseph's final test", artwork: creationArtwork },
  { id: "genesis-45", chapterStart: 45, chapterEnd: 45, title: "The brother they sold was now their hope", artwork: featureArtwork },
  { id: "genesis-46-50", chapterStart: 46, chapterEnd: 50, title: "The journey to Egypt and the beginning of a nation", artwork: josephArtwork },
];

export function chaptersLabel(episode: GenesisEpisode) {
  return episode.chapterStart === episode.chapterEnd
    ? `Genesis ${episode.chapterStart}`
    : `Genesis ${episode.chapterStart}–${episode.chapterEnd}`;
}

export function episodeWatchUrl(episode: GenesisEpisode) {
  return episode.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${episode.youtubeId}?rel=0&modestbranding=1`
    : `https://visualbible.nrim.org/visual-bible?ch=${episode.chapterStart}`;
}

export function episodeForId(id: string) {
  return genesisEpisodes.find((episode) => episode.id === id) ?? null;
}

export function episodeStoryArcs(episode: GenesisEpisode) {
  return storyArcs
    .filter((arc) => episode.chapterStart <= arc.end && episode.chapterEnd >= arc.start)
    .map((arc) => arc.name);
}