<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { widgets } from './data/widgets'
import { changelog } from './data/changelog'

// Widget linkage and defaulting
const widgetSection = ref<HTMLElement | null>(null)
const activeWidgetId = ref('standings')

function selectWidget(id: string, scroll = false) {
  activeWidgetId.value = id
  const url = new URL(window.location.href)
  url.searchParams.set('widget', id)
  history.replaceState(null, '', url)
  if (scroll) {
    widgetSection.value?.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const param = new URLSearchParams(window.location.search).get('widget')
  if (param && widgets.some(w => w.id === param)) {
    activeWidgetId.value = param
    // Defer scroll so the page has painted
    setTimeout(() => widgetSection.value?.scrollIntoView({ behavior: 'smooth' }), 100)
  }
})

// Hamburger menu for mobile
const menuOpen = ref(false)

const baseUrl = import.meta.env.BASE_URL

// Set newest changelog entry as default
const activeVersionId = ref(changelog[0]!.version)

const activeEntry = computed(() => changelog.find(e => e.version === activeVersionId.value)!)

const activeWidget = computed(() => widgets.find(w => w.id === activeWidgetId.value)!)
const settingsWidget = computed(() => widgets.find(w => w.id === 'settings-menu')!)
</script>

<template>
  <nav>
    <span class="nav-brand">RRO</span>
    <button class="nav-burger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }" aria-label="Menu">
      <span /><span /><span />
    </button>
    <div class="nav-links" :class="{ open: menuOpen }" @click="menuOpen = false">
      <a href="#usage">Usage</a>
      <a href="#settings">Settings</a>
      <a href="#widgets">Widgets</a>
      <a href="#changelog">Changelog</a>
      <a href="#hotkeys">Hotkeys</a>
      <a href="#abbreviations">Abbreviations</a>
    </div>
    <div class="nav-download">
      <span class="badges-label">Download:</span>
      <a href="https://www.overtake.gg/downloads/racing-overlay.83941/" target="_blank" rel="noopener noreferrer" class="badge badge-free">Free</a>
      <a href="https://ko-fi.com/racingoverlay" target="_blank" rel="noopener noreferrer" class="badge badge-pro">Pro</a>
    </div>
  </nav>

  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <h1 style="letter-spacing: 0.001rem;">Raceroom Racing Overlay</h1>
      <p class="tagline">clean, lightweight, highly customisable</p>
    </section>

    <!-- Preview Video -->
    <section class="section section--video">
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/hnbsQHltzuk"
          title="RRO Preview"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          />
      </div>
    </section>

      <!-- Features -->
      <section id="features" class="section">
        <h2 class="section-title">Features</h2>
        <p>tracks your personal best lap times</p>
        <p>supports ultrawide, triple screen, fullscreen</p>
        <p>unlimited custom layouts</p>
        <p>minimal performance footprint</p>
        <p>highly accurate, runs at your game fps</p>
      </section>

      <!-- Usage -->
      <section id="usage" class="section">
        <h2 class="section-title">Getting Started</h2>
        <p>- launch RRO with one of the shortcuts it created</p>
        <p>- start a race session, go to track</p>
        <p>
          - press
          <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">Ctrl</kbd>
          +
          <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">Shift</kbd>
          +
          <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">S</kbd>
          to open the settings menu
        </p>
        <p>- to move widgets, click on the game window, move with left-click, change size with right-click</p>
        <p>
          - to go back to the menu, press
          <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">Ctrl</kbd>
          +
          <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">Shift</kbd>
          +
          <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">S</kbd>
          again
        </p>
        <p>- close menu to save layout</p>
      </section>

      <!-- Settings -->
      <section id="settings" class="section">
        <h2 class="section-title">Settings menu</h2>

          <p style="margin-bottom:1rem; color: var(--text-muted); font-size:0.88rem;">
            Press
            <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">Ctrl</kbd>
            +
            <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">Shift</kbd>
            +
            <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">S</kbd>
            anywhere to open the settings menu, also in main menu
          </p>

          <!-- Single card for settings menu -->
          <div class="widget-display">
            <div class="widget-card">
              <div class="widget-header">
                <h3>{{ settingsWidget.name }}</h3>
                <span v-if="settingsWidget.pro" class="tag-pro">Pro</span>
              </div>
              <ul v-if="settingsWidget.bullets && settingsWidget.bullets.length">
                <li v-for="(b, i) in settingsWidget.bullets" :key="i" v-html="b" />
              </ul>
              <p v-else style="color: var(--text-muted); font-size: 0.88rem;">No additional information.</p>
            </div>
            <div :class="['widget-preview-pane', { 'widget-preview-pane--tall': activeWidget.tallPreview }]">
              <video
                :class="['widget-preview-img', { 'widget-preview-tall-img': activeWidget.tallPreview }]"
                v-if="activeWidget.video"
                :src="baseUrl + activeWidget.video.replace(/^\//, '')"
                class="widget-preview-img"
                autoplay loop muted playsinline
              />
              <img
                :class="['widget-preview-img', { 'widget-preview-tall-img': activeWidget.tallPreview }]"
                v-else-if="activeWidget.preview"
                :src="baseUrl + activeWidget.preview.replace(/^\//, '')"
                :alt="activeWidget.name + ' preview'"
                class="widget-preview-img"
              />
              <div v-else class="widget-preview-empty">no preview available</div>
            </div>
          </div>
      </section>

      <!-- Widgets -->
      <section id="widgets" class="section" ref="widgetSection">
        <h2 class="section-title">Widgets</h2>

      <!-- Pill index -->
      <div class="widget-index">
        <button
          v-for="w in widgets"
          :key="w.id"
          class="widget-pill"
          :class="{ active: activeWidgetId === w.id, pro: w.pro }"
          @click="selectWidget(w.id)"
          >{{ w.name }}</button>
        </div>

        <!-- Single active card -->
        <div class="widget-display">
          <div class="widget-card">
            <div class="widget-header">
            <h3>{{ activeWidget.name }}</h3>
            <span v-if="activeWidget.pro" class="tag-pro">Pro</span>
          </div>
          <ul v-if="activeWidget.bullets && activeWidget.bullets.length">
            <li v-for="(b, i) in activeWidget.bullets" :key="i" v-html="b" />
          </ul>
          <p v-else style="color: var(--text-muted); font-size: 0.88rem;">No additional information.</p>
        </div>
        <div :class="['widget-preview-pane', { 'widget-preview-pane--tall': activeWidget.tallPreview }]">
          <video
            :class="['widget-preview-img', { 'widget-preview-tall-img': activeWidget.tallPreview }]"
            v-if="activeWidget.video"
            :src="baseUrl + activeWidget.video.replace(/^\//, '')"
            class="widget-preview-img"
            autoplay loop muted playsinline
          />
          <img
            :class="['widget-preview-img', { 'widget-preview-tall-img': activeWidget.tallPreview }]"
            v-else-if="activeWidget.preview"
            :src="baseUrl + activeWidget.preview.replace(/^\//, '')"
            :alt="activeWidget.name + ' preview'"
            class="widget-preview-img"
          />
          <div v-else class="widget-preview-empty">no preview available</div>
        </div>
      </div>
    </section>

    <!-- Changelog -->
    <section id="changelog" class="section">
      <h2 class="section-title">Changelog</h2>

      <div class="widget-index">
        <button
        v-for="entry in changelog"
        :key="entry.version"
        class="widget-pill"
        :class="{ active: activeVersionId === entry.version, pro: entry.pro }"
        @click="activeVersionId = entry.version"
        >{{ entry.label }}</button>
      </div>

      <div class="widget-card" style="max-width: 640px;">
        <div class="widget-header">
          <h3>Version {{ activeEntry.version }}</h3>
          <span v-if="activeEntry.pro" class="tag-pro">Pro</span>
        </div>
        <template v-for="(section, i) in activeEntry.sections" :key="i">
          <p v-if="section.heading" style="font-weight:600; margin: 0.75rem 0 0.25rem;">
            {{ section.heading }}
          </p>
          <ul>
            <li v-for="(item, j) in section.items" :key="j" v-html="item" />
          </ul>
        </template>
      </div>
    </section>

    <!-- Hotkeys -->
    <section id="hotkeys" class="section">
      <h2 class="section-title">Hotkeys</h2>
      <div class="hotkeys-grid">
        <div class="hotkey-row"><kbd>Ctrl+Shift+S</kbd><span>open settings menu</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+T</kbd><span>toggle hud on/off</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+K/L</kbd><span>switch to previous / next layout</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+G</kbd><span>flip analysis group page</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+W</kbd><span>flip cheat sheet page</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+O</kbd><span>cycle global background opacity</span></div>
        <div class="hotkey-row"><kbd>O + Left-Click</kbd><span>change single widget opacity</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+X</kbd><span>reset all widgets</span></div>
        <div class="hotkey-row"><kbd>X + Left-Click</kbd><span>reset single widget</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+Left-Click</kbd><span>disable a widget</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+R</kbd><span>restart the overlay</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+M</kbd><span>toggle edit mode (alternative)</span></div>
        <!-- <div class="hotkey-row"><kbd>Ctrl+Shift+H</kbd><span>backup toggle for edit mode</span></div> -->
      </div>
      <p style="margin-top:1rem; color: var(--text-muted); font-size:0.88rem;">
        Tip: assign Raceroom keybind <em>"move & resize hud elements"</em> to
        <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">M</kbd>
        and <em>"reset hud elements"</em> to
        <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">X</kbd>
        for quickest access
      </p>
    </section>

    <!-- Abbreviations -->
    <section id="abbreviations" class="section">
      <h2 class="section-title">Abbreviations</h2>
      <table class="abbrev-table">
        <tbody>
          <tr><td>°C</td><td>Degree celsius</td></tr>
          <tr><td>°F</td><td>Degree Fahrenheit</td></tr>
          <tr><td>ABS</td><td>Anti-lock Braking System</td></tr>
          <tr><td>BB</td><td>Brake Balance</td></tr>
          <tr><td>DRS</td><td>Drag Reduction System</td></tr>
          <tr><td>EB</td><td>Engine Brake</td></tr>
          <tr><td>EM</td><td>Engine Map</td></tr>
          <tr><td>FPS</td><td>Frames Per Second</td></tr>
          <tr><td>HY</td><td>Hypercars</td></tr>
          <tr><td>kPa</td><td>Kilopascal</td></tr>
          <tr><td>psi</td><td>Pound-Force per Square Inch</td></tr>
          <tr><td>PTP</td><td>Push to Pass</td></tr>
          <tr><td>RPM</td><td>Revolutions per Minute</td></tr>
          <tr><td>SoF</td><td>Strength of Field</td></tr>
          <tr><td>TC</td><td>Traction Control</td></tr>
          <tr><td>VE</td><td>Virtual Energy</td></tr>
        </tbody>
      </table>
    </section>
  </div>

  <footer>
    <p>© 2025 CG — Raceroom Racing Overlay</p>
  </footer>
</template>
