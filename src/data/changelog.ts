export interface ChangelogEntry {
  version: string
  label: string       // short pill label
  pro?: boolean
  sections: { heading?: string; items: string[] }[]
}

// Ordered list, newest entry has to be on top
export const changelog: ChangelogEntry[] = [
  {
    version: '0.9.7', label: '0.9.7', pro: false,
    sections: [
      { heading: 'Beep Beep! Some important changes', items: [
        'Added a settings menu (Ctrl+Shift+S) — removed redundant hotkeys',
        'Added proximity beep (audio radar)',
        'Made temperature text optional via settings',
        'Added setting for coloured pedal bars',
        'Improved lap estimation for time-based sessions → more accurate fuel estimates',
        'Added discharge and brake regen rate (battery widget)',
        'Added all-time personal best tracking ("pb") — session best renamed to "sb"',
        'Tracking of invalid lap times and sector times',
        'Smaller start lights',
        'Improved EV support',
        'Fixed standings info / pit box overlap',
        'Fixed a potential resizing bug in strikethrough logic',
        'Remodeled threading architecture',
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
