<script setup lang="ts">
import { ref, computed } from 'vue'

const activeWidgetId = ref('standings')

// Hamburger menu for mobile
const menuOpen = ref(false)

interface Widget {
  id: string
  name: string
  pro?: boolean
  preview?: string   // image fallback (.png / .jpg)
  video?: string     // animated preview (.webm)
  bullets?: string[]
  tallPreview?: boolean
}

const baseUrl = import.meta.env.BASE_URL

const widgets: Widget[] = [
  { id: 'abs-tc', name: 'ABS / TC Activity', video: '/images/widgets/abs_tc.webm', preview: '/images/widgets/abs_tc.png', bullets: [
    'dark grey font when assist is disabled',
    'selected level shown as a number',
    'activity highlighted in <strong>yellow</strong>',
  ]},
  { id: 'battery', name: 'Battery', video: '/images/widgets/battery.webm', preview: '/images/widgets/battery.png', bullets: [
    'current battery state of charge',
    '<strong>blue</strong> = discharging<br><strong>green</strong> = recharging<br><strong>yellow</strong> = low',
    'shows discharge / regen rate when changed',
  ]},
  { id: 'best-lap', name: 'Best Lap Times', preview: '/images/widgets/best_lap.png', bullets: [
    '<strong>sb:</strong> your session best lap time',
    '<strong>pb:</strong> your all-time personal best',
  ]},
  { id: 'brake-temps', name: 'Brake Temperatures', video: '/images/widgets/brake_temps.webm', preview: '/images/widgets/brake_temps.png', bullets: [
    'brake temperature colours (blue → dark red)',
    'text optional, units: °C or °F',
    'layout:<br>left front — left rear — right rear — right front',
  ]},
  { id: 'car-settings', name: 'Car Settings', video: '/images/widgets/car_settings.webm', preview: '/images/widgets/car_settings.png', bullets: [
    'brake balance',
    'traction control percentage',
    'engine map',
    'engine brake',
  ]},
  { id: 'car-temps', name: 'Car Temperatures', video: '/images/widgets/car_temps.webm', preview: '/images/widgets/car_temps.png', bullets: [
    'engine (e) and oil (o) temperature colours',
    'units: °C or °F',
  ]},
  { id: 'current-lap', name: 'Current Lap Time', video: '/images/widgets/current_lap.webm', preview: '/images/widgets/current_lap.png', bullets: [
    '<strong>this:</strong> current lap time',
    '<strong>last:</strong> previous lap time',
    'time struck through in red if the lap was invalid',
  ]},
  { id: 'custom-logo', name: 'Custom Logo', preview: '/images/widgets/custom_logo.png', pro: true, bullets: [
    'load your own logo: place <code>logo_1.png</code> in <code>Documents/My Games/RRO/Logos/</code>',
    'png format, square aspect ratio recommended',
  ]},
  { id: 'damage', name: 'Damage', video: '/images/widgets/damage.webm', preview: '/images/widgets/damage.png', bullets: [
    'damage per component group:<br>aerodynamics<br>springs (suspension)<br> engine<br>gears (transmission)',
  ]},
  { id: 'delta-bar', name: 'Delta Bar', video: '/images/widgets/delta_bar.webm', preview: '/images/widgets/delta_bar.png', bullets: [
    'delta to session best lap time',
  ]},
  { id: 'drs', name: 'DRS', video: '/images/widgets/drs.webm', preview: '/images/widgets/drs.png', bullets: [
    'disabled when DRS is not available',
    'activations left shown in brackets',
  ]},
  { id: 'ffb', name: 'FFB Bar', pro: true, video: '/images/widgets/ffb.webm', preview: '/images/widgets/ffb.png', bullets: [
    'FFB magnitude and maximum',
    'tracks cuts above the upper threshold',
  ]},
  { id: 'flags', name: 'Flags', video: '/images/widgets/flags.webm', preview: '/images/widgets/flags.png', bullets: [
    'digiflag display of currently shown flag',
  ]},
  { id: 'flat-map', name: 'Flat Map', pro: true, preview: '/images/widgets/flat_map.png', bullets: [
    'represents the track length',
    'all drivers\' positions relatively',
    'Colour-coded per class',
    'number = position in class',
  ]},
  { id: 'fps', name: 'FPS', video: '/images/widgets/fps.webm', preview: '/images/widgets/fps.png', bullets: [
    'current frames per second',
    'updated per second',
  ]},
  { id: 'fuel-calc', name: 'Fuel Calculator', pro: true, video: '/images/widgets/fuel_calc.webm', preview: '/images/widgets/fuel_calc.png', bullets: [
    '<strong>laps left:</strong> laps left at current avg',
    '<strong>time left:</strong> time left at current avg<br>(HY: VE laps left)',
    '<strong>avg/lap:</strong> average consumption',
    '<strong>last lap:</strong> fuel used last lap',
    '<strong>left at finish:</strong> projected fuel left at race end',
    '<strong>to add:</strong> fuel needed to finish',
  ]},
  { id: 'fuel-gauge', name: 'Fuel Gauge', video: '/images/widgets/fuel_gauge.webm', preview: '/images/widgets/fuel_gauge.png', bullets: [
    'fuel remaining and total tank capacity',
    'units: litres or US gallons',
  ]},
  { id: 'gear', name: 'Gear', video: '/images/widgets/gear.webm', preview: '/images/widgets/gear.png', bullets: [
    'currently selected gear',
    'colour code for critical rpm',
  ]},
  { id: 'headlights', name: 'Headlights', video: '/images/widgets/headlights.webm', preview: '/images/widgets/headlights.png', bullets: [
    'hidden on cars without headlights',
    '<strong>grey</strong> = off<br><strong>white</strong> = on<br><strong>yellow</strong> = flashing',
  ]},
  { id: 'ignition', name: 'Ignition & Starter', video: '/images/widgets/ignition.webm', preview: '/images/widgets/ignition.png', bullets: [
    '<strong>grey</strong> = off<br><strong>red</strong> = starter on<br><strong>flashing red</strong> = starting<br><strong>white</strong> = running',
  ]},
  { id: 'incident', name: 'Incident Points', preview: '/images/widgets/incident.png', bullets: [
    'only visible in multiplayer sessions',
    'incident points accrued and the session limit',
    'number of cuts',
  ]},
  { id: 'input-graph', name: 'Input Graph', pro: true, video: '/images/widgets/input_graph.webm', preview: '/images/widgets/input_graph.png', bullets: [
    '<strong>white:</strong> clutch<br><strong>green:</strong> throttle<br><strong>red:</strong> brake',
    'toggle interval in settings: 5, 10 or 20 seconds',
  ]},
  { id: 'lap-log', name: 'Lap Time Log', pro: true, preview: '/images/widgets/lap_log.png', bullets: [
    'last seven lap times with delta to previous lap',
    'personal best and session best laps highlighted',
    'invalid laps struck red',
  ]},
  { id: 'pedals', name: 'Pedals', video: '/images/widgets/pedals.webm', preview: '/images/widgets/pedals.png', bullets: [
    'left to right: clutch, brake, throttle',
    '<strong>white bar:</strong> input from controller device',
    '<strong>grey bar:</strong> input received by the car',
  ]},
  { id: 'penalties', name: 'Penalties', pro: true, video: '/images/widgets/penalties.webm', preview: '/images/widgets/penalties.png', bullets: [
    'hidden when no penalties are pending',
    '<strong>yellow:</strong> slowdown (seconds to give back)',
    '<strong>red:</strong> drive through / stop&amp;go (laps to serve)',
  ]},
  { id: 'pit-info', name: 'Pit Stop Info', video: '/images/widgets/pit_info.webm', preview: '/images/widgets/pit_info.png', bullets: [
    'current and total pit stop time',
    'minimum stoppage time (if set)',
    'current action and scheduled task status',
  ]},
  { id: 'pit-window', name: 'Pit Window', video: '/images/widgets/pit_window.webm', preview: '/images/widgets/pit_window.png', bullets: [
    'shown when mandatory stop exists, pit limiter is on, or stop is requested',
    '<strong>yellow</strong> = 1 min until window opens<br><strong>green</strong> = window open',
    'Number in brackets = laps/minutes window open',
    'shows pit speed limit on pit request',
    'disappears once mandatory stop served',
  ]},
  { id: 'proximity', name: 'Proximity Warners', pro: true, video: '/images/widgets/proximity.webm', preview: '/images/widgets/proximity.png', bullets: [
    'bars at the left, right and bottom screen edges',
    'colour intensity increases the closer a car is on that side',
  ]},
  { id: 'ptp', name: 'Push to Pass', video: '/images/widgets/ptp.webm', preview: '/images/widgets/ptp.png', bullets: [
    'activity colour-coded; countdown while active',
    '<strong>blue:</strong> charging (LRT)<br><strong>green:</strong> ready to use<br><strong>yellow:</strong> active',
    'remaining activations in brackets',
    'hidden when ptp is not available',
    'acts as overtake button indicator in FR-X22',
  ]},
  { id: 'race-control', name: 'Race Control', video: '/images/widgets/race_control.webm', preview: '/images/widgets/race_control.png', bullets: [
    'lap validity',
    'flag messages',
    'penalty messages',
  ]},
  { id: 'radar', name: 'Radar', video: '/images/widgets/radar.webm', preview: '/images/widgets/radar.png', bullets: [
    'top-down view of surrounding cars and their relative orientation',
    'variable detection range (see settings menu)',
  ]},
  { id: 'relative', name: 'Relative', preview: '/images/widgets/relative.png', bullets: [
    'gaps to the six drivers closest to you',
    'columns: overall position, name, (rat/rep), delta',
    'lapped status: blue = ahead, red = behind',
    '<span class="tag-pro">Pro</span> driver class colour',
    '<span class="tag-pro">Pro</span> in mp: rating and reputation',
  ]},
  { id: 'rpm', name: 'RPM', video: '/images/widgets/rpm.webm', preview: '/images/widgets/rpm.png', bullets: [
    'rpm bar with colour code for critical revolutions',
  ]},
  { id: 'sectors', name: 'Sector Times', video: '/images/widgets/sectors.webm', preview: '/images/widgets/sectors.png', bullets: [
    'own current times for track sectors',
    '<strong>white</strong> = normal<br><strong>green</strong> = own best<br><strong>pink</strong> = session best<br><strong>black</strong> = invalid',
  ]},
  { id: 'session-info', name: 'Session Info', video: '/images/widgets/session_info.webm', preview: '/images/widgets/session_info.png', bullets: [
    'time of day',
    'session type, time remaining in session',
    'current lap and projected total laps',
    'overall position, <span class="tag-pro">Pro</span> (position in class)',
    'session best lap time',
  ]},
  { id: 'speed', name: 'Speed', video: '/images/widgets/speed.webm', preview: '/images/widgets/speed.png', bullets: [
    'current speed in km/h or mph',
    '<span class="tag-pro">Pro</span> average speed',
  ]},
  { id: 'standings', name: 'Standings', tallPreview: true, video: '/images/widgets/standings.webm', preview: '/images/widgets/standings.png', bullets: [
    'columns:<br>position, position change, logo, number, driver name, time, tyre compound, pit info',
    'practice/qualifying: session best lap time',
    'race: gap to leader, last lap, pit stop status',
    '<span class="tag-pro">Pro</span> class standings with class colours',
    '<span class="tag-pro">Pro</span> in mp: SoF per class',
    '<span class="tag-pro">Pro</span> HY: VE per driver',
  ]},
  { id: 'start-lights', name: 'Start Lights', video: '/images/widgets/start_lights.webm',
    preview: '/images/widgets/start_lights.png', bullets: ['reasonably sized']
  },
  { id: 'steering', name: 'Steering Wheel', video: '/images/widgets/steering.webm', preview: '/images/widgets/steering.png', bullets: [
    'visualisation of steering inputs',
    '<span class="tag-pro">Pro</span> load your own texture:<br>place <code>st_wheel.png</code> in <code>Documents/My Games/RRO/Wheels/</code> (square PNG with transparency)',
  ]},
  { id: 'tyre-info', name: 'Tyre Info', video: '/images/widgets/tyre_info.webm', preview: '/images/widgets/tyre_info.png', bullets: [
    'per tyre:<br>pressure (kPa / psi), condition (%),<br>segment temperature (°C / °F)',
    'dirt pick up',
  ]},
  { id: 'virtual-energy', name: 'Virtual Energy', preview: '/images/widgets/virtual_energy.png', bullets: [
    'VE tank content',
    'after 2 laps, projection appears:<br><strong>F+</strong> add fuel, <strong>F-</strong> remove fuel, <strong>✓</strong> on target',
    '(do 2–3 consistent laps in practice to calibrate; treat as an approximation)',
  ]},
  { id: 'water-spray', name: 'Water Spray', preview: '/images/widgets/water_spray.png', bullets: [
    'brake cooling water remaining',
    '*only used in RaceRoom Truck class',
  ]},
  { id: 'wheel-info', name: 'Wheel Info', video: '/images/widgets/wheel_info.webm', preview: '/images/widgets/wheel_info.png', bullets: [
    'tyre compound and laps in use per wheel',
    '<span class="tag-pro">Pro</span> yellow indicator for wheel spin',
    '<span class="tag-pro">Pro</span> blue indicator for wheel lock',
  ]},
  { id: 'settings-menu', name: 'Settings Menu', tallPreview: true, preview: '/images/widgets/settings_menu.png', bullets: [
    'enable proximity beep:<br>turn the audible radar beep on/off',
    'beep frequency:<br>set the pitch of the radar beep',
    'show temperature text:<br>turn temps being shown as numbers on/off',
    'units:<br>Switch between metric and imperial US units',
    'radar range:<br>how far away the radar detects opponents',
    '<span class="tag-pro">Pro</span> pedal graph interval:<br>how many seconds the input graph will project',
    'enable debug logging:<br>what it says, usually not required',
  ]},
]

interface ChangelogEntry {
  version: string
  label: string       // short pill label
  pro?: boolean
  sections: { heading?: string; items: string[] }[]
}

const activeVersionId = ref('0.9.7')

const changelog: ChangelogEntry[] = [
  {
    version: '0.9.7', label: '0.9.7', pro: false,
    sections: [
      { heading: 'Beep Beep! Some important changes', items: [
        'Added a settings menu (Ctrl+Shift+S) — removed redundant hotkeys',
        'Added proximity beep (audio radar)',
        'Made temperature text optional via settings',
        'Improved lap estimation for time-based sessions → more accurate fuel estimates',
        'Added discharge and brake regen rate (battery widget)',
        'Added all-time personal best tracking ("pb") — session best renamed to "sb"',
        'Tracking of invalid lap times and sector times',
        'Smaller start lights',
        'Improved EV support',
        'Fixed standings info / pit box overlap',
        'Fixed a potential resizing bug in strikethrough logic',
        'Further performance optimisations',
        'Updated shared memory support (3.5)',
      ]},
    ],
  },
  {
    version: '0.9.6.1', label: '0.9.6.1', pro: true,
    sections: [
      { items: [
        'added radar fade when no opponents in detection range',
      ]},
    ],
  },
  {
    version: '0.9.6', label: '0.9.6', pro: true,
    sections: [
      { items: [
        'added radar proximity highlighting',
        'added FFB bar',
        'removed unnecessary crosshair from radar',
        'changed default widget placements a bit',
      ]},
    ],
  },
  {
    version: '0.9.5', label: '0.9.5', pro: false,
    sections: [
      { items: [
        'RRO now works in replay mode (some widgets need data unavailable in replays — create a dedicated replay layout)',
        'Reset individual widgets: hold X then left-click the widget',
        'Pit window widget shows pit speed limit on pit request',
        'Fixed pit-open message firing repeatedly',
        'Further performance optimisations',
      ]},
    ],
  },
  {
    version: '0.9.3', label: '0.9.3', pro: false,
    sections: [
      { items: [
        'Optimised app launch',
        'Added overall driver count and strength of field to standings tower header',
        'Per-widget opacity: in edit mode, hold O and left-click a widget to change its opacity',
        'Global opacity hotkey (Ctrl+Shift+O) resets individual opacity settings',
        'Standings tower is now resizable',
        'Added desktop shortcut that launches RRO and RaceRoom together',
        'Fixed RPM bar: removed smoothing',
        'Fixed pedal bars: removed smoothing',
        'Fixed brake balance: was showing rear bias, now shows front bias',
      ]},
      { heading: 'Troubleshooting', items: [
        'App won\'t start: try running as administrator, or launch after the game',
        'Widgets misaligned: in edit mode, right-click-drag to resize slightly — they will snap back to the grid',
        'Afterburner / RTSS: start RRO first, then RTSS',
      ]},
    ],
  },
  {
    version: '0.9.2', label: '0.9.2', pro: false,
    sections: [
      { items: [
        'Added Pedal Input Graph widget',
        'Enabled Fuel Calculator (incl. Virtual Energy)',
        'Enabled Lap Time Log',
        'Enabled Penalty mini widget',
        'Enabled Custom Logo widget (see user guide)',
      ]},
      { heading: 'Pro-only features', items: [
        'Standings: multiclass standings, strength of field',
        'Relative: rated rating and reputation of nearby drivers',
        'Speed: average speed',
        'Tyre Info: wheel lock and spin indicators',
        'Custom steering wheel texture (see user guide)',
      ]},
    ],
  },
  {
    version: '0.9.1', label: '0.9.1', pro: false,
    sections: [
      { items: [
        'Fixed triple screen support',
        'Changed edit mode hotkey to Ctrl+Shift+M',
        'Enabled Radar widget (range toggle: Ctrl+Shift+I)',
        'Enabled FPS widget',
        'Enabled Tyre Info widget',
        'Fixed and updated Relative widget — now visible in practice and qualifying',
        'Added laps-down logic to free Standings widget',
        'Added notifications for edit mode toggle actions',
        'Fixed Session Info text clipping',
        'Further performance optimisations',
      ]},
    ],
  },
]

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
      <a href="#widgets">Widgets</a>
      <a href="#usage">Usage</a>
      <a href="#hotkeys">Hotkeys</a>
      <a href="#settings">Settings</a>
      <a href="#changelog">Changelog</a>
      <a href="#abbreviations">Abbreviations</a>
    </div>
    <div class="nav-download">
      <span class="badges-label">Download:</span>
      <a href="https://forum.kw-studios.com/index.php?threads/racing-overlay-0-9-6.20874/" target="_blank" rel="noopener noreferrer" class="badge badge-free">Free</a>
      <a href="https://ko-fi.com/racingoverlay" target="_blank" rel="noopener noreferrer" class="badge badge-pro">Pro</a>
    </div>
  </nav>

  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <h1 style="letter-spacing: 0.001rem;">Raceroom Racing Overlay</h1>
      <p class="tagline">clean, lightweight, highly customisable</p>
      <!-- <div class="badges">
        <span class="badges-label">Download:</span>
        <a href="https://forum.kw-studios.com/index.php?threads/racing-overlay-0-9-6.20874/" target="_blank" rel="noopener noreferrer" class="badge badge-free">Free</a>
        <a href="https://ko-fi.com/racingoverlay" target="_blank" rel="noopener noreferrer" class="badge badge-pro">Pro</a>
      </div> -->
    </section>

    <!-- Features -->
    <section id="features" class="section">
      <h2 class="section-title">Features</h2>
      <p>easy setup: install, run, done</p>
      <p>compatible: supports fullscreen and triple screen</p>
      <p>supreme performance: minimal footprint, runs at your game fps</p>
    </section>

    <!-- Widgets -->
    <section id="widgets" class="section">
      <h2 class="section-title">Widgets</h2>

      <!-- Pill index -->
      <div class="widget-index">
        <button
          v-for="w in widgets"
          :key="w.id"
          class="widget-pill"
          :class="{ active: activeWidgetId === w.id, pro: w.pro }"
          @click="activeWidgetId = w.id"
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

    <!-- Usage -->
    <section id="usage" class="section">
      <h2 class="section-title">Getting Started</h2>
      <p>"RRO+RR_DX9" launches RRO and Raceroom in DX9 mode</p>
      <p>"RRO+RR_DXVK" launches RRO and Raceroom in DXVK mode</p>
      <p>"RRO" starts the RRO launcher, you have to start Raceroom yourself</p>
    </section>

    <!-- Hotkeys -->
    <section id="hotkeys" class="section">
      <h2 class="section-title">Hotkeys</h2>
      <div class="hotkeys-grid">
        <div class="hotkey-row"><kbd>Ctrl+Shift+S</kbd><span>open settings menu (anywhere)</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+M</kbd><span>toggle edit mode (on track only)</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+O</kbd><span>cycle global background opacity</span></div>
        <div class="hotkey-row"><kbd>O + Left-Click</kbd><span>change single widget opacity</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+K / L</kbd><span>switch to previous / next layout</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+Left-Click</kbd><span>disable a widget</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+X</kbd><span>reset all widgets</span></div>
        <div class="hotkey-row"><kbd>X + Left-Click</kbd><span>reset single widget</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+H</kbd><span>backup toggle for edit mode</span></div>
      </div>
      <p style="margin-top:1rem; color: var(--text-muted); font-size:0.88rem;">
        Tip: assign Raceroom keybind <em>"move & resize hud elements"</em> to
        <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">M</kbd>
        and <em>"reset hud elements"</em> to
        <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">X</kbd>
        for quickest access
      </p>
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
          <div :class="['widget-preview-pane', { 'widget-preview-pane--tall': settingsWidget.tallPreview }]">
            <img
              :class="['widget-preview-img', { 'widget-preview-tall-img': settingsWidget.tallPreview }]"
              v-if="settingsWidget.preview"
              :src="baseUrl + settingsWidget.preview.replace(/^\//, '')"
              :alt="settingsWidget.name + ' preview'"
              class="widget-preview-img"
            />
            <div v-else class="widget-preview-empty">No preview available</div>
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
            <li v-for="(item, j) in section.items" :key="j">{{ item }}</li>
          </ul>
        </template>
      </div>
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
