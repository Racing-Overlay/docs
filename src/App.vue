<script setup>
// No logic needed — purely static content
</script>

<template>
  <nav>
    <span class="nav-brand">RRO</span>
    <div class="nav-links">
      <a href="#usage">Usage</a>
      <a href="#hotkeys">Hotkeys</a>
      <a href="#widgets">Widgets</a>
      <a href="#abbreviations">Abbreviations</a>
      <a href="https://ko-fi.com/racingoverlay" style="color: var(--pro); font-weight:600;">Get Pro</a>
    </div>
  </nav>

  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <h1>Raceroom Racing Overlay</h1>
      <p class="tagline">clean, stylish, highly customisable</p>
      <div class="badges">
        <span class="badge badge-free">Free</span>
        <span class="badge badge-pro">Pro</span>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="section">
      <h2 class="section-title">Features</h2>
      <p>Supreme performance</p>
      <p>Supports fullscreen</p>
      <p>No webhud, no extra window</p>
      <p>Native triple screen support</p>
    </section>

    <!-- Usage -->
    <section id="usage" class="section">
      <h2 class="section-title">Getting Started</h2>
      <p>Start by using one of the desktop shortcuts:</p>
      <p>"RRO+RR_DX9" launches RRO and Raceroom (DX9)</p>
      <p>"RRO+RR_DXVK" launches RRO and Raceroom (DXVK)</p>
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
        Tip: Assign RaceRoom keybind <em>"HUD edit mode"</em> to <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">M</kbd> and <em>"HUD reset"</em> to <kbd style="font-family:monospace;background:var(--bg-raised);border:1px solid var(--border);border-radius:4px;padding:0.1rem 0.4rem;">X</kbd> for quickest access.
      </p>
    </section>

    <!-- Widget index -->
    <section id="widgets" class="section">
      <h2 class="section-title">Widgets</h2>
      <div class="widget-index">
        <a href="#abs-tc">ABS/TC Activity</a>
        <a href="#battery">Battery</a>
        <a href="#brake-temps">Brake Temperatures</a>
        <a href="#car-settings">Car Settings</a>
        <a href="#car-temps">Car Temperatures</a>
        <a href="#current-lap">Current Lap Time</a>
        <a href="#custom-logo">Custom Logo</a>
        <a href="#damage">Damage</a>
        <a href="#delta-bar">Delta Bar</a>
        <a href="#drs">DRS</a>
        <a href="#flags">Flags</a>
        <a href="#flat-map">Flat Map</a>
        <a href="#fps">FPS</a>
        <a href="#fuel-calc">Fuel Calculator</a>
        <a href="#fuel-gauge">Fuel Gauge</a>
        <a href="#gear">Gear</a>
        <a href="#headlights">Headlights</a>
        <a href="#ignition">Ignition &amp; Starter</a>
        <a href="#incident">Incident Points</a>
        <a href="#input-graph">Input Graph</a>
        <a href="#lap-log">Lap Time Log</a>
        <a href="#last-lap">Last Lap Time</a>
        <a href="#pedals">Pedals</a>
        <a href="#penalties">Penalties</a>
        <a href="#pit-info">Pit Stop Info</a>
        <a href="#pit-window">Pit Window</a>
        <a href="#proximity">Proximity Warners</a>
        <a href="#ptp">Push to Pass</a>
        <a href="#race-control">Race Control</a>
        <a href="#radar">Radar</a>
        <a href="#relative">Relative</a>
        <a href="#rpm">RPM</a>
        <a href="#sectors">Sector Times</a>
        <a href="#session-info">Session Info</a>
        <a href="#speed">Speed</a>
        <a href="#standings">Standings</a>
        <a href="#start-lights">Start Lights</a>
        <a href="#steering">Steering Wheel</a>
        <a href="#tyre-info">Tyre Info</a>
        <a href="#virtual-energy">Virtual Energy</a>
        <a href="#water-spray">Water Spray</a>
        <a href="#wheel-info">Wheel Info</a>
      </div>

      <!-- Widget cards -->
      <div id="abs-tc" class="widget-card">
        <div class="widget-header"><h3>ABS / TC Activity</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/abs_tc.png" alt="ABS/TC widget preview" />
          <ul>
            <li>Dark grey font when assist is disabled</li>
            <li>Selected level shown as a number</li>
            <li>Activity highlighted in <strong>yellow</strong></li>
          </ul>
        </div>
      </div>

      <div id="battery" class="widget-card">
        <div class="widget-header"><h3>Battery</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/battery.png" alt="Battery widget preview" />
          <ul>
            <li>Current battery state of charge</li>
            <li><strong>Blue</strong> = discharging, <strong>green</strong> = recharging, <strong>yellow</strong> = low</li>
            <li>Shows discharge / regen rate when it changes</li>
          </ul>
        </div>
      </div>

      <div id="brake-temps" class="widget-card">
        <div class="widget-header"><h3>Brake Temperatures</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/brake_temps.png" alt="Brake Temperatures widget preview" />
          <ul>
            <li>Brake temperature numeric and colour-coded (blue → dark red)</li>
            <li>Units: °C or °F</li>
            <li>Layout: left front — left rear — right rear — right front</li>
          </ul>
        </div>
      </div>

      <div id="car-settings" class="widget-card">
        <div class="widget-header"><h3>Car Settings</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/car_settings.png" alt="Car Settings widget preview" />
          <ul>
            <li>Brake Balance</li>
            <li>Traction Control percentage</li>
            <li>Engine Map</li>
            <li>Engine Brake</li>
          </ul>
        </div>
      </div>

      <div id="car-temps" class="widget-card">
        <div class="widget-header"><h3>Car Temperatures</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/car_temps.png" alt="Car Temperatures widget preview" />
          <ul>
            <li>Engine (e) and oil (o) temperature, numeric and colour-coded</li>
            <li>Units: °C or °F</li>
          </ul>
        </div>
      </div>

      <div id="current-lap" class="widget-card">
        <div class="widget-header"><h3>Current Lap Times</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/current_lap.png" alt="Current Lap Times widget preview" />
          <ul>
            <li><strong>this:</strong> current lap time</li>
            <li><strong>last:</strong> previous lap time</li>
            <li>Time struck through in red if the lap was invalid</li>
          </ul>
        </div>
      </div>

      <div id="custom-logo" class="widget-card">
        <div class="widget-header"><h3>Custom Logo</h3><span class="tag-pro">PRO</span></div>
        <div class="widget-body">
          <ul>
            <li>Load your own logo: place <code>logo_1.png</code> in <code>Documents/My Games/RRO/Logos/</code></li>
            <li>PNG format, square aspect ratio recommended</li>
          </ul>
        </div>
      </div>

      <div id="damage" class="widget-card">
        <div class="widget-header"><h3>Damage</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/damage.png" alt="Damage widget preview" />
          <ul>
            <li>White bar per component group: Aero, Springs, Engine, Gears</li>
          </ul>
        </div>
      </div>

      <div id="delta-bar" class="widget-card">
        <div class="widget-header"><h3>Delta Bar</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/delta_bar.png" alt="Delta Bar widget preview" />
          <ul>
            <li>Delta to session best lap, numeric and as a colour-coded bar</li>
          </ul>
        </div>
      </div>

      <div id="drs" class="widget-card">
        <div class="widget-header"><h3>DRS</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/drs.png" alt="DRS widget preview" />
          <ul>
            <li>Disabled when DRS is not available</li>
            <li>Number of activations remaining shown in brackets</li>
            <li>Activity indicated via colour code</li>
          </ul>
        </div>
      </div>

      <div id="flags" class="widget-card">
        <div class="widget-header"><h3>Flags</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/flags.png" alt="Flags widget preview" />
          <ul>
            <li>DigiFlag-style display of the currently shown flag</li>
          </ul>
        </div>
      </div>

      <div id="flat-map" class="widget-card">
        <div class="widget-header"><h3>Flat Map</h3><span class="tag-pro">PRO</span></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/flat_map.png" alt="Flat Map widget preview" />
          <ul>
            <li>Represents the full track length with all drivers' positions shown relatively</li>
            <li>Colour-coded per class; number = position in class</li>
          </ul>
        </div>
      </div>

      <div id="fps" class="widget-card">
        <div class="widget-header"><h3>FPS</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/fps.png" alt="FPS widget preview" />
          <ul>
            <li>Current frames per second, updated every second</li>
          </ul>
        </div>
      </div>

      <div id="fuel-calc" class="widget-card">
        <div class="widget-header"><h3>Fuel Calculator</h3><span class="tag-pro">PRO</span></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/fuel_calc.png" alt="Fuel Calculator widget preview" />
          <ul>
            <li><strong>Laps left:</strong> remaining fuel at current average consumption</li>
            <li><strong>Time left:</strong> remaining time at current avg (Hypercars: VE laps left)</li>
            <li><strong>Avg/lap:</strong> average consumption over last 20 laps</li>
            <li><strong>Last lap:</strong> fuel used last lap</li>
            <li><strong>Left at finish:</strong> projected fuel remaining at race end</li>
            <li><strong>To add:</strong> fuel needed to finish, including ~1 lap safety margin</li>
          </ul>
        </div>
      </div>

      <div id="fuel-gauge" class="widget-card">
        <div class="widget-header"><h3>Fuel Gauge</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/fuel_gauge.png" alt="Fuel Gauge widget preview" />
          <ul>
            <li>Fuel remaining and total tank capacity</li>
            <li>Units: Litres or Gallons</li>
          </ul>
        </div>
      </div>

      <div id="gear" class="widget-card">
        <div class="widget-header"><h3>Gear</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/gear.png" alt="Gear widget preview" />
          <ul>
            <li>Currently selected gear</li>
            <li>Colour code for critical RPM</li>
          </ul>
        </div>
      </div>

      <div id="headlights" class="widget-card">
        <div class="widget-header"><h3>Headlights</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/headlights.png" alt="Headlights widget preview" />
          <ul>
            <li>Hidden on cars without headlights</li>
            <li><strong>Grey</strong> = off, <strong>white</strong> = on, <strong>yellow</strong> = flashing</li>
          </ul>
        </div>
      </div>

      <div id="ignition" class="widget-card">
        <div class="widget-header"><h3>Ignition &amp; Starter</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/ignition.png" alt="Ignition widget preview" />
          <ul>
            <li><strong>Grey</strong> = off, <strong>red</strong> = starter on, <strong>flashing red</strong> = starting, <strong>white</strong> = running</li>
          </ul>
        </div>
      </div>

      <div id="incident" class="widget-card">
        <div class="widget-header"><h3>Incident Points</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/incident.png" alt="Incident Points widget preview" />
          <ul>
            <li>Only visible in multiplayer sessions</li>
            <li>Incident points accrued and the session limit</li>
          </ul>
        </div>
      </div>

      <div id="input-graph" class="widget-card">
        <div class="widget-header"><h3>Input Graph</h3><span class="tag-pro">PRO</span></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/input_graph.png" alt="Input Graph widget preview" />
          <ul>
            <li>Throttle, brake and clutch inputs over time</li>
            <li>Toggle interval: 5, 10 or 20 seconds</li>
          </ul>
        </div>
      </div>

      <div id="lap-log" class="widget-card">
        <div class="widget-header"><h3>Lap Time Log</h3><span class="tag-pro">PRO</span></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/lap_log.png" alt="Lap Time Log widget preview" />
          <ul>
            <li>Last seven lap times with delta to previous lap</li>
            <li>Personal best and session best laps highlighted</li>
            <li>Invalid laps struck through</li>
          </ul>
        </div>
      </div>

      <div id="last-lap" class="widget-card">
        <div class="widget-header"><h3>Last Lap Time</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/last_lap.png" alt="Last Lap Time widget preview" />
          <ul>
            <li><strong>sb:</strong> your session best lap time</li>
            <li><strong>pb:</strong> your all-time personal best</li>
          </ul>
        </div>
      </div>

      <div id="pedals" class="widget-card">
        <div class="widget-header"><h3>Pedals</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/pedals.png" alt="Pedals widget preview" />
          <ul>
            <li>Left to right: clutch, brake, throttle</li>
            <li><strong>White bar:</strong> input from controller device</li>
            <li><strong>Grey bar:</strong> input received by the car</li>
          </ul>
        </div>
      </div>

      <div id="penalties" class="widget-card">
        <div class="widget-header"><h3>Penalties</h3><span class="tag-pro">PRO</span></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/penalties.png" alt="Penalties widget preview" />
          <ul>
            <li>Hidden when no penalties are pending</li>
            <li><strong>Red:</strong> Drive Through / Stop &amp; Go — number of laps to serve</li>
            <li><strong>Yellow:</strong> Slowdown — seconds to give back</li>
          </ul>
        </div>
      </div>

      <div id="pit-info" class="widget-card">
        <div class="widget-header"><h3>Pit Stop Info</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/pit_info.png" alt="Pit Stop Info widget preview" />
          <ul>
            <li>Enabled in the pit lane only (disabled by default)</li>
            <li>Current and total pit stop time</li>
            <li>Minimum stoppage time (if set)</li>
            <li>Current action and scheduled task status</li>
          </ul>
        </div>
      </div>

      <div id="pit-window" class="widget-card">
        <div class="widget-header"><h3>Pit Window</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/pit_window.png" alt="Pit Window widget preview" />
          <ul>
            <li>Shown when mandatory stop exists, pit limiter is on, or stop is requested</li>
            <li><strong>Yellow</strong> = 1 min until window opens; <strong>green</strong> = window open</li>
            <li>Number in brackets = laps/minutes the window stays open</li>
            <li>Blinks when pit limiter is active; shows pit speed limit</li>
            <li>Disappears once the mandatory stop has been served</li>
          </ul>
        </div>
      </div>

      <div id="proximity" class="widget-card">
        <div class="widget-header"><h3>Proximity Warners</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/proximity.png" alt="Proximity Warners widget preview" />
          <ul>
            <li>Grey bars at the left, right and bottom screen edges</li>
            <li>Colour intensity increases the closer a car is on that side</li>
          </ul>
        </div>
      </div>

      <div id="ptp" class="widget-card">
        <div class="widget-header"><h3>Push to Pass</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/ptp.png" alt="Push to Pass widget preview" />
          <ul>
            <li>Hidden when PTP is not available</li>
            <li>Activations remaining in brackets</li>
            <li>Activity colour-coded; countdown shown while active</li>
            <li>Also acts as the Overtake button indicator in the FR-X22</li>
          </ul>
        </div>
      </div>

      <div id="race-control" class="widget-card">
        <div class="widget-header"><h3>Race Control</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/race_control.png" alt="Race Control widget preview" />
          <ul>
            <li>Penalty messages</li>
            <li>Flag messages</li>
            <li>Lap validity status</li>
          </ul>
        </div>
      </div>

      <div id="radar" class="widget-card">
        <div class="widget-header"><h3>Radar</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/radar.png" alt="Radar widget preview" />
          <ul>
            <li>Top-down view of surrounding cars and their relative orientation</li>
          </ul>
        </div>
      </div>

      <div id="relative" class="widget-card">
        <div class="widget-header"><h3>Relative</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/relative.png" alt="Relative widget preview" />
          <ul>
            <li>Gaps to P1 and the seven drivers closest to you</li>
            <li>(Pro) Ranked multiplayer rating and reputation</li>
            <li>(Pro) Class colour per driver</li>
          </ul>
        </div>
      </div>

      <div id="rpm" class="widget-card">
        <div class="widget-header"><h3>RPM</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/rpm.png" alt="RPM widget preview" />
          <ul>
            <li>RPM bar with colour code for critical revolutions</li>
          </ul>
        </div>
      </div>

      <div id="sectors" class="widget-card">
        <div class="widget-header"><h3>Sector Times</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/sectors.png" alt="Sector Times widget preview" />
          <ul>
            <li>Own current times for Sectors 1, 2 and 3</li>
            <li><strong>White</strong> = normal, <strong>green</strong> = own best, <strong>pink</strong> = session best, <strong>dark</strong> = invalid</li>
          </ul>
        </div>
      </div>

      <div id="session-info" class="widget-card">
        <div class="widget-header"><h3>Session Info</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/session_info.png" alt="Session Info widget preview" />
          <ul>
            <li>Time of day, session type, time remaining</li>
            <li>Current lap and projected total laps</li>
            <li>Overall position (Pro: position in class)</li>
            <li>Session best lap time</li>
          </ul>
        </div>
      </div>

      <div id="speed" class="widget-card">
        <div class="widget-header"><h3>Speed</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/speed.png" alt="Speed widget preview" />
          <ul>
            <li>Current speed in km/h or mph</li>
            <li>(Pro) Average speed</li>
          </ul>
        </div>
      </div>

      <div id="standings" class="widget-card">
        <div class="widget-header"><h3>Standings</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/standings.png" alt="Standings widget preview" />
          <ul>
            <li>Position, car number, manufacturer logo, driver name, tyre compound</li>
            <li>Practice/Qualifying: session best lap time per driver</li>
            <li>Race: gap to leader, last lap, pit stop status</li>
            <li>(Pro) Class standings with class colour and SoF</li>
            <li>(Pro) Virtual Energy per driver</li>
          </ul>
        </div>
      </div>

      <div id="start-lights" class="widget-card">
        <div class="widget-header"><h3>Start Lights</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/start_lights.png" alt="Start Lights widget preview" />
        </div>
      </div>

      <div id="steering" class="widget-card">
        <div class="widget-header"><h3>Steering Wheel</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/steering.png" alt="Steering Wheel widget preview" />
          <ul>
            <li>Visualisation of steering inputs</li>
            <li>(Pro) Load your own texture: place <code>st_wheel.png</code> in <code>Documents/My Games/RRO/Wheels/</code> (square PNG with transparency)</li>
          </ul>
        </div>
      </div>

      <div id="tyre-info" class="widget-card">
        <div class="widget-header"><h3>Tyre Info</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/tyre_info.png" alt="Tyre Info widget preview" />
          <ul>
            <li>Per tyre: pressure (kPa / psi), condition %, temperature numeric and colour-coded</li>
            <li>Dirt overlay on temperature colour when tyre picks up dirt</li>
          </ul>
        </div>
      </div>

      <div id="virtual-energy" class="widget-card">
        <div class="widget-header"><h3>Virtual Energy</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/virtual_energy.png" alt="Virtual Energy widget preview" />
          <ul>
            <li>VE tank content as colour-coded bars and percentage</li>
            <li>After 2 laps: projection appears — <strong>F+</strong> add fuel, <strong>F-</strong> remove fuel, <strong>✓</strong> on target</li>
            <li>Do 2–3 consistent laps in practice to calibrate; treat as an approximation</li>
          </ul>
        </div>
      </div>

      <div id="water-spray" class="widget-card">
        <div class="widget-header"><h3>Water Spray</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/water_spray.png" alt="Water Spray widget preview" />
          <ul>
            <li>Only visible in the RaceRoom Truck class</li>
            <li>Brake cooling water remaining (Litres or Gallons)</li>
          </ul>
        </div>
      </div>

      <div id="wheel-info" class="widget-card">
        <div class="widget-header"><h3>Wheel Info</h3></div>
        <div class="widget-body">
          <img class="widget-preview" src="/images/widgets/wheel_info.png" alt="Wheel Info widget preview" />
          <ul>
            <li>Tyre compound per wheel and laps in use per wheel</li>
            <li>(Pro) Yellow indicator for wheel spin</li>
            <li>(Pro) Blue indicator for wheel lock</li>
          </ul>
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
    <p>© 2025 Harrier — Raceroom Racing Overlay</p>
  </footer>
</template>