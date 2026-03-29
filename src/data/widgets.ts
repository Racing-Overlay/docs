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
    'temperature text optional',
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
    'average of all laps',
    'invalid laps struck red',
  ]},
  { id: 'pedals', name: 'Pedals', video: '/images/widgets/pedals.webm', preview: '/images/widgets/pedals.png', bullets: [
    'left to right: clutch, brake, throttle',
    '<strong>white bar:</strong> input from controller device',
    '<strong>grey bar:</strong> input received by the car',
    'optional: coloured bars, matching input graph',
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
    'per-driver penalty info<br>slowdowns as seconds to give back',
    'yellow marked driver: session best time',
    'pit info:<br><strong>dark grey:</strong> mandatory pit stop, not served<br><strong>blinking:</strong> currently serving pit stop<br><strong>light grey:</strong> pit stop served (number of stops)',
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
  { id: 'suspension', name: 'Suspension', pro: true, video: '/images/widgets/suspension.webm', preview: '/images/widgets/suspension.png', bullets: [
    '4 bars for ride height at each wheel',
    'centre bar for rake',
  ]},
  { id: 'tyre-info', name: 'Tyre Info', video: '/images/widgets/tyre_info.webm', preview: '/images/widgets/tyre_info.png', bullets: [
    'per tyre:<br>pressure (kPa / psi), condition (%),<br>segment temperature (°C / °F)',
    'temperature text optional',
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
    'colour-coded pedal bars:<br>turn bar colouring on/off',
    'units:<br>Switch between metric and imperial US units',
    'radar range:<br>how far away the radar detects opponents',
    '<span class="tag-pro">Pro</span> pedal graph interval:<br>how many seconds the input graph will project',
    '<span class="tag-pro">Pro</span> delta reference:<br>all-time best or session-best as reference for deltas',
    'enable debug logging:<br>what it says, usually not required',
  ]},
]
