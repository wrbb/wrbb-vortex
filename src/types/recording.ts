export type RecordingRaw = {
  firstTrack: string;
  id: number;
  start: string;
  url: string;
};

export type Recording = {
  firstTrack: string;
  id: number;
  start: Date;
  url: string;
};
