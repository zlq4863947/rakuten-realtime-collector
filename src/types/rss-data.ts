export interface RssData {
  topic: string;
  item: string;
  text: string;
}

export interface RssTopicData {
  [topic: string]: RssItemData;
}

export interface RssItemData {
  [Item: string]: string;
}
