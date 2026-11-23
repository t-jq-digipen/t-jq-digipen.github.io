/* =====================================================================
   PORTFOLIO CONTENT
   Everything the page shows lives in this file. You can edit it in
   any text editor (Notepad, VS Code, or the pencil icon on GitHub).

   HOW TO EDIT TEXT
   - Change the words between the double quotes:  note: "like this"
   - Keep the quotes and the comma at the end of the line.
   - To use a double quote inside a note, write  \"  instead,
     e.g.  note: "Inspired by the \"Bread Falling Over\" meme."
     (An apostrophe like  don't  is fine as it is.)
   - todo("...") shows a yellow placeholder. Replace the whole
     todo("...") with your own "text" when you're ready.

   HOW TO ADD A FILE TO ASSETS
   1. Put the file in the assets folder, e.g. assets/waffle/animations/
   2. Copy an existing line in the right folder and change it:
        { name: "Jump", type: "pixel", src: "assets/waffle/animations/jump.gif", frames: 4, note: "..." },
      type: "pixel" for pixel art (stays sharp), "image" for other pictures,
      "video" for .mp4 clips. frames and note are optional.

   NOTES AS BULLET POINTS
   notes: ["First point", "Second point"]
   To add a "Preview" button that jumps to another asset in the same
   project, use { text: "Idle", preview: "Idle" } where preview is the
   exact name of the asset to open.

   CHECK YOUR CHANGE
   Save, then refresh editor.html in your browser. If the page goes
   blank, a quote or comma is probably missing near what you changed.
   ===================================================================== */

const todo = t => `<span class='todo-text'>${t}</span>`;

const entities = {
  me: {
    name: "Tan Jun Quan",
    scene: `<div class="intro">
        <h1>Tan Jun Quan</h1>
        <p>Trained in product design, now making games from both ends: the C++ underneath and the pixel art on top.</p>
        <p class="mobile-only">Pick a project above. Its details are in the Inspector, and its clips and art are in Assets.</p>
      </div>
      <div class="guide" aria-hidden="true">
        <span class="guide-tag g-hier"><b>&larr;</b> Pick a project</span>
        <span class="guide-tag g-insp">Details in the Inspector <b>&rarr;</b></span>
        <span class="guide-tag g-assets">Clips, animations and art in Assets <b>&darr;</b></span>
      </div>`,
    components: [
      { title: "About", text: [
        "I got into making games because I love playing them. I started out in product and industrial design, interned in 3D at Silverspace, then trained as a pilot with the RSAF.",
        "When flight training didn't work out, I went back to school for computer science, and game development turned out to be where my design side and my programming side both get used.",
        "The best part is the moment it all comes together and we get to experience the result." ] },
      { title: "Profile", fields: [
        ["Studying", "BSc Computer Science (IMGD), SIT"],
        ["Languages", "C, C++, C#"],
        ["Tools", "Unity, ImGui, Git"],
        ["Art tools", "Clip Studio Paint, Aseprite, DaVinci Resolve"] ] },
      { title: "Art", kind: "art", items: [
        "Pixel art and frame-by-frame animation",
        "3D modelling and rendering",
        "Product and graphic design" ] },
      { title: "History", history: [
        ["2017", "Diploma in Product & Industrial Design", "Temasek Polytechnic"],
        ["2019", "3D graphic design intern", "Silverspace"],
        ["2021", "Pilot trainee", "Republic of Singapore Air Force"],
        ["2024", "BSc Computer Science in Interactive Media and Game Development", "Singapore Institute of Technology, now"] ] },
      { title: "Contact", fields: [
        ["Email", "t.junquan25@gmail.com"] ] },
      { title: "Links", links: [
        ["GitHub", "https://github.com/t-jq-digipen"],
        ["LinkedIn", "https://www.linkedin.com/in/tanjq/"] ] }
    ]
  },

  rag: {
    name: "Rock & Ghoul",
    scene: `<span class="scene-tag">rock_and_ghoul.mp4</span>
      <div class="viewport"><video src="assets/rock-and-ghoul.mp4" poster="assets/rock-and-ghoul-poster.jpg" autoplay muted loop playsinline aria-label="Rock & Ghoul combat: shield, ice spell, melee and fire attacks"></video><span class="gizmo"></span></div>`,
    components: [
      { title: "Project", fields: [
        ["Type", "2D action game, own C++ engine"],
        ["When", "Sep 2025 to Feb 2026"],
        ["Team", "8 (Avid Divas)"],
        ["Tech", "C++17, OpenGL, ImGui"] ] },
      { title: "Code", items: [
        "Built the engine's entity-component-system core, which the team extended with 16 component types",
        "Gave every component save, load and editor hooks, so new ones appear in scene files and this kind of editor",
        "Co-built the elemental combat system" ] },
      { title: "Art and team", kind: "team", items: [
        "Set up how the engine reads sprite sheets, and walked our artist through it",
        "Helped visualise VFX animations",
        "Project manager across programmers, a designer and an artist",
        "All artwork by Kelly Keli Goh" ] },
      { title: "Links", links: [["Code and write-up", "https://github.com/t-jq-digipen/Rock-and-Ghoul"]] }
    ],
    assets: [
      { name: "Combat clip", type: "video", src: "assets/rock-and-ghoul.mp4", poster: "assets/rock-and-ghoul-poster.jpg" },
      { folder: "Animation drafts", notes: ["Minimal drafts, just to help convey the direction we wanted", "Made in Clip Studio Paint", "Final art by Kelly Keli Goh"], items: [
        { name: "Sound travelling across floor before erupting", type: "image", src: "assets/rag/drafts/sound-across-floor.gif", frames: 16 },
        { name: "Sound blast around player", type: "image", src: "assets/rag/drafts/sound-blast-around-player.gif", frames: 13 },
        { name: "Sound blast travels up before falling down", type: "image", src: "assets/rag/drafts/sound-blast-up-and-down.gif", frames: 23 },
        { name: "Idle jamming", type: "image", src: "assets/rag/drafts/idle-jamming.gif", frames: 6 },
        { name: "Swing", type: "image", src: "assets/rag/drafts/swing.gif", frames: 6 }
      ] }
    ]
  },

  hard: {
    name: "HA:RD",
    scene: `<span class="scene-tag">hard_trailer.mp4</span>
      <div class="viewport"><video src="assets/hard/gameplay.mp4" poster="assets/hard/gameplay-poster.jpg" autoplay muted loop playsinline aria-label="HA:RD trailer: fighting the bosses, parrying, slashing and shooting"></video><span class="gizmo"></span></div>`,
    components: [
      { title: "Project", fields: [
        ["Title", "Heavy Assault: Rust & Dust"],
        ["Type", "2D action boss-fight game"],
        ["When", "Jan to Apr 2025"],
        ["Team", "5, team lead"],
        ["Tech", "C++, Alpha Engine"] ] },
      { title: "Code", items: [
        "Core player logic, including the parry and block system",
        "Hold E to defend: the first 0.3 seconds is a parry that refills ammo and builds rage; after that it's a block that halves damage but resets your combo. Parrying a boss slows time to 30% for a moment for dramatic effect :)",
        "SpriteSheet class that loads a sheet, splits it into frames and loops animations",
        "Helped finalise Boss 1 and Boss 2 logic",
        "Tutorial, built as an overlay in the hub world, and the camera" ] },
      { title: "Art", kind: "art", items: [
        "The player's full animation set, from idle to the three-hit combo, heavy laser shot and death",
        "Both bosses and their attacks",
        "UI: crosshair with ammo, cooldown indicators, parry spark, sword health bar and the logo",
        "Hub world campfire and spirit, and the training dummies" ] },
      { title: "Links", links: [
        ["Code and write-up", "https://github.com/t-jq-digipen/HA-RD"],
        ["Download the game", "https://drive.google.com/drive/folders/1B86CjflMuWHATOenwI20V10P8-394v5M?usp=sharing"] ] }
    ],
    assets: [
      { name: "Trailer", type: "video", src: "assets/hard/gameplay.mp4", poster: "assets/hard/gameplay-poster.jpg" },
      { folder: "Player", items: [
        { name: "Idle", type: "pixel", src: "assets/hard/animations/player-idle.webp", frames: 8 },
        { name: "Walk", type: "pixel", src: "assets/hard/animations/player-walk.webp", frames: 8 },
        { name: "Hurt", type: "pixel", src: "assets/hard/animations/player-hurt.webp", frames: 4 },
        { name: "Dash", type: "pixel", src: "assets/hard/animations/player-dash.webp", frames: 4 },
        { name: "Parry", type: "pixel", src: "assets/hard/animations/player-parry.webp", frames: 4,
          notes: ["Green outline for parry valid timing"] },
        { name: "Block", type: "pixel", src: "assets/hard/animations/player-block.webp", frames: 4 },
        { name: "Combo hit 1", type: "pixel", src: "assets/hard/animations/player-combo-1.webp", frames: 10 },
        { name: "Combo hit 2", type: "pixel", src: "assets/hard/animations/player-combo-2.webp", frames: 10 },
        { name: "Combo hit 3", type: "pixel", src: "assets/hard/animations/player-combo-3.webp", frames: 20 },
        { name: "Shooting", type: "pixel", src: "assets/hard/animations/player-shoot.webp", frames: 8 },
        { name: "Heavy laser shot", type: "pixel", src: "assets/hard/animations/player-heavy-laser.webp", frames: 22,
          notes: ["Recoil knockback in-game", { text: "Shoots laser beam", preview: "Laser beam" }] },
        { name: "Laser beam", type: "pixel", src: "assets/hard/animations/laser.webp", frames: 33 },
        { name: "Death", type: "pixel", src: "assets/hard/animations/player-death.webp", frames: 11 },
        { name: "Player sprite sheet", type: "pixel", sheet: true, src: "assets/hard/sheets/player.webp",
          notes: ["One row per animation",
                  { text: "Idle", preview: "Idle" }, { text: "Walk", preview: "Walk" },
                  { text: "Hurt", preview: "Hurt" }, { text: "Dash", preview: "Dash" },
                  { text: "Parry", preview: "Parry" }, { text: "Block", preview: "Block" },
                  { text: "Combo hit 1", preview: "Combo hit 1" }, { text: "Combo hit 2", preview: "Combo hit 2" },
                  { text: "Combo hit 3", preview: "Combo hit 3" }, { text: "Shooting", preview: "Shooting" },
                  { text: "Heavy laser shot", preview: "Heavy laser shot" }, { text: "Death", preview: "Death" }] }
      ] },
      { folder: "Bosses", items: [
        { folder: "Boss 1", items: [
          { name: "Idle", type: "pixel", src: "assets/hard/animations/boss1/boss1-idle.webp", frames: 4 },
          { name: "Move", type: "pixel", src: "assets/hard/animations/boss1/boss1-move.webp", frames: 8 },
          { folder: "Sequence 1", notes: ["Lift up, smash, charge up hand, sweep hand across"], items: [
            { name: "Full sequence", type: "pixel", src: "assets/hard/animations/boss1/boss1-sequence-1.webp", frames: 38 },
            { name: "Lift up and smash", type: "pixel", src: "assets/hard/animations/boss1/boss1-smash.webp", frames: 15,
              notes: ["Windup, hit, recover"] },
            { name: "Sweep hand", type: "pixel", src: "assets/hard/animations/boss1/boss1-sweep.webp", frames: 25,
              notes: ["Windup, hit, recover"] }
          ] },
          { folder: "Sequence 2", notes: ["Lift up left arm, smash down, lift up right arm, smash down, charge up, spin around"], items: [
            { name: "Full sequence", type: "pixel", src: "assets/hard/animations/boss1/boss1-sequence-2.webp", frames: 35 },
            { name: "Left arm smash", type: "pixel", src: "assets/hard/animations/boss1/boss1-left-smash.webp", frames: 12,
              notes: ["Windup, hit, recover"] },
            { name: "Right arm smash", type: "pixel", src: "assets/hard/animations/boss1/boss1-right-smash.webp", frames: 10,
              notes: ["Windup, hit, recover"] },
            { name: "Charge up and spin", type: "pixel", src: "assets/hard/animations/boss1/boss1-spin.webp", frames: 14,
              notes: ["Windup, hit, recover"] }
          ] },
          { name: "Aim and shoot", type: "pixel", src: "assets/hard/animations/boss1/boss1-aim-shoot.webp", frames: 32,
            notes: ["Windup, fire, recover", { text: "Fires the fist", preview: "Fist" }] },
          { name: "Charge", type: "pixel", src: "assets/hard/animations/boss1/boss1-charge.webp", frames: 26,
            notes: ["Charge windup, charging loop, recover"] },
          { name: "Stunned", type: "pixel", src: "assets/hard/animations/boss1/boss1-stunned.webp", frames: 2 },
          { name: "Dead", type: "pixel", src: "assets/hard/animations/boss1/boss1-dead.png", frames: 1 },
          { name: "Fist", type: "pixel", src: "assets/hard/animations/fist.webp", frames: 2 },
          { name: "Boss 1 sprite sheet", type: "pixel", sheet: true, src: "assets/hard/sheets/boss-1.webp",
            notes: [{ text: "Idle", preview: "Idle" }, { text: "Move", preview: "Move" },
                    { text: "Sequence 1, attack 1", preview: "Lift up and smash" },
                    { text: "Sequence 1, attack 2", preview: "Sweep hand" },
                    { text: "Stunned", preview: "Stunned" },
                    { text: "Aim and shoot", preview: "Aim and shoot" },
                    { text: "Charge", preview: "Charge" },
                    { text: "Sequence 2, attack 1", preview: "Left arm smash" },
                    { text: "Sequence 2, attack 2", preview: "Right arm smash" },
                    { text: "Sequence 2, attack 3", preview: "Charge up and spin" },
                    { text: "Dead", preview: "Dead" }] }
        ] },
        { folder: "Boss 2", notes: ["Phase 2 uses a mix of phase 1 animations"], items: [
          { name: "Idle", type: "pixel", src: "assets/hard/animations/boss2/boss2-idle.webp", frames: 13 },
          { name: "Parried", type: "pixel", src: "assets/hard/animations/boss2/boss2-parried.webp", frames: 14 },
          { name: "Missile shoot", type: "pixel", src: "assets/hard/animations/boss2/boss2-missile.webp", frames: 12,
            notes: ["Windup, hit, recover", { text: "Fires lightning balls", preview: "Lightning ball" }] },
          { folder: "Sequence 1", notes: ["Dash to target, down slash, side slash"], items: [
            { name: "Full sequence", type: "pixel", src: "assets/hard/animations/boss2/boss2-sequence-1.webp", frames: 36 },
            { name: "Dash to target", type: "pixel", src: "assets/hard/animations/boss2/boss2-dash-to-target.webp", frames: 8 },
            { name: "Down slash", type: "pixel", src: "assets/hard/animations/boss2/boss2-down-slash.webp", frames: 10,
              notes: ["Windup, hit, recover"] },
            { name: "Side slash", type: "pixel", src: "assets/hard/animations/boss2/boss2-side-slash.webp", frames: 18,
              notes: ["Windup, hit, recover"] }
          ] },
          { folder: "Sequence 2", notes: ["Stab sword down, release pulse shockwave"], items: [
            { name: "Full sequence", type: "pixel", src: "assets/hard/animations/boss2/boss2-sequence-2.webp", frames: 42 },
            { name: "Stab", type: "pixel", src: "assets/hard/animations/boss2/boss2-stab.webp", frames: 15,
              notes: ["Windup, hit, recover"] },
            { name: "Release pulse", type: "pixel", src: "assets/hard/animations/boss2/boss2-pulse.webp", frames: 29,
              notes: ["Windup, hit, recover", { text: "Pulse shockwave", preview: "Lightning wave" }] }
          ] },
          { name: "Death", type: "pixel", src: "assets/hard/animations/boss2/boss2-death.webp", frames: 15 },
          { name: "End of first phase", type: "pixel", src: "assets/hard/animations/boss2/boss2-phase-end.webp", frames: 30 },
          { name: "Charge up effects", type: "pixel", src: "assets/hard/animations/boss2/boss2-charge-effects.webp", frames: 17 },
          { name: "Dash", type: "pixel", src: "assets/hard/animations/boss2/boss2-dash.webp", frames: 8 },
          { name: "Lightning ball", type: "pixel", src: "assets/hard/animations/lightning-ball.webp", frames: 10 },
          { name: "Lightning wave", type: "pixel", src: "assets/hard/animations/lightning-wave.webp", frames: 4 },
          { name: "Boss 2 sprite sheet", type: "pixel", sheet: true, src: "assets/hard/sheets/boss-2.webp",
            notes: ["The row structure is meant for phase 1",
                    { text: "Idle", preview: "Idle" }, { text: "Parried", preview: "Parried" },
                    { text: "Missile shoot", preview: "Missile shoot" },
                    { text: "Dash to target", preview: "Dash to target" },
                    { text: "Sequence 1, attack 1 (down slash)", preview: "Down slash" },
                    { text: "Sequence 1, attack 2 (side slash)", preview: "Side slash" },
                    { text: "Sequence 2, attack 1 (stab)", preview: "Stab" },
                    { text: "Sequence 2, attack 2 (release pulse)", preview: "Release pulse" },
                    { text: "Death", preview: "Death" },
                    { text: "End of first phase", preview: "End of first phase" },
                    { text: "Charge up effects", preview: "Charge up effects" },
                    { text: "Dash animation", preview: "Dash" }] }
        ] }
      ] },
      { folder: "UI", items: [
        { name: "Logo", type: "pixel", src: "assets/hard/animations/logo-shine.webp", frames: 16,
          notes: ["Looping \"shine swipe\" animation"] },
        { name: "Crosshair", type: "pixel", src: "assets/hard/animations/crosshair-ammo.webp", frames: 4,
          notes: ["Crosshair with ammo indicator"] },
        { name: "Racecar HUD", type: "pixel", src: "assets/hard/ui/racecar.png",
          notes: ["Crosshair racecar HUD indicators for parry/dash cooldown/availability"] },
        { name: "Parry spark", type: "pixel", src: "assets/hard/animations/parry-spark.webp", frames: 9,
          notes: ["Spark indicator for enemy attack that is good to parry (you will stun them)"] },
        { name: "Sword health bar", type: "pixel", sheet: true, src: "assets/hard/sheets/sword-hud.webp",
          notes: ["Healthbar stylized to look like the sword, holds ammo information and rage meter information"],
          // live preview: row 1 health, row 2 ammo, rows 3-7 rage levels (same mapping as UI.cpp)
          hud: { cols: 41, rows: 7, crop: [4, 126, 168, 52], maxHp: 100, maxAmmo: 3, maxRage: 5, rageLoop: 0.5 } },
        { folder: "Tutorial prompts", items: [
          { name: "WASD", type: "pixel", src: "assets/hard/ui/tutorial/wasd.png" },
          { name: "Space", type: "pixel", src: "assets/hard/ui/tutorial/space.png" },
          { name: "Melee", type: "pixel", src: "assets/hard/ui/tutorial/melee.png" },
          { name: "Range", type: "pixel", src: "assets/hard/ui/tutorial/range.png" },
          { name: "Reload", type: "pixel", src: "assets/hard/ui/tutorial/reload.png" },
          { name: "Parry", type: "pixel", src: "assets/hard/ui/tutorial/parry.png" },
          { name: "Arrow", type: "pixel", src: "assets/hard/ui/tutorial/arrow.png" },
          { name: "Checkmark", type: "pixel", src: "assets/hard/ui/tutorial/checkmark.png" }
        ] }
      ] },
      { folder: "Hub world", items: [
        { name: "Campfire", type: "pixel", src: "assets/hard/animations/campfire.webp", frames: 12 },
        { name: "Spirit", type: "pixel", src: "assets/hard/animations/spirit.webp", frames: 12,
          notes: ["The campfire, but without the base"] },
        { name: "Training dummy 1", type: "pixel", sheet: true, src: "assets/hard/hub/training-dummy-1.png" },
        { name: "Training dummy 2", type: "pixel", sheet: true, src: "assets/hard/hub/training-dummy-2.png" }
      ] }
    ]
  },

  waffle: {
    name: "WAFFLE RUSH",
    scene: `<span class="scene-tag">waffle_rush.mp4</span>
      <div class="viewport"><video src="assets/waffle-rush.mp4" poster="assets/waffle-rush-poster.jpg" autoplay muted loop playsinline aria-label="WAFFLE RUSH gameplay: the waffle crawls through a platform and wall jumps"></video><span class="gizmo"></span></div>`,
    components: [
      { title: "Project", fields: [
        ["Type", "2D pixel-art platformer"],
        ["When", "Sep to Dec 2024"],
        ["Team", "5, team lead"],
        ["Tech", "C, CProcessing"],
        ["Art tools", "Piskel, Aseprite"] ] },
      { title: "Code", items: [
        "Built platform crawling by making platforms hollow collider outlines, after an inverted-collision approach proved fragile",
        "Built wall sliding and wall jumping",
        "Team lead: broke the game into tasks with pseudocode outlines and assigned them across the team" ] },
      { title: "Art", kind: "art", items: [
        "Drew all the character and hazard animations, from idle and crawl to the waffle-press respawn",
        "Pixel art for the player, hazards and effects" ] },
      { title: "Links", links: [
        ["Code and write-up", "https://github.com/t-jq-digipen/waffle-rush"],
        ["Download the game", "https://drive.google.com/drive/folders/1oJzChbCfwYuX9dZuXOLY6yLIySLj2E0H?usp=sharing"] ] }
    ],
    assets: [
      { name: "Gameplay clip", type: "video", src: "assets/waffle-rush.mp4", poster: "assets/waffle-rush-poster.jpg" },
      { name: "Art showcase", type: "video", src: "assets/waffle/art-showcase.mp4", poster: "assets/waffle/art-showcase-poster.jpg" },
      { folder: "Animations", items: [
        { name: "Idle", type: "pixel", src: "assets/waffle/animations/idle.gif", frames: 2,
          notes: ["Simple idle bounce"] },
        { name: "Walk", type: "pixel", src: "assets/waffle/animations/walk.gif", frames: 2,
          notes: ["Simple two-frame walk cycle"] },
        { name: "Jump", type: "pixel", src: "assets/waffle/animations/jump.png", frames: 1 },
        { name: "Wall slide", type: "pixel", src: "assets/waffle/animations/wall-slide.png", frames: 1 },
        { name: "Death flail", type: "pixel", src: "assets/waffle/animations/fall.gif", frames: 2,
          notes: ["Inspired by retro games like Mario's fall-to-death animation",
                  "Running out of stamina, or falling off the map leads to this death animation"] },
        { name: "Crawl down (enter platform)", type: "pixel", src: "assets/waffle/animations/crawl-down.gif", frames: 13,
          notes: ["Inspired by \"Bread Falling Over\" meme",
                  "Waffle topples over into the platform to \"enter\" it"] },
        { name: "Crawl", type: "pixel", src: "assets/waffle/animations/crawl.gif", frames: 2,
          notes: ["Simple two-frame crawl cycle"] },
        { name: "Crawl idle", type: "pixel", src: "assets/waffle/animations/crawl-idle.gif", frames: 2,
          notes: ["Simple idle bounce, but on the wall"] },
        { name: "Crawl up (exit platform)", type: "pixel", src: "assets/waffle/animations/crawl-up.gif", frames: 13,
          notes: ["Wanted to give the impression of the waffle trying its best, added slight struggle delay at the start to emphasise it",
                  "Waffle climbs up over the platform edge"] },
        { name: "Waffle press (respawn and checkpoint)", type: "pixel", src: "assets/waffle/animations/waffle-press.gif", frames: 35,
          notes: ["Inspired literally by \"How are waffles created?\"",
                  "Serves as checkpoint, frozen closed when inactive, and open when active"] },
        { name: "Burnt (death by fire)", type: "pixel", src: "assets/waffle/animations/burnt.gif", frames: 17,
          notes: ["Inspired by burnt food, and old cartoon physics with delayed reaction",
                  "Waffle chars up, and crumbles after a short pause"] },
        { name: "Crushed (death by hazard)", type: "pixel", src: "assets/waffle/animations/crush.gif", frames: 4,
          notes: ["Waffle flattened...", "Could this be considered a pancake?"] },
        { name: "Fire hazard", type: "pixel", src: "assets/waffle/animations/fire-hazard.gif", frames: 16,
          notes: ["One of the trickiest animations in this project",
                  "Needed to connect the edges to allow multiple fire tiles to \"stack\" side by side seamlessly"] },
        { name: "Level clear (onto the plate)", type: "pixel", src: "assets/waffle/animations/plate.gif", frames: 5,
          notes: ["Inspired by \"Bread Falling Over\" meme",
                  "Plate serves as the objective checkpoint as well"] }
      ] },
      { folder: "Sprite sheets", note: "The original sprite sheets the game loads, as drawn.", items: [
        { name: "Player", type: "pixel", sheet: true, src: "assets/waffle/images/player-sheet.png",
          notes: ["Simple base animations",
                  { text: "Idle", preview: "Idle" },
                  { text: "Walk", preview: "Walk" },
                  { text: "Jump", preview: "Jump" },
                  { text: "Wall slide", preview: "Wall slide" },
                  { text: "Crawl Idle", preview: "Crawl idle" },
                  { text: "Crawl", preview: "Crawl" }] },
        { name: "Crawl transitions", type: "pixel", sheet: true, src: "assets/waffle/images/crawl-transition-sheet.png",
          notes: ["Transition animations for entering or exiting platforms",
                  { text: "Fall in", preview: "Crawl down (enter platform)" },
                  { text: "Climb out", preview: "Crawl up (exit platform)" }] },
        { name: "Waffle press", type: "pixel", sheet: true, src: "assets/waffle/images/waffle-press-sheet.png",
          notes: [{ text: "Respawn sequence, also used as checkpoints", preview: "Waffle press (respawn and checkpoint)" }] },
        { name: "Burnt", type: "pixel", sheet: true, src: "assets/waffle/images/burnt-sheet.png",
          notes: ["Burning to death animations, with different versions for burning mid-air or when grounded",
                  { text: "Burnt", preview: "Burnt (death by fire)" }] },
        { name: "Crush", type: "pixel", sheet: true, src: "assets/waffle/images/crush-sheet.png",
          notes: [{ text: "Crushed to death animation", preview: "Crushed (death by hazard)" }] },
        { name: "Fire", type: "pixel", sheet: true, src: "assets/waffle/images/fire-sheet.png",
          notes: [{ text: "Looping fire hazard", preview: "Fire hazard" }] },
        { name: "Plate", type: "pixel", sheet: true, src: "assets/waffle/images/plate-sheet.png",
          notes: ["First frame serves as the clear objective, plays the animation out when player has completed the level",
                  { text: "Waffle falls on plate", preview: "Level clear (onto the plate)" }] }
      ] },
      { folder: "Illustration", items: [
        { name: "Title art", type: "image", src: "assets/waffle/images/title-art.webp",
          note: "Key art I drew for the title screen, in a painted style rather than pixel art." }
      ] }
    ]
  },

  graphics: {
    name: "Illustration and graphics",
    scene: `<span class="scene-tag">194bwc_patch_reveal.mp4</span>
      <div class="viewport"><video src="assets/other/graphics/194bwc-reveal.mp4" poster="assets/other/graphics/194bwc-reveal-poster.jpg" autoplay muted loop playsinline aria-label="Animated reveal of the 194 BWC course patch: a dragon's eye opens, it rises from the waves and the patch forms"></video><span class="gizmo"></span></div>`,
    components: [
      { title: "Overview", fields: [
        ["Type", "Patch and logo design, illustration"],
        ["When", "2022 to 2023"],
        ["Tools", "Clip Studio Paint, Adobe Illustrator, DaVinci Resolve, ballpoint pen"] ] },
      { title: "Art", kind: "art", items: [
        "Course patches for 194 BWC and 64 UWC, and an award patch for the Quarterly Sports Challenge, designed during pilot training",
        "Logo for the AFTC Trainee Council",
        "An animated reveal video for the 194 BWC patch",
        "A ballpoint scenery sketch, drawn on location in Busan" ] }
    ],
    assets: [
      { name: "194 BWC patch reveal", type: "video", src: "assets/other/graphics/194bwc-reveal.mp4", poster: "assets/other/graphics/194bwc-reveal-poster.jpg",
        when: "Oct 2022", made: "Clip Studio Paint, DaVinci Resolve",
        notes: ["Self-taught from YouTube tutorials"] },
      { folder: "Patches and logos", items: [
        { name: "194 BWC course patch", type: "image", src: "assets/other/graphics/194bwc-patch.webp", when: "Aug 2022", made: "Clip Studio Paint" },
        { name: "64 UWC course patch", type: "image", src: "assets/other/graphics/64uwc-patch.webp", when: "May 2023", made: "Clip Studio Paint" },
        { name: "Quarterly Sports Challenge award patch", type: "image", src: "assets/other/graphics/qsc-patch.webp", when: "Apr 2022", made: "Clip Studio Paint, Adobe Illustrator" },
        { name: "AFTC Trainee Council logo", type: "image", src: "assets/other/graphics/aftc-tc-logo.webp", when: "Feb 2022", made: "Adobe Illustrator" }
      ] },
      { name: "Scenery sketch in Busan", type: "image", src: "assets/other/graphics/busan-sketch.jpg", when: "Jun 2023", made: "Ballpoint pen" }
    ]
  },

  making: {
    name: "Making things",
    scene: `<span class="scene-tag">dragon_sculpture.jpg</span>
      <div class="viewport"><img src="assets/other/making/dragon-full.jpg" alt="Polymer clay dragon sculpture with spread wings, painted in deep reds and browns"><span class="gizmo"></span></div>`,
    components: [
      { title: "Overview", fields: [
        ["Type", "Sculpture, craft and prototyping"],
        ["When", "2018 to 2022"],
        ["Materials", "Polymer clay, wood veneer, guzheng strings, leather, micro:bit, servo motors, cardboard"] ] },
      { title: "Art", kind: "art", items: [
        "A polymer clay dragon for a Design Fundamentals module at Temasek Polytechnic, built on an aluminium wire skeleton, with wire mesh to support the wings",
        "A pair of wooden rings for my girlfriend and me, inlaid with her old guzheng strings",
        "A hand-embossed leather wallet" ] },
      { title: "Prototyping", items: [
        "A claw machine prototype for a Design Innovation module, which I made from the micro:bit programming to the physical build: two servo motors move the arm, and a magnet on it picks up foam balls with magnets inside" ] }
    ],
    assets: [
      { folder: "Dragon sculpture", notes: [
          "Created for a Design Fundamentals module in Temasek Poly",
          "We were given the option of either a drawing, painting, or sculpture, and I chose to make a sculpture",
          "The frame is created with an aluminium wire skeleton, aluminium foil and masking tape for mass, then covered with polymer clay",
          "The wings were tricky to support as foil or tape would not hold, but managed to get by with using wire mesh" ], items: [
        { name: "Full view", type: "image", src: "assets/other/making/dragon-full.jpg", when: "Jan 2019", made: "Polymer clay, airbrush lacquer paints" },
        { name: "Head", type: "image", src: "assets/other/making/dragon-head.jpg", when: "Jan 2019", made: "Polymer clay, airbrush lacquer paints" },
        { name: "Wing", type: "image", src: "assets/other/making/dragon-wing.jpg", when: "Jan 2019", made: "Polymer clay, airbrush lacquer paints" },
        { folder: "Work in progress", notes: ["From the wire skeleton to the first wash of paint"], items: [
          { name: "1. Aluminium wire skeleton, with wire mesh for the wings", type: "image", src: "assets/other/making/dragon-wip/01.jpg" },
          { name: "2. Bulked out with aluminium foil and masking tape", type: "image", src: "assets/other/making/dragon-wip/02.jpg" },
          { name: "3. Covered in polymer clay", type: "image", src: "assets/other/making/dragon-wip/03.jpg" },
          { name: "4. Sculpting the head", type: "image", src: "assets/other/making/dragon-wip/04.jpg" },
          { name: "5. Clay over the wing mesh", type: "image", src: "assets/other/making/dragon-wip/05.jpg" },
          { name: "6. Detailing the claws", type: "image", src: "assets/other/making/dragon-wip/06.jpg" },
          { name: "7. Adding scales along the body", type: "image", src: "assets/other/making/dragon-wip/07.jpg" },
          { name: "8. Baking in the oven", type: "image", src: "assets/other/making/dragon-wip/08.jpg" },
          { name: "9. Out of the oven", type: "image", src: "assets/other/making/dragon-wip/09.jpg" },
          { name: "10. Black acrylic wash to make shadows and textures pop more", type: "image", src: "assets/other/making/dragon-wip/10.jpg" }
        ] }
      ] },
      { name: "Custom wood rings", type: "image", src: "assets/other/making/wood-rings.jpg", when: "Aug 2022",
        made: "Maple veneer, stripped guzheng wire, crushed amethyst, superglue",
        notes: [
          "Created a pair of rings for myself and my girlfriend",
          "She plays the guzheng, I used the old strings for the inlays",
          "The construction was created with strips of thin wood veneer, boiled to soften and rolled into coils to dry, then glued down with CA superglue once dried, before sanding to shape, and finishing again with CA superglue" ] },
      { folder: "Leather wallet", notes: [
          "Custom hand-embossed leather wallet",
          "Hand stitched, and embossed with hand stamps",
          "Self-taught from YouTube tutorials",
          "The emboss pattern and symbols are a reference to Miyamoto Musashi from Fate/Grand Order",
          "The wallet ended up being too thick for daily use, hence I no longer use it",
          "I would definitely use thinner leather in the future, but I still keep it as part of my artwork" ], items: [
        { name: "Front", type: "image", src: "assets/other/making/wallet-front.jpg", when: "Mar 2020", made: "Leather" },
        { name: "Back", type: "image", src: "assets/other/making/wallet-back.jpg", when: "Mar 2020", made: "Leather" },
        { name: "Inside", type: "image", src: "assets/other/making/wallet-inside.jpg", when: "Mar 2020", made: "Leather" }
      ] },
      { name: "Prototype claw machine", type: "video", src: "assets/other/making/claw-machine.mp4", poster: "assets/other/making/claw-machine-poster.jpg",
        when: "Dec 2018", made: "micro:bit programming, two servo motors, magnets, cardboard",
        notes: [
          "Created as part of a Design Innovation module project in Temasek Poly",
          "We were tasked to come up with a small scale prototype, and I made the claw machine from the micro:bit programming to the physical prototype",
          "The micro:bit was programmed in Microsoft MakeCode by stacking visual code blocks, with no manual coding, just drag and drop",
          "To simulate a claw and capsules, I used a magnet on the arm and embedded magnets in foam balls",
          "The rest of the construction outside the micro:bit and servos was made from cardboard" ] }
    ]
  }
};

const order = ["rag", "hard", "waffle", "graphics", "making"];
