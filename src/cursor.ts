import cornerstoneTools from 'cornerstone-tools'

const MouseCursor = cornerstoneTools.import('tools/cursors/MouseCursor')
export const rotatedEllipticalRoiCursor = new MouseCursor(
  `<path fill="ACTIVE_COLOR" d="M1312 256h-832q-66 0-113 47t-47 113v832q0 66 47
    113t113 47h832q66 0 113-47t47-113v-832q0-66-47-113t-113-47zm288 160v832q0
    119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119
    84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
  />`,
  {
    viewBox: {
      x: 1792,
      y: 1792,
    },
  },
)
