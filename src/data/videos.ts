export interface VideoPreview {
  /** the YouTube video ID — the part after v= or /embed/ */
  id: string
  title: string
}

export const videoPreviews: VideoPreview[] = [
  { id: 'uyTrb9ucBzk', title: '3.0.1 Preview' },
  { id: 'y3-79ijT0xY', title: '4.0.0 VR Demo' },
  // add more: { id: '...', title: '...' }
]
