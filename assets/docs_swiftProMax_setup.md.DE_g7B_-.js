import{_ as o,a as t,b as r,c as a,d as i}from"./chunks/ctrlF.MEpCKkaa.js";import{_ as l,a as n,b as s,c as d,d as c,e as p,f as h}from"./chunks/moter.Ba4sfMyY.js";import{_ as u,c as m,a0 as g,o as f}from"./chunks/framework.E9geiPbv.js";const _=JSON.parse('{"title":"SwifPro Max Drone Setup Guide","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/swiftProMax/setup.md","filePath":"docs/swiftProMax/setup.md"}'),w={name:"docs/swiftProMax/setup.md"};function b(y,e,S,C,x,P){return f(),m("div",null,e[0]||(e[0]=[g('<h1 id="swifpro-max-drone-setup-guide" tabindex="-1">SwifPro Max Drone Setup Guide <a class="header-anchor" href="#swifpro-max-drone-setup-guide" aria-label="Permalink to &quot;SwifPro Max Drone Setup Guide&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="margin"><p>This guide will walk you through the steps to set up your drone using Ardupilot firmware. The process involves selecting the appropriate firmware, flashing it to your flight controller, and configuring it using Mission Planner.</p></div><h2 id="step-1-choose-firmware-type" tabindex="-1">Step 1: Choose Firmware Type <a class="header-anchor" href="#step-1-choose-firmware-type" aria-label="Permalink to &quot;Step 1: Choose Firmware Type&quot;">​</a></h2><p><strong>Ardupilot Firmware</strong></p><div class="margin"><p>This is a versatile and widely used open-source firmware designed for various types of drones and vehicles. It supports advanced features such as autonomous flight, waypoint navigation, and mission planning. Ardupilot is continuously updated by a dedicated community, ensuring compatibility with a range of hardware and providing robust support for new technologies. To get started, you can easily download the latest firmware version tailored for your flight controller from the official Ardupilot repository.</p></div><ul><li><strong>Custom Ardupilot Firmware</strong></li></ul><div class="margin"> This is also an open-source firmware designed to perform some exceptional task which the standerd firmware cannot perform. This firmware can perform all operations that a standerd firmware has and can also perform FlowHold mode. That&#39;s a addon feature of the custom firmware. This Custom firmware is made form <a href="https://custom.ardupilot.org/add_build" target="_blank">Ardupilot Custom Firmware.</a><br> If we want to fly drone in FlowHold Mode. </div><table tabindex="0"><thead><tr><th>Feature</th><th>ArduPilot Standard Stable Version</th><th>ArduPilot Custom Version</th></tr></thead><tbody><tr><td>Flowhold Mode</td><td>Not available</td><td>Available</td></tr></tbody></table><h2 id="step-2-choose-flight-controller-type" tabindex="-1">Step 2: Choose Flight Controller Type <a class="header-anchor" href="#step-2-choose-flight-controller-type" aria-label="Permalink to &quot;Step 2: Choose Flight Controller Type&quot;">​</a></h2><p>Select the appropriate flight controller for your drone. Examples include:</p><ul><li>Flywoo 745</li></ul><h2 id="step-3-download-or-build-firmware" tabindex="-1">Step 3: Download or Build Firmware <a class="header-anchor" href="#step-3-download-or-build-firmware" aria-label="Permalink to &quot;Step 3: Download or Build Firmware&quot;">​</a></h2><table tabindex="0"><thead><tr><th>File Type</th><th>Stable Release</th><th>Custom Version</th></tr></thead><tbody><tr><td>Firmware Hex File</td><td><a href="https://firmware.ardupilot.org/Copter/" target="_blank" rel="noreferrer">Download from Ardupilot Firmware</a></td><td><a href="/drone-in-a-box/assets/files/swiftProMaxCustom.hex" download>Download Custom Firmware</a></td></tr><tr><td>Parameter Files</td><td><a href="/drone-in-a-box/assets/files/SwiftProMaxStable.param" download>Download Stable Param</a></td><td><a href="/drone-in-a-box/assets/files/SwiftProMaxCustom.param" download>Download Custom Param</a></td></tr></tbody></table><ul><li><p><strong>If You want to to use flowHold Mode in your drone download the Custom Firmware</strong></p></li><li><p><span class="note">Note: If Drone does not respond properly while flying please use default stable version insted of custom version.</span></p></li><li><p><strong>Download Firmware:</strong> Obtain any of the following file types: <code>.hex</code>, <code>.apj</code>, or <code>.elf</code> from the Ardupilot firmware repository or other sources.</p></li><li><p>Ardupilot provides pre-built open-source binaries in <code>.hex</code>, <code>.elf</code>, and <code>.apj</code> formats.</p></li><li><p>Visit the latest stable version release page, select your flight controller, and download the binary file that matches your preferred boot method. <img src="'+o+'" alt="Stable Dowanlad Process" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"></p></li><li><p>If you download <code>.hex</code> or <code>.elf</code>, you will need to download the <a href="https://www.st.com/en/development-tools/stm32cubeprog.html" target="_blank" rel="noreferrer">STM32 CUBE PROGRAMMER</a> and follow the official documentation to set it up on your device.</p></li><li><p>If you download the <code>.apj</code> file, download <a href="https://ardupilot.org/planner/docs/mission-planner-installation.html" target="_blank" rel="noreferrer">Mission Planner</a> and follow the official documentation for installing the software on your device.</p></li></ul><h2 id="step-4-flash-firmware-to-flight-controller" tabindex="-1">Step 4: Flash Firmware to Flight Controller <a class="header-anchor" href="#step-4-flash-firmware-to-flight-controller" aria-label="Permalink to &quot;Step 4: Flash Firmware to Flight Controller&quot;">​</a></h2><ol><li><p><strong>Using Cube Programmer (<code>.hex</code> or <code>.elf</code>)</strong> After successful setup, open the application and follow the steps outlined below.</p><div class="flex-setup"><p><strong>Step 1:</strong> Press and hold the boot button until the power cable is connected to the PC/laptop.</p><p><strong>Step 2:</strong> Open Cube Programmer and select the USB option. You should see PORT: USB1 in the USB Configuration.</p><span class="note">Note: If USB1 is not detected, repeat Step 1.</span><p><strong>Step 3:</strong> Press the connect button and open the `.hex` or `.elf` file.</p><p><strong>Step 4:</strong> Click the Download button, wait for a successful download, and then disconnect the cable from the PC.</p></div><img src="'+t+'" alt="Cube Programmer Firmware Download Process" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"></li></ol><br><ol start="2"><li><p><strong>Using Mission Planner (<code>.apj</code>)</strong> After successful setup, open the application and follow the steps outlined below.</p><div class="flex-setup"><p><strong>Step 1:</strong> Connect the data cable to the laptop/PC and check if you can see any COM port.</p><p><strong>Step 2:</strong> Click &quot;Initial Setup&quot; in the navigation bar, then select &quot;Install Firmware&quot; and click the &quot;Load custom firmware&quot; link.</p><p><strong>Step 3:</strong> Select the `.apj` file and open it; this will automatically download the firmware.</p></div><p><em>If needed, <a href="https://ardupilot.org/planner/docs/common-loading-firmware-onto-pixhawk.html" target="_blank" rel="noreferrer">refer to Ardupilot for more details</a>.</em></p></li></ol><h2 id="step-5-configure-parameters" tabindex="-1">Step 5: Configure Parameters <a class="header-anchor" href="#step-5-configure-parameters" aria-label="Permalink to &quot;Step 5: Configure Parameters&quot;">​</a></h2><p><strong>Connect to Mission Planner:</strong></p><ul><li>Open Mission Planner.</li><li>Select the COM port at the top right corner and click <strong>Connect</strong>.</li></ul><br><h3 id="_1-set-param-for-stable-firmware" tabindex="-1">1. <strong>Set Param for Stable Firmware</strong> <a class="header-anchor" href="#_1-set-param-for-stable-firmware" aria-label="Permalink to &quot;1. **Set Param for Stable Firmware**&quot;">​</a></h3><ul><li>Select <code>Full Parameter List</code>.</li><li>Click the <strong>Load From File</strong> option on the right side panel.</li><li>use the swiftProMaxStable.param downloaded from above.</li><li>Upload the <code>swiftProMaxStable.param</code> file.</li><li>Click on <code>Write parameter</code> and confirm with &quot;OK&quot; or &quot;YES&quot; for default parameters.</li><li><span class="note">Note: Upload the files and write the parameter 3 times to ensure all the param are successfully set.</span></li><li>press <code>Ctrl+F</code> and press <code>reboot Pixhawk</code>.</li></ul><h3 id="_2-set-param-for-custom-firmware" tabindex="-1">2. <strong>Set Param for Custom Firmware</strong> <a class="header-anchor" href="#_2-set-param-for-custom-firmware" aria-label="Permalink to &quot;2. **Set Param for Custom Firmware**&quot;">​</a></h3><ul><li>Select <code>Full Parameter List</code>.</li><li>Click the <code>Load From File</code> option on the right side panel.</li><li>use the swiftProMaxCustom.param downloaded from above.</li><li>Upload the <code>swiftProMaxCustom.param</code> file.</li><li>Click on <code>Write parameter</code> and confirm with &quot;OK&quot; or &quot;YES&quot; for default parameters.</li><li><span class="note">Note: Upload the files and write the parameter 3 times to ensure all the param are successfully set.</span></li><li>press <code>Ctrl+F</code> and press <code>reboot Pixhawk</code>.</li></ul><h2 id="step-6-calibrate-test-drone" tabindex="-1">Step 6: Calibrate &amp; Test Drone <a class="header-anchor" href="#step-6-calibrate-test-drone" aria-label="Permalink to &quot;Step 6: Calibrate &amp; Test Drone&quot;">​</a></h2><ol><li><strong>Connect to Mission Planner:</strong><ul><li>Open Mission Planner.</li><li>Select the COM port at the top right corner and click <strong>Connect</strong>.</li></ul></li></ol><br><ol start="2"><li><p><strong><a href="https://ardupilot.org/copter/docs/common-accelerometer-calibration.html#id2" target="_blank" rel="noreferrer">Accelerometer Calibration</a></strong></p><ul><li>Click the Setup Icon in the navigation bar.</li><li>Select &quot;Accel Calibration&quot; from the left panel in <strong>Mandatory Hardware</strong>.</li><li>Select &quot;Calibrate Accel&quot; to start the full 3-axis calibration.</li></ul><img src="'+r+'" alt="Accelerometer Calibration" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><div class="margin"><p>Mission Planner will prompt you to place the vehicle on each axis during the calibration. Press any key to indicate that the autopilot is in position and then proceed to the next orientation.</p><strong>The calibration positions are: level, right side, left side, nose down, nose up, and on its back.</strong><p>Proceed through the required positions, using the &quot;Click when Done&quot; button once each position is reached and held still. Upon completion, Mission Planner will display “Calibration Successful!”</p></div></li></ol><br><ol start="3"><li><strong><a href="https://ardupilot.org/copter/docs/common-compass-calibration-in-mission-planner.html" target="_blank" rel="noreferrer">Compass Calibration</a></strong><div class="margin"><p>Select <strong>Compass</strong> from the left panel in <strong>Mandatory Hardware</strong>.</p><p>Untick <strong>Use Compass 2</strong> and <strong>Use Compass 3</strong>.</p><p>Click on the Start Button.</p><p>Hold the vehicle in the air and rotate it so that each side (Nose Up, Nose Down, left, right, top, and bottom) points down towards the Earth for a few seconds. Consider performing a full 360-degree turn with each orientation pointing towards the ground. This may require multiple turns to confirm calibration or to retry if it initially does not pass.</p></div></li></ol><br><ol start="4"><li><strong><a href="https://ardupilot.org/planner/docs/common-radio-control-calibration.html#common-radio-control-calibration" target="_blank" rel="noreferrer">Radio Calibration</a></strong><ul><li>On your RadioMaster, select the Drone Model and ensure it is connected to the drone.</li><li><span class="note"><strong>Note:</strong> Ensure the battery is not connected.</span></li><li>Select &quot;Radio Calibration&quot; from the left panel in <strong>Mandatory Hardware</strong>.</li><li>Move the controller stick; you should see the minimum and maximum levels of RC channels.</li><li>Ensure it is increasing and decreasing according to the stick movements; otherwise, refer to the documentation.</li></ul></li></ol><br><img src="'+l+'" alt="radioCalibration1" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><img src="'+n+'" alt="radioCalibration2" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><img src="'+s+'" alt="radioCalibration3" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><img src="'+d+'" alt="radioCalibration4" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"><br><ol start="5"><li><strong>Flight Mode</strong><ul><li>Select the <code>Flight Modes</code> option in Mandatory Hardware.</li><li>On your Radio Master, there is a second button labeled <code>SB</code> on the top left corner with a tri-state output.</li><li><img src="'+c+'" alt="Flight Mode" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"></li><li>You will see that switching the buttons changes the mode highlighted in green in Mission Planner.</li><li>Select the appropriate mode, or keep it as default. The safest mode is <code>Stabilize</code>.</li></ul></li></ol><br><ol start="6"><li><strong><a href="https://ardupilot.org/copter/docs/connect-escs-and-motors.html" target="_blank" rel="noreferrer">Motor Test</a></strong><ul><li><span class="note"><strong>Note:</strong> Turn off the RC receiver and Remove the Propellers of drone to ensure safety.</span></li><li>In the Optional Hardware section, open &quot;Motor Test.&quot;</li><li>The direction of the propeller is explained in the diagram below.</li><li><img src="'+p+'" alt="Motor Direction Legend" style="max-width:100%;height:auto;border-radius:10px;margin-top:10px;"></li><li>The drone frame type is Betaflight X, so the direction of propellers is shown below.</li><li><img src="'+h+'" alt="Motor Direction" style="max-width:50%;height:50%;border-radius:10px;margin-top:10px;"></li><li>Click the &quot;Test Motor&quot; [<code>option</code>] and ensure the direction mentioned in Mission Planner matches the diagram above.</li></ul></li></ol><h2 id="step-7-rangefinder-and-optical-flow-data" tabindex="-1">Step 7: Rangefinder and Optical Flow Data <a class="header-anchor" href="#step-7-rangefinder-and-optical-flow-data" aria-label="Permalink to &quot;Step 7: Rangefinder and Optical Flow Data&quot;">​</a></h2><ul><li>Go to the Data icon on the navigation bar.</li><li>Click the right arrow and select the status icon as shown in the figure below.</li><li><img src="'+a+'" alt="Status" style="max-width:50%;height:50%;border-radius:10px;margin-top:10px;"></li><li>Check the <code>Rangefinder1</code> value by lifting the drone to a height by hand.</li><li>Also, observe the <code>Sonar</code> value changing as you move your drone.</li><li>In the world map frame at the bottom left, ensure the <code>sat</code> count is more than <code>10</code> if you are flying in PosHold Mode. This requires being in open ground and clear weather to receive a strong <code>GPS</code> signal.</li></ul><h2 id="by-following-this-step-you-can-successfully-setup-your-swiftpromax" tabindex="-1">By following this step you can successfully setup your SwiftProMax. <a class="header-anchor" href="#by-following-this-step-you-can-successfully-setup-your-swiftpromax" aria-label="Permalink to &quot;By following this step you can successfully setup your SwiftProMax.&quot;">​</a></h2><p><strong><span class="note">Note:</span></strong> Always adhere to safety protocols during setup and testing to avoid any damage to your drone or potential injury.</p><ul><li>You can also check all the sensors working correctly after connecting battery in Mission Planner.</li><li>Press <code>Ctrl + F</code> in mission Planner.</li><li>Some Highlighted parts should be Ok and correct before the flight. <img src="'+i+'" alt="ctrlF" style="max-width:100%;height:100%;border-radius:10px;margin-top:10px;"></li></ul><p><strong><span class="note">Note:</span></strong> Always adhere to safety protocols during setup and testing to avoid any damage to your drone or potential injury.</p><h2 id="let-s-understand-the-indepth-parameter-we-set-in-our-swiftpromaxcustom-param-list" tabindex="-1">Let&#39;s understand the indepth parameter we set in our <code>swiftProMaxCustom.param</code> list. <a class="header-anchor" href="#let-s-understand-the-indepth-parameter-we-set-in-our-swiftpromaxcustom-param-list" aria-label="Permalink to &quot;Let&#39;s understand the indepth parameter we set in our `swiftProMaxCustom.param` list.&quot;">​</a></h2><ol><li><strong>Frame Shape</strong></li></ol><ul><li>This parameter Defines the class and type which helps the firmware to set the basics dynamics accourding vehical type and its frame.</li><li>Different types of moter angles in Frame, number of moters defines the dynamics of drone.</li><li>Go to <code>CONFIG</code> --&gt; <code>Full parameter List</code> --&gt; <code>FRAME</code></li><li><code>FRAME_CLASS</code> Value = 1 (Quad)</li><li><code>FRAME_TYPE</code> Value = 12 (BetaFlightX)</li></ul><br><ol start="2"><li><strong>Arming Checks</strong></li></ol><ul><li>This parameter helps to define safety modes for Arming of drone.</li><li>Most of the big drone often has many safety checks, but in this drone since it is small we do not require any arming checks, so disable it.</li><li>Go to <code>CONFIG</code> --&gt; <code>Full parameter List</code> --&gt; <code>ARMING</code></li><li><code>ARMING_CHECK</code> Value = 0 (No Arming Checks required)</li></ul><br><ol start="3"><li><strong>EK3 Sensor Fusion (Extended Kalman Filter)</strong></li></ol><ul><li>An Extended Kalman Filter (EKF) algorithm is used to estimate vehicle position, velocity and angular orientation based on rate gyroscopes, accelerometer, compass, GPS, airspeed and barometric pressure measurements.</li><li>Go to <code>CONFIG</code> --&gt; <code>Full parameter List</code> --&gt; <code>EK3</code> --&gt; <code>EK3_SRC1</code></li><li><code>EK3_SRC1_POSZ</code> Value = 2 (RangeFinder)</li><li><code>EK3_SRC1_VELXY</code> Value = 5 (Opticalflow)</li><li>EKF3 supports in-flight switching of sensors which can be useful for transitioning between GPS and Non-GPS environments. See GPS / Non-GPS Transitions for more details.</li><li>Go to <code>CONFIG</code> --&gt; <code>Full parameter List</code> --&gt; <code>EK3</code> --&gt; <code>EK3_SRC2</code></li><li><code>EK3_SRC1_POSZ</code> Value = 1 (Baro)</li></ul><br><ol start="4"><li><strong>Flight Mode Channel Selection</strong></li></ol><ul><li>The firmware need to know from which channel the different flight mode are switching. So in this case it is swiching from <code>Channel6</code>.</li><li>Go to <code>CONFIG</code> --&gt; <code>Full parameter List</code> --&gt; <code>FLTMODE</code></li><li><code>FLTMODE_CH</code> Value = 6 (Channel6)</li></ul><br><ol start="5"><li><strong>Arming/Disarming</strong></li></ol><ul><li>Setting a button to arm/disarm.</li><li>Go to <code>CONFIG</code> --&gt; <code>Full parameter List</code> --&gt; <code>RC5</code></li><li><code>RC5_OPTION</code> value = 153(ArmDisarm (4.2 and Higher)), it basically means firmware version 4.2.x and above.</li></ul><br><ol start="6"><li><strong>RangeFinder Settings</strong></li></ol><ul><li>This sensor is a replacement for GPS values of z-axis. The drone calculate its height using rangefinder sensor.</li><li>Go to <code>CONFIG</code> --&gt; <code>Full parameter List</code> --&gt; <code>RNGFND1</code></li><li><code>RNGFND1_TYPE</code> value = 16 (VL53L0X or VL53L1X)</li><li><code>RNGFND1_ADDR</code> value = 41 (It uses I2C protocol so we need o specify the address)</li><li><code>RNGFND1_MAX_CM</code> value = 120 (CM)</li><li><code>RNGFND1_MIN_CM</code> value = 5 (CM)</li><li><code>RNGFND1_SCALING</code> value = 1 (m/V)</li></ul><br><ol start="7"><li><strong>Serial Ports</strong></li></ol><ul><li>Go to <code>SETUP</code> --&gt; <code>Mandatory Hardware</code> --&gt;<code>Serial Ports</code></li><li><code>SERIAL PORT2 UART2</code> Speed = 57600 and Protocol = RCIN.</li><li><code>SERIAL PORT4 UART4</code> Speed = 115200 and Protocol = OpticalFlow.</li><li><code>SERIAL PORT6 UART6</code> Speed = 57600 and Protocol = GPS</li><li>All others ports keep the protocol to None.</li></ul><br><ol start="8"><li><strong>Flight Modes</strong></li></ol><ul><li>Depending on the applications we use differnt flight modes.</li><li>Go to <code>SETUP</code> --&gt; <code>Mandatory Hardware</code> --&gt;<code>Flight Modes</code></li><li><code>Flight Mode 1</code> Keep in <code>Stabilize</code> mode.</li><li><code>Flight Mode 4</code> Keep in <code>AltHOLD</code> mode.</li><li><code>Flight Mode 6</code> Keep in <code>PosHOLD</code> mode.</li></ul><h2 id="additional-resources" tabindex="-1">Additional Resources <a class="header-anchor" href="#additional-resources" aria-label="Permalink to &quot;Additional Resources&quot;">​</a></h2><ul><li><a href="https://ardupilot.org/" target="_blank" rel="noreferrer">Ardupilot Documentation</a></li><li><a href="https://ardupilot.org/planner/docs/mission-planner-installation.html" target="_blank" rel="noreferrer">Mission Planner User Guide</a></li><li><a href="https://www.st.com/en/development-tools/stm32cubeprog.html" target="_blank" rel="noreferrer">STM32 Cube Programmer Documentation</a></li></ul><hr>',80)]))}const k=u(w,[["render",b]]);export{_ as __pageData,k as default};
