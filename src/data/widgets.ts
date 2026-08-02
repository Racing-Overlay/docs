export interface Widget {
  id: string
  name: string
  pro?: boolean
  preview?: string   // image fallback (.png / .jpg)
  video?: string     // animated preview (.webm)
  bullets?: string[]
  tallPreview?: boolean
}

export const widgets: Widget[] = [
  { id: 'analysis-group', name: 'Analysis Cluster', video: '/images/widgets/analysis_group.mp4', preview: '/images/widgets/analysis_group.png', bullets: [
    'multi-page cluster for several widgets',
    'select widgets to group in settings menu',
    'toggle with hotkey Ctrl+Shift+G',
    'option to toggle automatically',
  ]},
  { id: 'abs-tc', name: 'ABS / TC Activity', video: '/images/widgets/abs_tc.mp4', preview: '/images/widgets/abs_tc.png', bullets: [
    'dark grey font when assist is disabled',
    'selected level shown as a number',
    'activity highlighted in <strong>yellow</strong>',
  ]},
  { id: 'battery', name: 'Battery', video: '/images/widgets/battery.mp4', preview: '/images/widgets/battery.png', bullets: [
    'current battery state of charge',
    '<strong>blue</strong> = discharging<br><strong>green</strong> = recharging<br><strong>yellow</strong> = low',
    'shows discharge / regen rate when changed',
  ]},
  { id: 'best-lap', name: 'Best Lap Times', preview: '/images/widgets/best_lap.png', bullets: [
    '<strong>sb:</strong> your session best lap time',
    '<strong>pb:</strong> your all-time personal best',
  ]},
  { id: 'brakes', name: 'Brakes', video: '/images/widgets/brakes.mp4', preview: '/images/widgets/brakes.png', bullets: [
    '<strong>temperatures:</strong><br>temperature colours (blue → dark red)',
    '<strong>BB:</strong> current brake balance setting',
    '<strong>TC:</strong> current traction control setting',
    'text optional, units: °C or °F',
  ]},
  { id: 'cheat-sheet', name: 'Cheat Sheet', tallPreview: true, video: '/images/widgets/cheat_sheet.webm', preview: '/images/widgets/current_lap.png', bullets: [
    'put cheatsheet.txt in <code>Documents/My Games/RRO</code>',
    'page toggle hotkey: Ctrl+Shift+W',
    '<span class="tag-pro">Pro</span> multi-page support',
    "tip:<br>if context doesn't fit, toggle page to refresh",
  ]},
  { id: 'current-lap', name: 'Current Lap Time', preview: '/images/widgets/current_lap.png', bullets: [
    '<strong>this:</strong> current lap time',
    '<strong>last:</strong> previous lap time',
    'time struck through in red if the lap was invalid',
  ]},
  { id: 'custom-logo', name: 'Custom Logo', preview: '/images/widgets/custom_logo.png', pro: true, bullets: [
    'load your own logo:<br>place <code>logo_1.png</code> in <code>Documents/My Games/RRO/Logos/</code>',
    'png format, square aspect ratio recommended',
  ]},
  { id: 'damage', name: 'Damage', preview: '/images/widgets/damage.png', bullets: [
    'damage per component group:<br>aerodynamics<br>springs (suspension)<br> engine<br>gears (transmission)',
  ]},
  { id: 'delta-bar', name: 'Delta Bar', video: '/images/widgets/delta_bar.mp4', preview: '/images/widgets/delta_bar.png', bullets: [
    'delta to session best lap time',
    '<span class="tag-pro">Pro</span> delta reference option<br>- session best or personal best',
  ]},
  { id: 'drs', name: 'DRS', video: '/images/widgets/drs.webm', preview: '/images/widgets/drs.png', bullets: [
    'disabled when DRS is not available',
    'activations left shown in brackets',
  ]},
  { id: 'engine', name: 'Engine', video: '/images/widgets/engine.mp4', preview: '/images/widgets/engine.png', bullets: [
    '<strong>temperatures:</strong><br>engine and oil temperatures (blue → dark red)',
    '<strong>engine settings:</strong><br>engine map (em) and engine braking (eb)',
    '<strong>current:</strong> current power output in horsepower',
    '<span class="tag-pro">Pro</span> <strong>peak:</strong> peak session power output',
  ]},
  { id: 'ffb', name: 'FFB Bar', pro: true, video: '/images/widgets/ffb.webm', preview: '/images/widgets/ffb.png', bullets: [
    'FFB magnitude and maximum',
    'tracks cuts above the upper threshold',
  ]},
  { id: 'flags', name: 'Flags', video: '/images/widgets/flags.mp4', preview: '/images/widgets/flags.png', bullets: [
    'digiflag display of currently shown flag',
  ]},
  { id: 'flat-map', name: 'Flat Map', preview: '/images/widgets/flat_map.png', bullets: [
    'represents the track length',
    'all drivers\' positions relatively',
    'Colour-coded per class',
    'number = position in class',
    '<span class="tag-pro">Pro</span> multiclass support',
  ]},
  { id: 'fps', name: 'FPS', video: '/images/widgets/fps.mp4', preview: '/images/widgets/fps.png', bullets: [
    'current frames per second',
    'updated per second',
  ]},
  { id: 'fuel-calc', name: 'Fuel Calculator', preview: '/images/widgets/fuel_calc.png', bullets: [
    '<strong>laps left:</strong> laps left at current avg',
    '<strong>time left:</strong> time left at current avg<br>(HY: VE laps left)',
    '<strong>o/a avg:</strong> overall average consumption',
    '<strong>last lap:</strong> last lap fuel usage',
    '<span class="tag-pro">Pro</span> <strong>stint avg:</strong><br> average consumption since last stop',
    '<span class="tag-pro">Pro</span> <strong>target avg:</strong><br> average to reach for lap offset (settings menu)',
    '<span class="tag-pro">Pro</span> <strong>left at finish:</strong> projected fuel left at race end',
    '<span class="tag-pro">Pro</span> <strong>to add:</strong> fuel needed to finish',
  ]},
  { id: 'fuel-gauge', name: 'Fuel Gauge', preview: '/images/widgets/fuel_gauge.png', bullets: [
    'fuel remaining and total tank capacity',
    'units: litres or US gallons',
  ]},
  { id: 'gear', name: 'Gear', video: '/images/widgets/gear.mp4', preview: '/images/widgets/gear.png', bullets: [
    'currently selected gear',
    'colour code for critical rpm',
  ]},
  { id: 'headlights', name: 'Headlights', video: '/images/widgets/headlights.mp4', preview: '/images/widgets/headlights.png', bullets: [
    'hidden on cars without headlights',
    '<strong>grey</strong> = off<br><strong>white</strong> = on<br><strong>yellow</strong> = flashing',
  ]},
  { id: 'ignition', name: 'Ignition & Starter', video: '/images/widgets/ignition.mp4', preview: '/images/widgets/ignition.png', bullets: [
    '<strong>grey</strong> = off<br><strong>red</strong> = starter on<br><strong>flashing red</strong> = starting<br><strong>white</strong> = running',
  ]},
  { id: 'incident', name: 'Incident Points', preview: '/images/widgets/incident.png', bullets: [
    'only visible in multiplayer sessions',
    'incident points accrued and the session limit',
    '<span class="tag-pro">Pro</span> number of cuts',
  ]},
  { id: 'lap-log', name: 'Lap Time Log', preview: '/images/widgets/lap_log.png', bullets: [
    'last seven lap times with delta to previous lap',
    'personal best and session best laps highlighted',
    'invalid laps struck red',
    '<span class="tag-pro">Pro</span> average of all laps',
    '<span class="tag-pro">Pro</span> optimal lap time (best sectors)',
    '<span class="tag-pro">Pro</span> toggle delta reference in settings menu:<br>session best or personal best',
  ]},
  { id: 'pedals', name: 'Pedals', video: '/images/widgets/pedals.mp4', preview: '/images/widgets/pedals.png', bullets: [
    'left to right: clutch, brake, throttle',
    '<strong>white bar/top number:</strong> input received by the car',
    '<strong>grey bar/bottom number:</strong> input from controller',
    '<span class="tag-pro">Pro</span> coloured bars option, matching input graph',
  ]},
  { id: 'pedal-graph', name: 'Pedal Graph', video: '/images/widgets/input_graph.webm', preview: '/images/widgets/input_graph.png', bullets: [
    '<strong>white:</strong> clutch<br><strong>green:</strong> throttle<br><strong>red:</strong> brake',
    '<span class="tag-pro">Pro</span> toggle tracking interval (5, 10 or 20 seconds)',
  ]},
  { id: 'penalties', name: 'Penalties', pro: true, video: '/images/widgets/penalties.webm', preview: '/images/widgets/penalties.png', bullets: [
    'hidden when no penalties are pending',
    '<strong>yellow:</strong> slowdown (seconds to give back)',
    '<strong>red:</strong> drive through / stop&amp;go (laps to serve)',
  ]},
  { id: 'pit-info', name: 'Pit Stop Info', video: '/images/widgets/pit_info.mp4', preview: '/images/widgets/pit_info.png', bullets: [
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
  { id: 'race-control', name: 'Race Control', preview: '/images/widgets/race_control.png', bullets: [
    'lap validity',
    'flag messages',
    'pit info',
    'penalty messages',
  ]},
  { id: 'radar', name: 'Radar', video: '/images/widgets/radar.webm', preview: '/images/widgets/radar.png', bullets: [
    'top-down view of surrounding cars and their relative orientation',
    '<span class="tag-pro">Pro</span> variable detection range<br>(see settings menu)',
    '<span class="tag-pro">Pro</span> class colours for opponent cars',
  ]},
  { id: 'relative', name: 'Relative', video: '/images/widgets/relative.mp4', preview: '/images/widgets/relative.png', bullets: [
    'gaps to the six drivers closest to you',
    'columns: overall position, name, pending penalty, rat/rep, delta',
    'lapped status: blue = ahead, red = behind',
    'in mp: rating and reputation',
    '<span class="tag-pro">Pro</span> driver class colour',
  ]},
  { id: 'rpm', name: 'RPM', video: '/images/widgets/rpm.mp4', preview: '/images/widgets/rpm.png', bullets: [
    'rpm bar with colour code for critical revolutions',
  ]},
  { id: 'schedule', name: 'Ranked Schedule', pro: true, video: '/images/widgets/schedule.mp4', preview: '/images/widgets/schedule.png', bullets: [
    'next 4 ranked mp sprint races<br>- green = f2p combo',
    'next ranked mp feature race',
    'next ranked mp weekly race',
    '<strong>grey pen</strong> = fixed setup<br><strong>white pen</strong> = open setup',
  ]},
  { id: 'sectors', name: 'Sector Times', video: '/images/widgets/sectors.webm', preview: '/images/widgets/sectors.png', bullets: [
    'own current times for track sectors',
    '<strong>white</strong> = normal<br><strong>green</strong> = own best<br><strong>pink</strong> = session best',
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
  { id: 'standings', name: 'Standings', tallPreview: true, preview: '/images/widgets/standings.png', bullets: [
    'columns:<br>position, position change, logo, number, driver name, time, tyre compound, pit info',
    'practice/qualifying: session best lap time',
    'race: gap to leader, last lap, pit stop status',
    'per-driver penalty info<br>slowdowns as seconds to give back',
    'yellow marked driver: session best time',
    'pit info:<br>cycles through number of stops, stint length since last stop, last stop duration<br>cycle interval editable',
    'class standings with class colours',
    'in mp: SoF per class',
    'HY: VE per driver',
  ]},
  { id: 'start-lights', name: 'Start Lights', video: '/images/widgets/start_lights.webm',
    preview: '/images/widgets/start_lights.png', bullets: ['reasonably sized']
  },
  { id: 'steering', name: 'Steering Wheel', video: '/images/widgets/steering.webm', preview: '/images/widgets/steering.png', bullets: [
    'visualisation of steering inputs',
    '<span class="tag-pro">Pro</span> load your own texture:<br>place <code>st_wheel.png</code> in <code>Documents/My Games/RRO/Wheels/</code> (square PNG with transparency)',
  ]},
  { id: 'suspension', name: 'Suspension', pro: true, video: '/images/widgets/suspension.webm', preview: '/images/widgets/suspension.png', bullets: [
    '4 bars for ride height at each wheel',
    'centre bar for rake',
  ]},
  { id: 'track-map', name: 'Track Map', preview: '/images/widgets/track_map.png', bullets: [
    'per-driver position info on an accurate track layout map',
    '<span class="tag-pro">Pro</span> multiclass support',
  ]},
  { id: 'tyre-analysis', name: 'Tyre Analysis', pro: true, preview: '/images/widgets/tyre_analysis.png', bullets: [
    'per tyre:<br>- compound (stint length)<br>- wear rate / laps left' +
      '<br>- average temperature / peak temperature' +
      '<br>- average pressure / delta to initial',
  ]},
  { id: 'tyre-info', name: 'Tyre Info', video: '/images/widgets/tyre_info.webm', preview: '/images/widgets/tyre_info.png', bullets: [
    'per tyre:<br>pressure (kPa / psi), condition (%),<br>segment temperature (°C / °F)',
    'temperature text optional',
    'dirt pick up',
  ]},
  { id: 'tyre-state', name: 'Tyre State', video: '/images/widgets/tyre_state.webm', preview: '/images/widgets/tyre_state.png', bullets: [
    'tyre compound and stint length per wheel',
    'flat spot indicator:<br>while tyre has flat spot, text turns red',
    '<span class="tag-pro">Pro</span> purple indicator for wheel spin',
    '<span class="tag-pro">Pro</span> orange indicator for wheel lock',
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
  { id: 'settings-menu', name: 'Settings Menu', tallPreview: true, video: '/images/widgets/settings_menu.webm', preview: '/images/widgets/settings_menu.png', bullets: [
    '<strong>Globals</strong><br>- reset all widget positions<br>- change the opacity of all widgets' +
      '<br>- layout controls',
    '<strong>Proximity Beep</strong><br>- turn the audible radar beep on/off<br>- set the pitch of the radar beep',
    '<strong>Widgets</strong><br>- show temperatures as numbers on/off<br>- switch between metric and imperial US units' +
      '<br>- select font family<br>- session or personal best for delta reference',
    '<strong>"Warn when a faster car is closing in"</strong><br>- warning when fast car approaches',
    '<strong>Widget Grouping</strong><br>- enable to group the selected widgets<br>- autoflip flips pages every few seconds',
    '<span class="tag-pro">Pro</span> <strong>Pro Group</strong><br>- turn colour-coded pedal bars on/off' +
      '<br>- input graph interval in seconds<br>- radar detection range in metres' +
      '<br>- interval for automatic cycles<br>- Group tower by class or overall standings',
    '<strong>Misc</strong><br>- include idealised condition laps in PB' +
      '<br>- enable debug logging',
    '<strong>Racing/Telemetry/Utility Tabs</strong><br>- turn individual widgets on/off<br>- adjust the opacity per widget',
  ]},
]
