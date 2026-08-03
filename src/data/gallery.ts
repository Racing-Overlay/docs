export interface GalleryImage {
  /** path relative to /public, e.g. '/images/previews/standings.png' */
  file: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  { file: '/images/previews/sepang_open_tyreanalysis_spinlock.png', alt: 'Sepang FRJ' },
  { file: '/images/previews/portimao_offtrack_dtpen.png', alt: 'Portimao Silhouette' },
  { file: '/images/previews/background_opacity_cockpit_closed.png', alt: 'RR Raceway P1' },
  { file: '/images/previews/all_widgets_cockpit_open.png', alt: 'All widgets' },
  { file: '/images/previews/grouped_mozilla_portimao.png', alt: 'Mozilla font' },
]
