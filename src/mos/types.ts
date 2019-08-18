export interface RssPubData {
  [topicItem: string]: string;
}

export interface RssData {
  date: string;
  topic: string;
  item: string;
  text: string;
}

export interface LogData {
  Date: string;
  Level: string;
  Event: string;
  Data: {
    service: string;
    topic: string;
    item: string;
    text: string;
  };
}
