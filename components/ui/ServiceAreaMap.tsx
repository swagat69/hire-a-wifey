import styles from "./ServiceAreaMap.module.css";

/**
 * A schematic of the service area, not a survey map: the coastline is
 * stylised and the markers show the esplanade suburbs in their true
 * west-to-east order. For production, swap this for a geocoded
 * interactive map (spec §23) — the surrounding layout does not change.
 */
export default function ServiceAreaMap() {
  return (
    <figure className={styles.wrap}>
      <svg
        className={styles.svg}
        viewBox="0 0 800 520"
        role="img"
        aria-labelledby="map-title map-desc"
      >
        <title id="map-title">Hire a Wifey service area, Hervey Bay</title>
        <desc id="map-desc">
          A stylised map of the Hervey Bay coastline showing the suburbs served,
          from Point Vernon in the west through Pialba, Scarness, Torquay and
          Urangan, south to River Heads.
        </desc>

        {/* Water */}
        <path
          d="M0 0 H800 V132 C700 150 640 176 520 186 C420 194 330 198 250 190 C180 183 132 168 108 150 C86 133 44 138 0 156 Z"
          fill="var(--blush)"
        />

        {/* Bay ripples — three quiet rules, no cartoon waves */}
        <g stroke="var(--rose)" strokeOpacity="0.32" strokeWidth="1" fill="none">
          <path d="M120 58 C200 44 300 44 380 58" />
          <path d="M430 92 C510 78 610 78 690 92" />
          <path d="M180 108 C250 96 330 96 400 108" />
        </g>

        {/* Coastline */}
        <path
          d="M0 156 C44 138 86 133 108 150 C132 168 180 183 250 190 C330 198 420 194 520 186 C640 176 700 150 800 132"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* K'gari / Fraser Island, across the strait */}
        <path
          d="M742 4 C768 46 776 118 762 190 C752 244 748 300 756 352"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeDasharray="1 5"
          strokeLinecap="round"
        />

        {/* Mary River mouth, south-east */}
        <path
          d="M690 232 C664 268 648 306 646 348 C645 382 652 410 668 436"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Inland contour rules */}
        <g stroke="var(--ink)" strokeOpacity="0.1" strokeWidth="1" fill="none">
          <path d="M0 240 C160 260 380 268 620 250" />
          <path d="M0 330 C150 352 360 362 600 344" />
          <path d="M0 420 C140 442 330 452 560 436" />
        </g>

        {/* Markers, west to east */}
        <g className={styles.markers}>
          {[
            { x: 96, y: 152, label: "Point Vernon", dy: -14 },
            { x: 232, y: 188, label: "Pialba", dy: 22 },
            { x: 330, y: 194, label: "Scarness", dy: -14 },
            { x: 432, y: 193, label: "Torquay", dy: 22 },
            { x: 566, y: 182, label: "Urangan", dy: -14 },
            { x: 664, y: 400, label: "River Heads", dy: 22 },
          ].map((m) => (
            <g key={m.label}>
              <circle cx={m.x} cy={m.y} r="4.5" fill="var(--rose)" />
              <circle
                cx={m.x}
                cy={m.y}
                r="11"
                fill="none"
                stroke="var(--rose)"
                strokeOpacity="0.35"
                strokeWidth="1"
              />
              <text
                x={m.x}
                y={m.y + m.dy}
                textAnchor="middle"
                className={styles.label}
              >
                {m.label}
              </text>
            </g>
          ))}
        </g>

        <text x="382" y="60" textAnchor="middle" className={styles.bayLabel}>
          HERVEY BAY
        </text>
      </svg>
      <figcaption className={styles.caption}>
        Schematic — see the full suburb list below.
      </figcaption>
    </figure>
  );
}
