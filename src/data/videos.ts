export interface VideoPreview {
  /** the YouTube video ID — the part after v= or /embed/ */
  id: string
  title: string
}

export const videoPreviews: VideoPreview[] = [
  { id: 'hnbsQHltzuk', title: 'RRO Preview' },
  // add more: { id: '...', title: '...' }
]
