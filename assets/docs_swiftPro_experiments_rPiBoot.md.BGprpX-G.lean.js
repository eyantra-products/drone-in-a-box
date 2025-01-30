import{_ as t,c as o,a2 as r,o as i}from"./chunks/framework.8rFHF1Cf.js";const s="/drone-in-a-box/assets/SwiftPro/rpi-device.png",a="/drone-in-a-box/assets/SwiftPro/rpi-os.png",n="/drone-in-a-box/assets/SwiftPro/rpi-custom.png",h=JSON.parse('{"title":"Swift Pro Experiments","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/swiftPro/experiments/rPiBoot.md","filePath":"docs/swiftPro/experiments/rPiBoot.md"}'),l={name:"docs/swiftPro/experiments/rPiBoot.md"};function p(c,e,d,u,m,f){return i(),o("div",null,e[0]||(e[0]=[r('<h1 id="swift-pro-experiments" tabindex="-1">Swift Pro Experiments <a class="header-anchor" href="#swift-pro-experiments" aria-label="Permalink to &quot;Swift Pro Experiments&quot;">​</a></h1><h2 id="how-to-setup-raspberry-pi-zero-2w" tabindex="-1">How to setup Raspberry Pi zero 2W. <a class="header-anchor" href="#how-to-setup-raspberry-pi-zero-2w" aria-label="Permalink to &quot;How to setup Raspberry Pi zero 2W.&quot;">​</a></h2><ul><li>The Swift Pro features an integrated camera and Raspberry Pi, enabling you to perform various tasks.</li><li>To boot Ubuntu, download the <a href="https://www.raspberrypi.com/software/" target="_blank" rel="noreferrer">Raspberry Pi Imager</a>.</li><li>You will need an 8/16/32/64 GB SD card.</li><li>Connect the SD card to your PC using an SD card reader.</li><li>Format the SD card using your file manager to delete all content, then open the Raspberry Pi Imager.</li></ul><p><strong>Steps to Boot Ubuntu</strong>:</p><ol><li>Select Device: <strong>RASPBERRY PI ZERO 2 W</strong>.</li></ol><img src="'+s+'" alt="rpi-device" width="80%" style="margin-left:20px;"><ol start="2"><li>Choose OS: <strong>Other general-purpose OS</strong> &gt; <strong>Ubuntu</strong> &gt; <strong>Ubuntu Server 22.04.5 LTS (64-bit)</strong>.</li></ol><img src="'+a+'" alt="rpi-os" width="80%" style="margin-left:20px;"><ol start="3"><li>Choose Storage: Select the appropriate storage.</li><li>Press Next, then click on the Edit Settings button.</li><li>Set Hostname: <code>swiftPro</code> (or any name you prefer).</li><li>Set Username: <code>swiftPro</code> (or any name you prefer).</li><li>Set Password: <code>swift123</code> (or any password you prefer).</li><li>Set SSID: Your <code>swiftPro</code>.</li><li>Set Password: <code>swift123</code>.</li><li>Go to services and tick <code>Enable SSH</code> and choose <code>Use password authentication</code>.</li><li>Press <code>save</code> button -&gt; <code>Yes</code> t</li></ol><img src="'+n+'" alt="rpi-custom" width="80%" style="margin-left:20px;"><ol start="12"><li>Enter the system Password if asked and wait until the process is complete.</li></ol><p>The boot process is complete. We chose Ubuntu 22 to facilitate ROS2 operations.</p>',12)]))}const g=t(l,[["render",p]]);export{h as __pageData,g as default};
