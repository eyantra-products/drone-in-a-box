import{_ as r}from"./chunks/cellular.XLlbBy-c.js";import{_ as n,c as s,a0 as h,o as l}from"./chunks/framework.E9geiPbv.js";const p="/drone-in-a-box/assets/boxer/binding.png",c="/drone-in-a-box/assets/boxer/TXPassword.png",d="/drone-in-a-box/assets/boxer/TXLogin.png",e="/drone-in-a-box/assets/boxer/RX-TXBinding.png",u="/drone-in-a-box/assets/boxer/TXReboot.png",g="/drone-in-a-box/assets/boxer/ELRSNano.gif",a="/drone-in-a-box/assets/boxer/RXPassword.png",o="/drone-in-a-box/assets/boxer/RXLogin.png",i="/drone-in-a-box/assets/boxer/RXReboot.png",m="/drone-in-a-box/assets/boxer/ELRSPWM.gif",q=JSON.parse('{"title":"How To Setup Radio Master for First time","description":"","frontmatter":{},"headers":[],"relativePath":"docs/RadioMaster/keyBinding.md","filePath":"docs/RadioMaster/keyBinding.md"}'),b={name:"docs/RadioMaster/keyBinding.md"};function f(S,t,x,w,R,P){return l(),s("div",null,t[0]||(t[0]=[h('<h1 id="how-to-setup-radio-master-for-first-time" tabindex="-1">How To Setup Radio Master for First time <a class="header-anchor" href="#how-to-setup-radio-master-for-first-time" aria-label="Permalink to &quot;How To Setup Radio Master for First time&quot;">​</a></h1><ul><li>Note: This step is optional RadioMaster&#39;s Phrase binding is already done.</li></ul><h2 id="what-is-binding-of-receiver-and-transmitter" tabindex="-1">What is Binding of Receiver and Transmitter ? <a class="header-anchor" href="#what-is-binding-of-receiver-and-transmitter" aria-label="Permalink to &quot;What is Binding of Receiver and Transmitter ?&quot;">​</a></h2><p>The RadioMaster Boxer (Transmitter) should be properly connected with the corresponding ExpressLRS (Receiver). To establish communication between them, a binding process is required. This ensures that the transmitter and receiver can communicate effectively during operation.</p><h2 id="kit-setup" tabindex="-1">Kit Setup. <a class="header-anchor" href="#kit-setup" aria-label="Permalink to &quot;Kit Setup.&quot;">​</a></h2><p>In Kit there are three Drones out of which two drones has <a href="https://geprc.com/product/geprc-elrs-nanose-receiver/" target="_blank" rel="noreferrer">GEPRC ELRS NanoSE Receiver</a> and Garuda Mini has <a href="https://www.radiomasterrc.com/products/er6-2-4ghz-elrs-pwm-receiver" target="_blank" rel="noreferrer">ER6 2.4GHz ELRS PWM Receiver</a> and one RadioMaster Boxer for which we have to set the binding so that it should not connect the any other receiver.</p><p>Since we have one Transmitter and three diferent receiver with three different drones we will set same binding Phrase so that it will be easy to use.</p><h2 id="radiomaster-boxer-binding-setup" tabindex="-1">RadioMaster Boxer Binding Setup <a class="header-anchor" href="#radiomaster-boxer-binding-setup" aria-label="Permalink to &quot;RadioMaster Boxer Binding Setup&quot;">​</a></h2><h3 id="step-1-power-on-the-radiomaster-boxer" tabindex="-1">Step 1: Power On the RadioMaster Boxer <a class="header-anchor" href="#step-1-power-on-the-radiomaster-boxer" aria-label="Permalink to &quot;Step 1: Power On the RadioMaster Boxer&quot;">​</a></h3><ul><li><p>Press and hold the power button to turn on the RadioMaster Boxer.</p><p><img src="'+r+'" alt="RadioMaster"></p></li></ul><h3 id="step-2-access-the-system-menu" tabindex="-1">Step 2: Access the System Menu <a class="header-anchor" href="#step-2-access-the-system-menu" aria-label="Permalink to &quot;Step 2: Access the System Menu&quot;">​</a></h3><ul><li><p>Press the <em><code>SYS</code></em> button located on the left side of the transmitter.</p><img src="'+p+'" alt="System Menu" width="100%" style="margin-left:0px;"><p>The system menu will appear on the screen, as shown in Fig 2.</p></li></ul><h3 id="step-3-select-the-expresslrs-option" tabindex="-1">Step 3: Select the <em><code>ExpressLRS</code></em> Option <a class="header-anchor" href="#step-3-select-the-expresslrs-option" aria-label="Permalink to &quot;Step 3: Select the *`ExpressLRS`* Option&quot;">​</a></h3><ul><li><p>Using the scroll wheel, navigate to the <em><code>ExpressLRS</code></em> option and press the center of the wheel to select it.</p><p>The menu will update on the screen, as shown in Fig 3.</p></li></ul><h3 id="step-4-enable-wifi-connectivity" tabindex="-1">Step 4: Enable WiFi Connectivity <a class="header-anchor" href="#step-4-enable-wifi-connectivity" aria-label="Permalink to &quot;Step 4: Enable WiFi Connectivity&quot;">​</a></h3><ul><li><p>Scroll to the <em><code>WiFi Connectivity</code></em> option and press the center of the wheel to select it.</p><p>The menu will update on the screen, as shown in Fig 4.</p></li></ul><h3 id="step-5-turn-on-wifi" tabindex="-1">Step 5: Turn On WiFi <a class="header-anchor" href="#step-5-turn-on-wifi" aria-label="Permalink to &quot;Step 5: Turn On WiFi&quot;">​</a></h3><ul><li><p>Select the <em><code>Enable WiFi</code></em> option to activate the WiFi feature.</p><p>This will enable the WiFi on the transmitter, allowing for configuration. The menu on the screen will update, as shown in Fig 5.</p></li></ul><h3 id="step-6-connect-to-the-expresslrs-hotspot" tabindex="-1">Step 6: Connect to the ExpressLRS Hotspot <a class="header-anchor" href="#step-6-connect-to-the-expresslrs-hotspot" aria-label="Permalink to &quot;Step 6: Connect to the ExpressLRS Hotspot&quot;">​</a></h3><ul><li><p>On your laptop, connect to the <em><code>ExpressLRS TX</code></em> hotspot. The password for the hotspot is <strong><code>expresslrs</code></strong>.</p><img src="'+c+'" alt="TX Password" width="50%" style="margin-left:0px;"></li></ul><h3 id="step-7-access-the-configuration-page" tabindex="-1">Step 7: Access the Configuration Page <a class="header-anchor" href="#step-7-access-the-configuration-page" aria-label="Permalink to &quot;Step 7: Access the Configuration Page&quot;">​</a></h3><ul><li><p>Once connected to the hotspot, open a browser and navigate to <a href="http://10.0.0.1/" target="_blank" rel="noreferrer">http://10.0.0.1/</a>. If the page does not open automatically, manually type the URL in the browser.</p><img src="'+d+'" alt="TX Login Page" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-8-set-the-binding-phrase" tabindex="-1">Step 8: Set the Binding Phrase <a class="header-anchor" href="#step-8-set-the-binding-phrase" aria-label="Permalink to &quot;Step 8: Set the Binding Phrase&quot;">​</a></h3><ul><li><p>In the configuration page, set the Binding Phrase. It is crucial that both the receiver and transmitter are using the same Phrase. The default Phrase is <em><code>eyantra123</code></em>.</p><img src="'+e+'" alt="TX-RX Binding Settings" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-9-save-the-configuration" tabindex="-1">Step 9: Save the Configuration <a class="header-anchor" href="#step-9-save-the-configuration" aria-label="Permalink to &quot;Step 9: Save the Configuration&quot;">​</a></h3><ul><li><p>After ensuring the correct settings, click the <em>Save</em> button.</p><img src="'+u+'" alt="Save and Reboot" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-10-reboot-the-transmitter" tabindex="-1">Step 10: Reboot the Transmitter <a class="header-anchor" href="#step-10-reboot-the-transmitter" aria-label="Permalink to &quot;Step 10: Reboot the Transmitter&quot;">​</a></h3><ul><li><p>Click the <em>Reboot</em> button to apply the settings.</p><p>After rebooting, your transmitter will display the screen shown in Fig 6. Navigate to the <em><code>Exit</code></em> option using the scroll wheel and press the center to confirm. This completes the binding process for the transmitter.</p></li></ul><h2 id="geprc-elrs-nanose-receiver-binding-setup" tabindex="-1">GEPRC ELRS NanoSE Receiver Binding Setup <a class="header-anchor" href="#geprc-elrs-nanose-receiver-binding-setup" aria-label="Permalink to &quot;GEPRC ELRS NanoSE Receiver Binding Setup&quot;">​</a></h2><h3 id="step-1-power-on-the-drone" tabindex="-1">Step 1: Power On the Drone <a class="header-anchor" href="#step-1-power-on-the-drone" aria-label="Permalink to &quot;Step 1: Power On the Drone&quot;">​</a></h3><div style="display:flex;align-items:center;"><p style="flex:1;">Wait for some minutes to go into wifi mode, it will blink very fast that notifies it has gone to wifi mode.</p><img src="'+g+'" alt="RadioMaster Binding Process" style="max-width:30%;height:auto;border-radius:15px;"></div><h3 id="step-2-connect-to-hotspot" tabindex="-1">Step 2: Connect to Hotspot <a class="header-anchor" href="#step-2-connect-to-hotspot" aria-label="Permalink to &quot;Step 2: Connect to Hotspot&quot;">​</a></h3><ul><li><p>On your laptop, connect to the <em><code>ExpressLRS RX</code></em> hotspot. The password for the hotspot is <strong><code>expresslrs</code></strong>.</p><img src="'+a+'" alt="RX Password" width="50%" style="margin-left:0px;"></li></ul><h3 id="step-3-access-the-configuration-page" tabindex="-1">Step 3: Access the Configuration Page <a class="header-anchor" href="#step-3-access-the-configuration-page" aria-label="Permalink to &quot;Step 3: Access the Configuration Page&quot;">​</a></h3><ul><li><p>Once connected to the hotspot, open a browser and navigate to <a href="http://10.0.0.1/" target="_blank" rel="noreferrer">http://10.0.0.1/</a>. If the page does not open automatically, manually type the URL in the browser.</p><img src="'+o+'" alt="RX Login Page" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-4-set-the-binding-phrase" tabindex="-1">Step 4: Set the Binding Phrase <a class="header-anchor" href="#step-4-set-the-binding-phrase" aria-label="Permalink to &quot;Step 4: Set the Binding Phrase&quot;">​</a></h3><ul><li><p>In the configuration page, set the Binding Phrase. It is crucial that both the receiver and transmitter are using the same Phrase. The default Phrase is <em><code>eyantra123</code></em>.</p><img src="'+e+'" alt="TX-RX Binding Settings" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-5-save-the-configuration" tabindex="-1">Step 5: Save the Configuration <a class="header-anchor" href="#step-5-save-the-configuration" aria-label="Permalink to &quot;Step 5: Save the Configuration&quot;">​</a></h3><ul><li><p>After ensuring the correct settings, click the <em>Save</em> button.</p><img src="'+i+'" alt="Save and Reboot" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-6-reboot-the-transmitter" tabindex="-1">Step 6: Reboot the Transmitter <a class="header-anchor" href="#step-6-reboot-the-transmitter" aria-label="Permalink to &quot;Step 6: Reboot the Transmitter&quot;">​</a></h3><ul><li>Click the <em>Reboot</em> button to apply the settings. The binding of Receiver is done, it will go to normal mode, wait until it again goes in WiFi mode and then restart the drone.</li></ul><h2 id="er6-2-4ghz-elrs-pwm-receiver-binding-setup" tabindex="-1">ER6 2.4GHz ELRS PWM Receiver Binding Setup <a class="header-anchor" href="#er6-2-4ghz-elrs-pwm-receiver-binding-setup" aria-label="Permalink to &quot;ER6 2.4GHz ELRS PWM Receiver Binding Setup&quot;">​</a></h2><h3 id="step-1-power-on-the-drone-1" tabindex="-1">Step 1: Power On the Drone <a class="header-anchor" href="#step-1-power-on-the-drone-1" aria-label="Permalink to &quot;Step 1: Power On the Drone&quot;">​</a></h3><div style="display:flex;align-items:center;"><p style="flex:1;">Wait for some minutes to go into wifi mode, it will blink very fast that notifies it has gone to wifi mode.</p><img src="'+m+'" alt="RadioMaster Binding Process" style="max-width:30%;height:auto;border-radius:15px;"></div><h3 id="step-2-connect-to-hotspot-1" tabindex="-1">Step 2: Connect to Hotspot <a class="header-anchor" href="#step-2-connect-to-hotspot-1" aria-label="Permalink to &quot;Step 2: Connect to Hotspot&quot;">​</a></h3><ul><li><p>On your laptop, connect to the <em><code>ExpressLRS RX</code></em> hotspot. The password for the hotspot is <strong><code>expresslrs</code></strong>.</p><img src="'+a+'" alt="RX Password" width="50%" style="margin-left:0px;"></li></ul><h3 id="step-3-access-the-configuration-page-1" tabindex="-1">Step 3: Access the Configuration Page <a class="header-anchor" href="#step-3-access-the-configuration-page-1" aria-label="Permalink to &quot;Step 3: Access the Configuration Page&quot;">​</a></h3><ul><li><p>Once connected to the hotspot, open a browser and navigate to <a href="http://10.0.0.1/" target="_blank" rel="noreferrer">http://10.0.0.1/</a>. If the page does not open automatically, manually type the URL in the browser.</p><img src="'+o+'" alt="RX Login Page" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-4-set-the-binding-phrase-1" tabindex="-1">Step 4: Set the Binding Phrase <a class="header-anchor" href="#step-4-set-the-binding-phrase-1" aria-label="Permalink to &quot;Step 4: Set the Binding Phrase&quot;">​</a></h3><ul><li><p>In the configuration page, set the Binding Phrase. It is crucial that both the receiver and transmitter are using the same Phrase. The default Phrase is <em><code>eyantra123</code></em>.</p><img src="'+e+'" alt="TX-RX Binding Settings" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-5-save-the-configuration-1" tabindex="-1">Step 5: Save the Configuration <a class="header-anchor" href="#step-5-save-the-configuration-1" aria-label="Permalink to &quot;Step 5: Save the Configuration&quot;">​</a></h3><ul><li><p>After ensuring the correct settings, click the <em>Save</em> button.</p><img src="'+i+'" alt="Save and Reboot" width="100%" style="margin-left:0px;"></li></ul><h3 id="step-6-reboot-the-transmitter-1" tabindex="-1">Step 6: Reboot the Transmitter <a class="header-anchor" href="#step-6-reboot-the-transmitter-1" aria-label="Permalink to &quot;Step 6: Reboot the Transmitter&quot;">​</a></h3><ul><li>Click the <em>Reboot</em> button to apply the settings. The binding of Receiver is done, it will go to normal mode, wait until it again goes in WiFi mode and then restart the drone.</li></ul>',54)]))}const k=n(b,[["render",f]]);export{q as __pageData,k as default};
