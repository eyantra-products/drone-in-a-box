import{_ as e,c as a,a0 as i,o as r}from"./chunks/framework.E9geiPbv.js";const o="/drone-in-a-box/assets/holybroDrone/garudaMiniProduct.png",n="/drone-in-a-box/assets/holybroDrone/fc.png",s="/drone-in-a-box/assets/holybroDrone/gps.png",l="/drone-in-a-box/assets/holybroDrone/elrs.png",d="/drone-in-a-box/assets/holybroDrone/ski.png",c="/drone-in-a-box/assets/holybroDrone/moters.png",p="/drone-in-a-box/assets/holybroDrone/battery.png",x=JSON.parse('{"title":"Garuda Mini Drone Setup Guide","description":"","frontmatter":{},"headers":[],"relativePath":"docs/holybro/description.md","filePath":"docs/holybro/description.md"}'),h={name:"docs/holybro/description.md"};function g(u,t,m,f,y,b){return r(),a("div",null,t[0]||(t[0]=[i('<h1 id="garuda-mini-drone-setup-guide" tabindex="-1">Garuda Mini Drone Setup Guide <a class="header-anchor" href="#garuda-mini-drone-setup-guide" aria-label="Permalink to &quot;Garuda Mini Drone Setup Guide&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><div class="margin"><p> The Garuda Mini is a versatile and robust drone platform designed for various applications, including aerial photography, surveying, and research. This quadcopter features an Express LRS (Long Range System) for extended communication capabilities, ensuring reliable control even at significant distances. </p><p> Equipped with a Pixhawk 6C X500 V2 flight controller, the X500 offers advanced autonomous flight features and supports various flight modes, making it suitable for both beginners and experienced pilots. The telemetry system enhances data transmission between the drone and the ground station, providing real-time updates on flight status and telemetry data. </p><p> The drone also incorporates the M9 GPS module, which ensures accurate positioning and navigation. With its durable construction and customizable payload options, the Garuda Mini is an excellent choice for those looking to leverage drone technology for a wide range of applications. </p></div><h2 id="payload-capacity" tabindex="-1">Payload Capacity <a class="header-anchor" href="#payload-capacity" aria-label="Permalink to &quot;Payload Capacity&quot;">​</a></h2><ul><li><strong>Maximum Payload</strong>: Up to 1 kg</li></ul><h2 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h2><p><img src="'+o+'" alt="Garuda Mini Drone"></p><h2 id="flight-time" tabindex="-1">Flight Time <a class="header-anchor" href="#flight-time" aria-label="Permalink to &quot;Flight Time&quot;">​</a></h2><ul><li><strong>Maximum Flight Time</strong>: 30 Minutes.</li></ul><h2 id="application" tabindex="-1">Application <a class="header-anchor" href="#application" aria-label="Permalink to &quot;Application&quot;">​</a></h2><p>The Garuda Mini is ideal for applications such as research, educational training, professional mapping, advanced surveillance, and payload transportation tasks. Its modular and open-source design allows easy customization for specific project needs.</p><h2 id="components-used" tabindex="-1">Components Used <a class="header-anchor" href="#components-used" aria-label="Permalink to &quot;Components Used&quot;">​</a></h2><ul><li><strong>1. Flight Controller :</strong> <a href="https://holybro.com/products/pixhawk-6c" target="_blank" rel="noreferrer">Pixhawk 6C X500 V2</a></li></ul><div style="display:flex;align-items:center;"><div style="flex:1;"><p> The Holybro Pixhawk 6C X500 V2 is a high-performance flight controller designed for demanding drone applications. Featuring a robust and versatile design, it integrates advanced flight control algorithms and a range of connectivity options into a single unit. This flight controller is ideal for both professional and hobbyist use, providing reliable and precise control for a variety of UAV platforms. </p></div><div style="flex:1;text-align:right;"><img src="'+n+'" alt="Holybro Pixhawk 6X" width="150" style="margin-left:20px;"></div></div><h3 id="key-features" tabindex="-1"><strong>Key Features:</strong> <a class="header-anchor" href="#key-features" aria-label="Permalink to &quot;**Key Features:**&quot;">​</a></h3><ul><li><strong>Advanced Processor</strong>: Equipped with a powerful ARM Cortex-M7 processor for efficient and responsive flight control.</li><li><strong>Multi-Sensor Suite</strong>: Integrates high-precision sensors including accelerometers, gyroscopes, and magnetometers for accurate stabilization.</li><li><strong>Connectivity Options</strong>: Supports multiple communication protocols such as UART, I2C, and CAN for versatile integration with various peripherals.</li><li><strong>Flight Software Compatibility</strong>: Compatible with popular flight control software like PX4 and ArduPilot for customizable and flexible operation.</li><li><strong>Built-in Redundancy</strong>: Includes features for system redundancy and fail-safes to enhance flight safety and reliability.</li><li><strong>Compact and Durable</strong>: Designed with a compact form factor and robust build quality, making it suitable for various drone applications and environments.</li></ul><br><ul><li><strong>2. GPS :</strong> <a href="https://holybro.com/products/m9n-gps" target="_blank">ublox M9N</a></li></ul><div style="display:flex;align-items:center;" class="margin"><div style="flex:1;"><p> The M9N GPS utilizes the u-blox M9N multi-constellation GNSS receiver, capable of concurrently tracking GPS, Galileo, GLONASS, and BeiDou thanks to its multi-band RF front-end. It includes an IST8310 compass, tricolored LED indicator, buzzer, safety switch, and three connector options. The module operates at a baud rate of 115200 (previously 38400). Its high-gain 25 x 25 mm² patch antenna offers excellent performance with an omnidirectional radiation pattern for flexible installation, plus active circuitry and a rechargeable backup battery for warm starts. </p></div><div style="flex:1;text-align:right;"><img src="'+s+'" alt="GPS" width="300" style="margin-left:20px;"></div></div><br><ul><li><strong>3. Receiver :</strong> <a href="https://www.radiomasterrc.com/products/er6-2-4ghz-elrs-pwm-receiver" target="_blank">ER6 2.4GHz ELRS PWM Receiver</a></li></ul><div style="display:flex;align-items:center;" class="margin"><div style="flex:1;"><p> The RadioMaster ER series PWM receivers utilize the ExpressLRS system for exceptional performance, reliability, and ultra-long range. The ER6 model, designed for fixed-wing users, drives up to 6 servos and features built-in voltage telemetry with automatic detection. It includes a 4-wire CRSF interface for easy telemetry expansion and a dual-antenna design with up to 100mW telemetry power, all housed in a durable one-piece molded shell. </p></div><div style="flex:1;text-align:right;"><img src="'+l+'" alt="Receiver" width="250" style="margin-left:20px;"></div></div><table tabindex="0"><thead><tr><th>Specification</th><th>Details</th></tr></thead><tbody><tr><td><strong>Item</strong></td><td>ER6 2.4GHz ELRS PWM Receiver</td></tr><tr><td><strong>Power Supply</strong></td><td>DC 4.5 - 8.4V</td></tr><tr><td><strong>Antenna Type</strong></td><td>20 cm high sensitivity dual antenna</td></tr><tr><td><strong>Wireless Protocol</strong></td><td>ExpressLRS 3.3.0 pre-installed</td></tr><tr><td><strong>Output Channel</strong></td><td>6CH PWM</td></tr><tr><td><strong>Serial Output</strong></td><td>CRSF / Sbus</td></tr><tr><td><strong>Telemetry Power</strong></td><td>Maximum 100mW (LUA Adjustable)</td></tr><tr><td><strong>Battery Voltage Detection Range</strong></td><td>DC 4.0 - 35V</td></tr><tr><td><strong>Bus Interface</strong></td><td>CRSF</td></tr><tr><td><strong>Weight</strong></td><td>14.5 grams</td></tr><tr><td><strong>Dimensions</strong></td><td>43 x 25 x 15 mm</td></tr></tbody></table><br><ul><li><strong>4. Telemetry :</strong> <a href="https://holybro.com/products/sik-telemetry-radio-v3" target="_blank">SiK Telemetry Radio V3</a></li></ul><div style="display:flex;align-items:center;" class="margin"><div style="flex:1;"><p> The Holybro SiK Telemetry Radio is a compact and affordable open-source platform that typically offers over 300m range, extendable to several kilometers with a patch antenna. It’s plug-and-play compatible with Pixhawk 6C X500 V2 and other flight controllers, simplifying telemetry connections with autopilots. Designed for MAVLink packets, it integrates with Mission Planner, Ardupilot, QGroundControl, and PX4 Autopilot. Available in 915MHz or 433MHz, choose the appropriate model for your region. </p></div><div style="flex:1;text-align:right;"><img src="'+d+'" alt="Telemetry" width="350" style="margin-left:20px;"></div></div><br><ul><li><strong>5. Motors :</strong> <a href="https://robu.in/product/holybro-s500-v2-motor-2216-920kv-cw/" target="_blank">Holybro S500 V2 Motor 2216-920KV-CW</a></li></ul><div style="display:flex;align-items:center;"><div style="flex:1;"><p> The Holybro S500 V2 Motor 2216-920KV-CW enhances drone performance with its powerful 920KV rating and counter-clockwise rotation for stable flight. Optimized for efficiency and minimal vibrations, this durable motor ensures longer flight times. Its standard mounting pattern allows for easy installation, making it compatible with various multirotor setups. Elevate your aerial experience with Holybro’s reliability. </p></div><div style="flex:1;text-align:right;"><img src="'+c+`" alt="Motors" width="250" style="margin-left:40px;"></div></div><br><ul><li><strong>Batteries :</strong> <a href="https://robu.in/product/bonka-5200mah-35c-3s-lithium-polymer-battery-pack/
" target="_blank">Bonka 11.1V 5200mAh 35C 3S Lithium Polymer Battery</a></li></ul><div style="display:flex;justify-content:space-between;align-items:flex-start;"><div style="flex:1;padding-right:20px;"><table><tr><th>Attribute</th><th>Details</th></tr><tr><td>Model</td><td>5200mAh-3S-35</td></tr><tr><td>Capacity</td><td>5200 mAh</td></tr><tr><td>Voltage</td><td>11.1V</td></tr><tr><td>Weight</td><td>360.0g</td></tr><tr><td>Brand</td><td>Bonka Battery</td></tr></table></div><div style="flex:1;text-align:right;"><img src="`+p+'" alt="Bonka Battery" width="100%" height="20%" style="border-radius:20px;"></div></div><h2 id="schematic" tabindex="-1">Schematic <a class="header-anchor" href="#schematic" aria-label="Permalink to &quot;Schematic&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>Pixhawk Pin</strong></th><th><strong>Sensor Pin</strong></th><th><strong>Function</strong></th></tr></thead><tbody><tr><td>Power1</td><td>Holybro PM02(Buck)</td><td>Power Supply 5V and 12V</td></tr><tr><td>GPS2</td><td>M9N GPS</td><td>GPS/Compass/Arming Check</td></tr><tr><td>Telem1</td><td>SiK Telemetry Radio</td><td>Drone data to Laptop</td></tr><tr><td>Telem2</td><td>Express LRS 6</td><td>Radio Communication</td></tr><tr><td>I/O PWM OUT</td><td>PWM Module</td><td>Moter Speed Control</td></tr></tbody></table>',34)]))}const w=e(h,[["render",g]]);export{x as __pageData,w as default};
