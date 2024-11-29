import{_ as t}from"./chunks/modes.DIEVMJo3.js";import{_ as o,c as i,a0 as l,o as r}from"./chunks/framework.BOr1CWtK.js";const f=JSON.parse('{"title":"Swift Pro Experiments","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/swiftPro/experiments.md","filePath":"docs/swiftPro/experiments.md"}'),a={name:"docs/swiftPro/experiments.md"};function n(s,e,d,h,u,c){return r(),i("div",null,e[0]||(e[0]=[l('<h1 id="swift-pro-experiments" tabindex="-1">Swift Pro Experiments <a class="header-anchor" href="#swift-pro-experiments" aria-label="Permalink to &quot;Swift Pro Experiments&quot;">​</a></h1><h2 id="how-to-fly" tabindex="-1">How to Fly!! <a class="header-anchor" href="#how-to-fly" aria-label="Permalink to &quot;How to Fly!!&quot;">​</a></h2><ul><li>Anyone who flies the drone need to know proper piloting before flying the drone.</li></ul><h2 id="ensure-your-setup-is-complete" tabindex="-1">Ensure Your Setup is Complete <a class="header-anchor" href="#ensure-your-setup-is-complete" aria-label="Permalink to &quot;Ensure Your Setup is Complete&quot;">​</a></h2><ul><li>Confirm that your setup is complete.</li><li>Select the Swift Pro model on your Radio Master.</li><li>Verify that the Cellular Tower is visible on the Swift Pro screen.</li><li>Ensure the drone can be armed and disarmed properly.</li></ul><img src="'+t+'" alt="Modes" style="max-width:50%;height:50%;border-radius:10px;margin-top:10px;"><ul><li><p>The SA button controls the Arm/Disarm function.</p><ul><li><strong>SA Switch UP</strong>: Disarm State.</li><li><strong>SA Switch DOWN</strong>: Arm State.</li></ul></li><li><p>The SB button controls the Flight Modes.</p><ul><li><strong>SB Switch UP</strong>: Stabilize Mode.</li><li><strong>SB Switch CENTER</strong>: AltHold Mode.</li><li><strong>SB Switch DOWN</strong>: FlowHold Mode.</li></ul></li></ul><h2 id="_1-fly-in-stabilize-mode" tabindex="-1">1. Fly in Stabilize Mode <a class="header-anchor" href="#_1-fly-in-stabilize-mode" aria-label="Permalink to &quot;1. Fly in Stabilize Mode&quot;">​</a></h2><ul><li>This mode is essential for all other flight modes.</li><li><strong>Prerequisite</strong>: <em>Learn to fly a drone using a simulator. Aim for about 40-50 hours of practice. You can use the <a href="https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/" target="_blank" rel="noreferrer">Liftoff Simulator</a>.</em></li></ul><p>Once you&#39;ve learned to fly, follow these steps while prioritizing safety:</p><ol><li>Ensure the throttle stick is down and the roll/pitch is centered.</li><li>Pull the SA switch down (SA: DOWN) to arm the drone.</li><li>Keep the SB switch up (SB: UP) in Stabilize Mode initially.</li><li>Gradually increase the throttle to lift off and land.</li><li>As you gain confidence, practice performing roll and pitch maneuvers.</li><li>After some practice, you’ll be ready to fly in different modes.</li></ol><p><a href="https://www.youtube.com/watch?v=u_ArriXbrR0" target="_blank" rel="noreferrer"><img src="https://img.youtube.com/vi/u_ArriXbrR0/hqdefault.jpg" alt="Thumbnail"></a></p><h2 id="_2-fly-in-althold-mode" tabindex="-1">2. Fly in AltHold Mode <a class="header-anchor" href="#_2-fly-in-althold-mode" aria-label="Permalink to &quot;2. Fly in AltHold Mode&quot;">​</a></h2><ul><li><strong>Prerequisite</strong>: You must master Stability Mode to maintain manual control if the drone goes out of control.</li><li>Once you&#39;re proficient in Stability Mode, you can move to AltHold Mode.</li></ul><ol><li>Ensure the throttle stick is down and the roll/pitch is centered.</li><li>Pull the SA switch down (SA: DOWN) to arm the drone.</li><li>Set the SB switch to center (SB: CENTER) for AltHold Mode.</li></ol><p><strong>Key Points</strong>:</p><ul><li>In AltHold mode, you provide velocity rather than angles. At 0% throttle, the drone will begin to decelerate based on the settings in the full parameter list.</li><li>At 50% throttle, the drone will maintain its current position.</li><li>At 100% throttle, it will climb at the rate specified in the parameter list.</li><li>Between 0-50%, the throttle maps speed from 0 to maximum deceleration.</li><li>Between 50-100%, it maps speed from 0 to maximum acceleration.</li><li>Gradually increase the throttle to lift off and land.</li><li>This mode will automatically level the drone, but you still need to manage roll and pitch.</li></ul><p>The RangeFinder operates effectively up to 120 cm from the ground; beyond that, the barometer takes over due to sensor limitations. If the drone becomes unmanageable, switch back to Stability Mode (SB: UP) to regain control. <a href="https://www.youtube.com/watch?v=u_ArriXbrR0" target="_blank" rel="noreferrer"><img src="https://img.youtube.com/vi/u_ArriXbrR0/hqdefault.jpg" alt="Thumbnail"></a></p><h2 id="_3-fly-in-flowhold-mode" tabindex="-1">3. Fly in FlowHold Mode <a class="header-anchor" href="#_3-fly-in-flowhold-mode" aria-label="Permalink to &quot;3. Fly in FlowHold Mode&quot;">​</a></h2><div class="flex-setup"><p><strong>Disclaimer:</strong> Requires good texture surface for optical flow sensor.</p></div><ul><li><strong>Prerequisite</strong>: You must master Stability Mode to maintain manual control if the drone goes out of control.</li><li>Once you&#39;re proficient in Stability Mode, you can move to FlowHold Mode.</li></ul><ol><li>Ensure the throttle stick is down and the roll/pitch is centered.</li><li>Pull the SA switch down (SA: DOWN) to arm the drone.</li><li>Set the SB switch down (SB: DOWN) for FlowHold Mode.</li></ol><p><strong>Key Points</strong>:</p><ul><li>Similar to AltHold, in FlowHold mode, you provide velocity instead of angles. At 0% throttle, the drone decelerates based on parameter settings.</li><li>At 50% throttle, it maintains its position.</li><li>At 100% throttle, it climbs according to the parameter list.</li><li>Gradually increase the throttle and wait a few seconds for the drone to respond.</li><li>The RangeFinder works effectively up to 120 cm; beyond that, the barometer takes over.</li><li>To lock the drone&#39;s position on the roll and pitch axes, it uses an optical flow sensor. This may take several seconds and requires a good ground texture for effective locking.</li></ul><p><a href="https://www.youtube.com/watch?v=u_ArriXbrR0" target="_blank" rel="noreferrer"><img src="https://img.youtube.com/vi/u_ArriXbrR0/hqdefault.jpg" alt="Thumbnail"></a></p>',25)]))}const w=o(a,[["render",n]]);export{f as __pageData,w as default};
