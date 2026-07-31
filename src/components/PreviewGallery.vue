<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { galleryImages, type GalleryImage } from '../data/gallery'

const baseUrl = import.meta.env.BASE_URL
const AUTO_ADVANCE_MS = 10000
const MAX_SIDE = 3 // thumbnails shown on each side of the active one — tune to taste

const activeIndex = ref(0)
const activeImage = computed(() => galleryImages[activeIndex.value])
const lightboxOpen = ref(false)

let timer: ReturnType<typeof setInterval> | null = null

function wrap(i: number) {
  const n = galleryImages.length
  return ((i % n) + n) % n
}

// shrinks automatically for small galleries so no image appears twice at once
const side = computed(() => Math.min(MAX_SIDE, Math.floor((galleryImages.length - 1) / 2)))

const visibleThumbs = computed(() => {
  const s = side.value
  const items: { idx: number; offset: number; img: GalleryImage }[] = []
  for (let offset = -s; offset <= s; offset++) {
    const idx = wrap(activeIndex.value + offset)
    const img = galleryImages[idx]
    if (img) items.push({ idx, offset, img })
  }
  return items
})

function startTimer() {
  stopTimer()
  if (!lightboxOpen.value && galleryImages.length > 1) {
    timer = setInterval(() => {
      activeIndex.value = wrap(activeIndex.value + 1)
    }, AUTO_ADVANCE_MS)
  }
}
function stopTimer() {
  if (timer) clearInterval(timer)
  timer = null
}
function select(i: number) {
  activeIndex.value = i
  startTimer()
}
function srcFor(file: string) {
  return baseUrl + file.replace(/^\//, '')
}
function openLightbox() {
  lightboxOpen.value = true
  stopTimer()
  document.body.style.overflow = 'hidden'
}
function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
  startTimer()
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && lightboxOpen.value) closeLightbox()
}

onMounted(() => {
  startTimer()
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  stopTimer()
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="gallery" class="section section--gallery">
    <!-- <h2 class="section-title">Preview Gallery</h2> -->

    <template v-if="activeImage">
      <div class="gallery-main" @mouseenter="stopTimer" @mouseleave="startTimer">
        <Transition name="crossfade">
          <img
            :key="activeImage.file"
            :src="srcFor(activeImage.file)"
            :alt="activeImage.alt"
            class="gallery-main-img"
            @click="openLightbox"
          />
        </Transition>
      </div>

      <TransitionGroup
        tag="div"
        name="carousel"
        class="gallery-thumbs"
        @mouseenter="stopTimer"
        @mouseleave="startTimer"
      >
        <button
          v-for="t in visibleThumbs"
          :key="t.idx"
          type="button"
          class="gallery-thumb"
          :class="{ active: t.offset === 0 }"
          :style="{ opacity: 1 - Math.abs(t.offset) * 0.15 }"
          :aria-label="t.img.alt"
          @click="select(t.idx)"
        >
          <img :src="srcFor(t.img.file)" :alt="t.img.alt" loading="lazy" />
        </button>
      </TransitionGroup>
    </template>
    <p v-else class="widget-preview-empty">no previews available</p>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="lightboxOpen" class="lightbox-backdrop" @click="closeLightbox">
          <button type="button" class="lightbox-close" aria-label="Close preview" @click.stop="closeLightbox">×</button>
          <img
            v-if="activeImage"
            :src="srcFor(activeImage.file)"
            :alt="activeImage.alt"
            class="lightbox-img"
            @click.stop
          />
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery-main {
  position: relative;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.gallery-main-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: zoom-in;
}
.crossfade-enter-active, .crossfade-leave-active { transition: opacity 0.5s ease; }
.crossfade-enter-from, .crossfade-leave-to { opacity: 0; }

.gallery-thumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 800px;
  margin: 0.75rem auto 0;
  position: relative;
}
.gallery-thumb {
  flex: 0 0 auto;
  width: 96px;
  height: 60px;
  padding: 0;
  background: var(--bg-card);
  border: 2px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.15s, opacity 0.3s ease;
}
.gallery-thumb:hover { border-color: var(--accent); }
.gallery-thumb.active { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
.gallery-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

.carousel-move { transition: transform 0.4s ease; }
.carousel-enter-active, .carousel-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.carousel-enter-from, .carousel-leave-to { opacity: 0; transform: scale(0.8); }
.carousel-leave-active { position: absolute; }

.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}
.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: var(--radius);
  cursor: default;
}
.lightbox-close {
  position: fixed;
  top: 1.25rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--bg-card);
  color: var(--text);
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1001;
}
.lightbox-close:hover { border-color: var(--accent); color: var(--accent); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
