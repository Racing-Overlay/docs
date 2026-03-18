<script setup lang="ts">
import { ref, computed } from 'vue'

const activeWidgetId = ref('standings')

interface Widget {
  id: string
  name: string
  pro?: boolean
  preview?: string   // image fallback (.png / .jpg)
  video?: string     // animated preview (.webm)
  bullets?: string[]
}

const baseUrl = import.meta.env.BASE_URL

const widgets: Widget[] = [
  { id: 'abs-tc', name: 'ABS / TC Activity', preview: '/images/widgets/abs_tc.png', bullets: [
    'Dark grey font when assist is disabled',
    'Selected level shown as a number',
    'Activity highlighted in <strong>yellow</strong>',
  ]},
  { id: 'battery', name: 'Battery', preview: '/images/widgets/battery.png', bullets: [
    'Current battery state of charge',
    '<strong>Blue</strong> = discharging, <strong>green</strong> = recharging, <strong>yellow</strong> = low',
    'Shows discharge / regen rate when it changes',
  ]},
  { id: 'brake-temps', name: 'Brake Temperatures', preview: '/images/widgets/brake_temps.png', bullets: [
    'Brake temperature numeric and colour-coded (blue → dark red)',
    'Units: °C or °F',
    'Layout: left front — left rear — right rear — right front',
  ]},
  { id: 'car-settings', name: 'Car Settings', preview: '/images/widgets/car_settings.png', bullets: [
    'Brake Balance',
    'Traction Control percentage',
    'Engine Map',
    'Engine Brake',
  ]},
  { id: 'car-temps', name: 'Car Temperatures', preview: '/images/widgets/car_temps.png', bullets: [
    'Engine (e) and oil (o) temperature, numeric and colour-coded',
    'Units: °C or °F',
  ]},
  { id: 'current-lap', name: 'Current Lap Time', preview: '/images/widgets/current_lap.png', bullets: [
    '<strong>this:</strong> current lap time',
    '<strong>last:</strong> previous lap time',
    'Time struck through in red if the lap was invalid',
  ]},
  { id: 'custom-logo', name: 'Custom Logo', pro: true, bullets: [
    'Load your own logo: place <code>logo_1.png</code> in <code>Documents/My Games/RRO/Logos/</code>',
    'PNG format, square aspect ratio recommended',
  ]},
  { id: 'damage', name: 'Damage', preview: '/images/widgets/damage.png', bullets: [
    'White bar per component group: Aero, Springs, Engine, Gears',
  ]},
  { id: 'delta-bar', name: 'Delta Bar', preview: '/images/widgets/delta_bar.png', bullets: [
    'Delta to session best lap, numeric and as a colour-coded bar',
  ]},
  { id: 'drs', name: 'DRS', preview: '/images/widgets/drs.png', bullets: [
    'Disabled when DRS is not available',
    'Number of activations remaining shown in brackets',
    'Activity indicated via colour code',
  ]},
  { id: 'flags', name: 'Flags', preview: '/images/widgets/flags.png', bullets: [
    'DigiFlag-style display of the currently shown flag',
  ]},
  { id: 'flat-map', name: 'Flat Map', pro: true, preview: '/images/widgets/flat_map.png', bullets: [
    'Represents the full track length with all drivers\' positions shown relatively',
    'Colour-coded per class; number = position in class',
  ]},
  { id: 'fps', name: 'FPS', preview: '/images/widgets/fps.png', bullets: [
    'Current frames per second, updated every second',
  ]},
  { id: 'fuel-calc', name: 'Fuel Calculator', pro: true, preview: '/images/widgets/fuel_calc.png', bullets: [
    '<strong>Laps left:</strong> remaining fuel at current average consumption',
    '<strong>Time left:</strong> remaining time at current avg (Hypercars: VE laps left)',
    '<strong>Avg/lap:</strong> average consumption over last 20 laps',
    '<strong>Last lap:</strong> fuel used last lap',
    '<strong>Left at finish:</strong> projected fuel remaining at race end',
    '<strong>To add:</strong> fuel needed to finish, including ~1 lap safety margin',
  ]},
  { id: 'fuel-gauge', name: 'Fuel Gauge', preview: '/images/widgets/fuel_gauge.png', bullets: [
    'Fuel remaining and total tank capacity',
    'Units: Litres or Gallons',
  ]},
  { id: 'gear', name: 'Gear', preview: '/images/widgets/gear.png', bullets: [
    'Currently selected gear',
    'Colour code for critical RPM',
  ]},
  { id: 'headlights', name: 'Headlights', preview: '/images/widgets/headlights.png', bullets: [
    'Hidden on cars without headlights',
    '<strong>Grey</strong> = off, <strong>white</strong> = on, <strong>yellow</strong> = flashing',
  ]},
  { id: 'ignition', name: 'Ignition & Starter', preview: '/images/widgets/ignition.png', bullets: [
    '<strong>Grey</strong> = off, <strong>red</strong> = starter on, <strong>flashing red</strong> = starting, <strong>white</strong> = running',
  ]},
  { id: 'incident', name: 'Incident Points', preview: '/images/widgets/incident.png', bullets: [
    'Only visible in multiplayer sessions',
    'Incident points accrued and the session limit',
  ]},
  { id: 'input-graph', name: 'Input Graph', pro: true, preview: '/images/widgets/input_graph.png', bullets: [
    'Throttle, brake and clutch inputs over time',
    'Toggle interval: 5, 10 or 20 seconds',
  ]},
  { id: 'lap-log', name: 'Lap Time Log', pro: true, preview: '/images/widgets/lap_log.png', bullets: [
    'Last seven lap times with delta to previous lap',
    'Personal best and session best laps highlighted',
    'Invalid laps struck through',
  ]},
  { id: 'last-lap', name: 'Last Lap Time', preview: '/images/widgets/last_lap.png', bullets: [
    '<strong>sb:</strong> your session best lap time',
    '<strong>pb:</strong> your all-time personal best',
  ]},
  { id: 'pedals', name: 'Pedals', preview: '/images/widgets/pedals.png', bullets: [
    'Left to right: clutch, brake, throttle',
    '<strong>White bar:</strong> input from controller device',
    '<strong>Grey bar:</strong> input received by the car',
  ]},
  { id: 'penalties', name: 'Penalties', pro: true, preview: '/images/widgets/penalties.png', bullets: [
    'Hidden when no penalties are pending',
    '<strong>Red:</strong> Drive Through / Stop &amp; Go — number of laps to serve',
    '<strong>Yellow:</strong> Slowdown — seconds to give back',
  ]},
  { id: 'pit-info', name: 'Pit Stop Info', preview: '/images/widgets/pit_info.png', bullets: [
    'Enabled in the pit lane only (disabled by default)',
    'Current and total pit stop time',
    'Minimum stoppage time (if set)',
    'Current action and scheduled task status',
  ]},
  { id: 'pit-window', name: 'Pit Window', preview: '/images/widgets/pit_window.png', bullets: [
    'Shown when mandatory stop exists, pit limiter is on, or stop is requested',
    '<strong>Yellow</strong> = 1 min until window opens; <strong>green</strong> = window open',
    'Number in brackets = laps/minutes the window stays open',
    'Blinks when pit limiter is active; shows pit speed limit',
    'Disappears once the mandatory stop has been served',
  ]},
  { id: 'proximity', name: 'Proximity Warners', preview: '/images/widgets/proximity.png', bullets: [
    'Grey bars at the left, right and bottom screen edges',
    'Colour intensity increases the closer a car is on that side',
  ]},
  { id: 'ptp', name: 'Push to Pass', preview: '/images/widgets/ptp.png', bullets: [
    'Hidden when PTP is not available',
    'Activations remaining in brackets',
    'Activity colour-coded; countdown shown while active',
    'Also acts as the Overtake button indicator in the FR-X22',
  ]},
  { id: 'race-control', name: 'Race Control', preview: '/images/widgets/race_control.png', bullets: [
    'Penalty messages',
    'Flag messages',
    'Lap validity status',
  ]},
  { id: 'radar', name: 'Radar', preview: '/images/widgets/radar.png', bullets: [
    'Top-down view of surrounding cars and their relative orientation',
  ]},
  { id: 'relative', name: 'Relative', preview: '/images/widgets/relative.png', bullets: [
    'Gaps to P1 and the seven drivers closest to you',
    '(Pro) Ranked multiplayer rating and reputation',
    '(Pro) Class colour per driver',
  ]},
  { id: 'rpm', name: 'RPM', preview: '/images/widgets/rpm.png', bullets: [
    'RPM bar with colour code for critical revolutions',
  ]},
  { id: 'sectors', name: 'Sector Times', preview: '/images/widgets/sectors.png', bullets: [
    'Own current times for Sectors 1, 2 and 3',
    '<strong>White</strong> = normal, <strong>green</strong> = own best, <strong>pink</strong> = session best, <strong>dark</strong> = invalid',
  ]},
  { id: 'session-info', name: 'Session Info', preview: '/images/widgets/session_info.png', bullets: [
    'Time of day, session type, time remaining',
    'Current lap and projected total laps',
    'Overall position (Pro: position in class)',
    'Session best lap time',
  ]},
  { id: 'speed', name: 'Speed', preview: '/images/widgets/speed.png', bullets: [
    'Current speed in km/h or mph',
    '(Pro) Average speed',
  ]},
  { id: 'standings', name: 'Standings', preview: '/images/widgets/standings.png', bullets: [
    'Position, car number, manufacturer logo, driver name, tyre compound',
    'Practice/Qualifying: session best lap time per driver',
    'Race: gap to leader, last lap, pit stop status',
    '(Pro) Class standings with class colour and SoF',
    '(Pro) Virtual Energy per driver',
  ]},
  { id: 'start-lights', name: 'Start Lights', video: '/images/widgets/start_lights.webm', preview: '/images/widgets/start_lights.png', bullets: []},
  { id: 'steering', name: 'Steering Wheel', preview: '/images/widgets/steering.png', bullets: [
    'Visualisation of steering inputs',
    '(Pro) Load your own texture: place <code>st_wheel.png</code> in <code>Documents/My Games/RRO/Wheels/</code> (square PNG with transparency)',
  ]},
  { id: 'tyre-info', name: 'Tyre Info', preview: '/images/widgets/tyre_info.png', bullets: [
    'Per tyre: pressure (kPa / psi), condition %, temperature numeric and colour-coded',
    'Dirt overlay on temperature colour when tyre picks up dirt',
  ]},
  { id: 'virtual-energy', name: 'Virtual Energy', preview: '/images/widgets/virtual_energy.png', bullets: [
    'VE tank content as colour-coded bars and percentage',
    'After 2 laps: projection appears — <strong>F+</strong> add fuel, <strong>F-</strong> remove fuel, <strong>✓</strong> on target',
    'Do 2–3 consistent laps in practice to calibrate; treat as an approximation',
  ]},
  { id: 'water-spray', name: 'Water Spray', preview: '/images/widgets/water_spray.png', bullets: [
    'Only visible in the RaceRoom Truck class',
    'Brake cooling water remaining (Litres or Gallons)',
  ]},
  { id: 'wheel-info', name: 'Wheel Info', preview: '/images/widgets/wheel_info.png', bullets: [
    'Tyre compound per wheel and laps in use per wheel',
    '(Pro) Yellow indicator for wheel spin',
    '(Pro) Blue indicator for wheel lock',
  ]},
  { id: 'settings-menu', name: 'Settings Menu', preview: '/images/widgets/settings_menu.png', bullets: [
    'Enable proximity beep:<br>Turn the audible radar beep on/off',
    'Beep frequency:<br>Set the pitch of the radar beep',
    'Show tyre temperature text:<br>Turn temps being shown as numbers on/off',
    'Units:<br>Switch between metric and imperial US units',
    'Radar range:<br>How far away the radar detects opponents',
    'Pedal graph interval:<br>How many seconds the input graph will project',
    'Enable debug logging:<br>What it says, usually not required',
  ]},
]

const activeWidget = computed(() => widgets.find(w => w.id === activeWidgetId.value)!)
const settingsWidget = computed(() => widgets.find(w => w.id === 'settings-menu')!)
</script>

<template>
  <nav>
    <span class="nav-brand">RRO</span>
    <div class="nav-links">
      <a href="#widgets">Widgets</a>
      <a href="#usage">Usage</a>
      <a href="#hotkeys">Hotkeys</a>
      <a href="#settings">Settings</a>
      <a href="#abbreviations">Abbreviations</a>
      <a href="https://forum.kw-studios.com/index.php?threads/racing-overlay-0-9-6.20874/" target="_blank" rel="noopener noreferrer">Forum</a>
      <a href="https://ko-fi.com/racingoverlay" target="_blank" rel="noopener noreferrer" class="nav-pro">Get Pro</a>
    </div>
  </nav>

  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <h1>Raceroom Racing Overlay</h1>
      <p class="tagline">clean, lightweight, highly customisable</p>
      <div class="badges">
        <span class="badge badge-free">Free</span>
        <span class="badge badge-pro">Pro</span>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="section">
      <h2 class="section-title">Features</h2>
      <p>Supreme performance, runs at your game fps</p>
      <p>Supports fullscreen and triple screen</p>
      <p>No webhud, no fiddling, just install and run</p>
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
            <span v-if="activeWidget.pro" class="tag-pro">PRO</span>
          </div>
          <ul v-if="activeWidget.bullets && activeWidget.bullets.length">
            <li v-for="(b, i) in activeWidget.bullets" :key="i" v-html="b" />
          </ul>
          <p v-else style="color: var(--text-muted); font-size: 0.88rem;">No additional information.</p>
        </div>
        <div class="widget-preview-pane">
          <video
            v-if="activeWidget.video"
            :src="baseUrl + activeWidget.video.replace(/^\//, '')"
            class="widget-preview-img"
            autoplay loop muted playsinline
          />
          <img
            v-else-if="activeWidget.preview"
            :src="baseUrl + activeWidget.preview.replace(/^\//, '')"
            :alt="activeWidget.name + ' preview'"
            class="widget-preview-img"
          />
          <div v-else class="widget-preview-empty">No preview available</div>
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
        <div class="hotkey-row"><kbd>Ctrl+Shift+S</kbd><span>Open settings menu</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+M</kbd><span>Toggle edit mode (on track only)</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+O</kbd><span>Cycle global background opacity</span></div>
        <div class="hotkey-row"><kbd>O + Left-Click</kbd><span>Change single widget opacity</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+K / L</kbd><span>Switch to previous / next layout</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+Left-Click</kbd><span>Disable a widget</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+X</kbd><span>Reset all widgets</span></div>
        <div class="hotkey-row"><kbd>X + Left-Click</kbd><span>Reset single widget</span></div>
        <div class="hotkey-row"><kbd>Ctrl+Shift+H</kbd><span>Backup toggle for edit mode</span></div>
      </div>
      <p style="margin-top:1rem; color: var(--text-muted); font-size:0.88rem;">
        Tip: Assign RaceRoom keybind <em>"HUD edit mode"</em> to
        <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">M</kbd>
        and <em>"HUD reset"</em> to
        <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">X</kbd>
        for quickest access.
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
          anywhere to open the settings menu, also in the main menu.
        </p>

        <!-- Single active card -->
        <div class="widget-display">
          <div class="widget-card">
            <div class="widget-header">
              <h3>{{ settingsWidget.name }}</h3>
              <span v-if="settingsWidget.pro" class="tag-pro">PRO</span>
            </div>
            <ul v-if="settingsWidget.bullets && settingsWidget.bullets.length">
              <li v-for="(b, i) in settingsWidget.bullets" :key="i" v-html="b" />
            </ul>
            <p v-else style="color: var(--text-muted); font-size: 0.88rem;">No additional information.</p>
          </div>
          <div class="widget-preview-pane">
            <img
              v-if="settingsWidget.preview"
              :src="baseUrl + settingsWidget.preview.replace(/^\//, '')"
              :alt="settingsWidget.name + ' preview'"
              class="widget-preview-img"
            />
            <div v-else class="widget-preview-empty">No preview available</div>
          </div>
        </div>
    </section>

    <!-- Abbreviations -->
    <section id="abbreviations" class="section">
      <h2 class="section-title">Abbreviations</h2>
      <table class="abbrev-table">
        <tbody>
          <tr><td>°C</td><td>Degree Celsius</td></tr>
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
    <p>© 2025 HdB — Raceroom Racing Overlay</p>
  </footer>
</template>
