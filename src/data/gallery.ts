export interface GalleryImage {
  /** path relative to /public, e.g. '/images/previews/standings.webp' */
  file: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  { file: '/images/previews/sepang_open_tyreanalysis_spinlock.webp', alt: 'Sepang FRJ' },
  { file: '/images/previews/portimao_offtrack_dtpen.webp', alt: 'Portimao Silhouette' },
  { file: '/images/previews/background_opacity_cockpit_closed.webp', alt: 'RR Raceway P1' },
  { file: '/images/previews/all_widgets_cockpit_open.webp', alt: 'All widgets' },
  { file: '/images/previews/grouped_mozilla_portimao.webp', alt: 'Mozilla font' },
  { file: '/images/previews/sepang_hillclimb_veh_dyn.webp', alt: 'Mozilla font' },
]
