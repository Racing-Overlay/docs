<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { videoPreviews } from '../data/videos'

const activeVideoId = ref<string | null>(null)

function open(id: string) {
  activeVideoId.value = id
  document.body.style.overflow = 'hidden'
}
function close() {
  activeVideoId.value = null
  document.body.style.overflow = ''
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && activeVideoId.value) close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="videos" class="section section--video">
    <!-- <h2 class="section-title">Preview Videos</h2> -->

    <div class="video-grid">
      <button
        v-for="v in videoPreviews"
        :key="v.id"
        type="button"
        class="video-thumb"
        :aria-label="`Play ${v.title}`"
        @click="open(v.id)"
      >
        <img :src="`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`" :alt="v.title" loading="lazy" />
        <span class="video-play">▶</span>
        <span class="video-title">{{ v.title }}</span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="activeVideoId" class="lightbox-backdrop" @click="close">
          <button type="button" class="lightbox-close" aria-label="Close video" @click.stop="close">×</button>
          <div class="lightbox-video" @click.stop>
            <iframe
              :src="`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`"
              title="RRO Preview"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.video-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}
.video-thumb {
  position: relative;
  width: 240px;
  aspect-ratio: 16 / 9;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
}
.video-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.video-thumb:hover .video-play { transform: translate(-50%, -50%) scale(1.1); }

.video-play {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  transition: transform 0.15s;
  pointer-events: none;
}
.video-title {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.78rem;
  color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  text-align: left;
  pointer-events: none;
}

.lightbox-backdrop {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  padding: 2rem;
}
.lightbox-video { width: 100%; max-width: 960px; aspect-ratio: 16 / 9; }
.lightbox-video iframe { width: 100%; height: 100%; border-radius: 8px; border: 0; }
.lightbox-close {
  position: fixed; top: 1.25rem; right: 1.5rem;
  width: 40px; height: 40px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--bg-card);
  color: var(--text);
  font-size: 1.2rem; line-height: 1;
  cursor: pointer;
  z-index: 1001;
}
.lightbox-close:hover { border-color: var(--accent); color: var(--accent); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
