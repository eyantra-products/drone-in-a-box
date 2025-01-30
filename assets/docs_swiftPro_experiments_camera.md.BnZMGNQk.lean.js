import{_ as s,c as e,a2 as n,o as i}from"./chunks/framework.8rFHF1Cf.js";const o="/drone-in-a-box/assets/SwiftPro/raspi-config.png",t="/drone-in-a-box/assets/SwiftPro/interface-option.png",p="/drone-in-a-box/assets/SwiftPro/Legacy-camera-option.png",r="/drone-in-a-box/assets/SwiftPro/spi-option.png",l="/drone-in-a-box/assets/SwiftPro/i2c-option.png",c="/drone-in-a-box/assets/SwiftPro/finish-option.png",d="/drone-in-a-box/assets/SwiftPro/reboot.png",y=JSON.parse('{"title":"To set the PiCamera on Ubuntu 22.04","description":"","frontmatter":{},"headers":[],"relativePath":"docs/swiftPro/experiments/camera.md","filePath":"docs/swiftPro/experiments/camera.md"}'),h={name:"docs/swiftPro/experiments/camera.md"};function u(g,a,m,b,f,v){return i(),e("div",null,a[0]||(a[0]=[n('<h1 id="to-set-the-picamera-on-ubuntu-22-04" tabindex="-1">To set the PiCamera on Ubuntu 22.04 <a class="header-anchor" href="#to-set-the-picamera-on-ubuntu-22-04" aria-label="Permalink to &quot;To set the PiCamera on Ubuntu 22.04&quot;">​</a></h1><hr><ul><li>🔗The refernce is take from the <a href="https://www.youtube.com/watch?v=va7o7wzhEE4&amp;t=49s" target="_blank" rel="noreferrer">gaseoustortoise</a>.</li><li>This document is made for ros2 humble.</li><li>Ensure that system has internet connection.</li><li>Assuming <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html" target="_blank" rel="noreferrer">ROS2 humble</a> is already downloaded.</li><li>Make a laptop Hotspot name <code>swiftPro</code> and set password to <code>swift123</code>.</li><li>On the raspberry Pi connect it to screen login using the credentials that we set during setup.</li><li>Ensure it is connected to hotspot and get the wlan0: inet address eg. <code>192.168.0.15</code>.</li><li>Do SSH <code>ssh swiftPro@IP-ADDRESS</code> and enter password <code>swift123</code> in another system which is connected to the swiftPro hotspot.</li><li>Run the below commnads.</li></ul><h2 id="_1-update-and-upgarde-the-system" tabindex="-1"><strong>1. Update and Upgarde the system</strong> <a class="header-anchor" href="#_1-update-and-upgarde-the-system" aria-label="Permalink to &quot;**1. Update and Upgarde the system**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt update &amp;&amp; sudo apt upgrade</span></span></code></pre></div><h2 id="_2-install-reqired-library-for-raspberrypi-video-for-linux-and-ros-humble-camera" tabindex="-1"><strong>2. Install reqired library for raspberryPi, video for Linux and ros- humble camera</strong> <a class="header-anchor" href="#_2-install-reqired-library-for-raspberrypi-video-for-linux-and-ros-humble-camera" aria-label="Permalink to &quot;**2. Install reqired library for raspberryPi, video for Linux and ros- humble camera**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install libraspberrypi-bin v4l-utils ros-humble-v4l2-camera</span></span></code></pre></div><h2 id="_3-install-ros-humble-transport-plugin" tabindex="-1"><strong>3. Install ros humble transport plugin</strong> <a class="header-anchor" href="#_3-install-ros-humble-transport-plugin" aria-label="Permalink to &quot;**3. Install ros humble transport plugin**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install ros-humble-image-transport-plugin</span></span></code></pre></div><h2 id="_4-if-you-are-some-another-user-or-root-user-check-you-have-camera-and-video-access" tabindex="-1"><strong>4. If you are some another user or root user check you have camera and video access</strong> <a class="header-anchor" href="#_4-if-you-are-some-another-user-or-root-user-check-you-have-camera-and-video-access" aria-label="Permalink to &quot;**4. If you are some another user or root user check you have camera and video access**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>groups</span></span></code></pre></div><ul><li>After listing you will see some list on screen ensure that <strong>video</strong> is present, if not present run the below command.</li></ul><h2 id="_5-if-group-does-not-have-video-then-run-thos-command-optional" tabindex="-1"><strong>5. If group does not have <em>video</em> then run thos command (Optional)</strong> <a class="header-anchor" href="#_5-if-group-does-not-have-video-then-run-thos-command-optional" aria-label="Permalink to &quot;**5. If group does not have *video* then run thos command (Optional)**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo usermod -aG video swiftPro</span></span></code></pre></div><ul><li>Ensure the <strong>video</strong> is present in group. If your username is different then then use that name for swiftPro drone model username is swiftPro.</li></ul><h2 id="_6-download-raspberry-pi-congigurator-tool-to-enable-services" tabindex="-1"><strong>6. Download raspberry Pi congigurator tool to enable services</strong>* <a class="header-anchor" href="#_6-download-raspberry-pi-congigurator-tool-to-enable-services" aria-label="Permalink to &quot;**6. Download raspberry Pi congigurator tool to enable services***&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install raspi-config</span></span></code></pre></div><h2 id="_7-open-raspberry-pi-configuratior" tabindex="-1"><strong>7. open raspberry Pi configuratior</strong> <a class="header-anchor" href="#_7-open-raspberry-pi-configuratior" aria-label="Permalink to &quot;**7. open raspberry Pi configuratior**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo raspi-config</span></span></code></pre></div><ul><li><strong>8. Enable legacy camera option SPI and I2C communication prototcol</strong></li><li>Do the below process as shown.</li></ul><p><img src="'+o+'" alt="raspi-config"></p><p><img src="'+t+'" alt="interface-option"></p><p><img src="'+p+'" alt="Legacy-camera option"></p><p><img src="'+r+'" alt="spi-option"></p><p><img src="'+l+'" alt="i2c-option"></p><p><img src="'+c+'" alt="finish-option"></p><p><img src="'+d+`" alt="reboot"></p><h2 id="_9-check-the-camera-is-properly-connected" tabindex="-1"><strong>9. Check the camera is properly connected</strong> <a class="header-anchor" href="#_9-check-the-camera-is-properly-connected" aria-label="Permalink to &quot;**9. Check the camera is properly connected**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vcgencmd get_camera</span></span></code></pre></div><ul><li><code># supported=1 dected=1 , libcamera interfaces=0 this should be the output.</code></li></ul><h2 id="_10-source-the-ros2-humble-bin-path" tabindex="-1"><strong>10. Source the ros2 humble bin path</strong> <a class="header-anchor" href="#_10-source-the-ros2-humble-bin-path" aria-label="Permalink to &quot;**10. Source the ros2 humble bin path**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>source /opt/ros/humble/setup.bash</span></span></code></pre></div><h2 id="_11-run-the-ros-node-for-using-video-for-linux" tabindex="-1"><strong>11. Run the ROS node for using video for Linux</strong> <a class="header-anchor" href="#_11-run-the-ros-node-for-using-video-for-linux" aria-label="Permalink to &quot;**11. Run the ROS node for using video for Linux**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ros2 run v4l2_camera v4l2_camera_node --ros-args -p image_size:=&quot;[640,480]&quot;</span></span></code></pre></div><ul><li>There should be some warning and errors you can safely ignore that as output is alreading publishing the sensor_msg.</li></ul><h2 id="_13-view-output" tabindex="-1"><strong>13. View Output</strong> <a class="header-anchor" href="#_13-view-output" aria-label="Permalink to &quot;**13. View Output**&quot;">​</a></h2><ul><li>Make a file in a other system which has GUI and connect to swiftPro</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nano videoSubscriber.py</span></span></code></pre></div><ul><li>write or copy paste the code given below in videoSubscriber.py</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import rclpy</span></span>
<span class="line"><span>from rclpy.node import Node</span></span>
<span class="line"><span>from sensor_msgs.msg import Image, CameraInfo</span></span>
<span class="line"><span>from cv_bridge import CvBridge</span></span>
<span class="line"><span>import cv2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CameraSubscriber(Node):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        super().__init__(&#39;camera_subscriber&#39;)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # Create a CvBridge object to convert ROS messages to OpenCV images</span></span>
<span class="line"><span>        self.bridge = CvBridge()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # Subscribe to the /image_raw topic to get raw images</span></span>
<span class="line"><span>        self.image_sub = self.create_subscription(</span></span>
<span class="line"><span>            Image,</span></span>
<span class="line"><span>            &#39;/image_raw&#39;,</span></span>
<span class="line"><span>            self.image_callback,</span></span>
<span class="line"><span>            10</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # Subscribe to the /camera_info topic to get camera calibration data</span></span>
<span class="line"><span>        self.camera_info_sub = self.create_subscription(</span></span>
<span class="line"><span>            CameraInfo,</span></span>
<span class="line"><span>            &#39;/camera_info&#39;,</span></span>
<span class="line"><span>            self.camera_info_callback,</span></span>
<span class="line"><span>            10</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        self.camera_info = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def image_callback(self, msg):</span></span>
<span class="line"><span>        # Convert ROS Image message to OpenCV image</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            cv_image = self.bridge.imgmsg_to_cv2(msg, desired_encoding=&#39;bgr8&#39;)</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            # Display the image in an OpenCV window</span></span>
<span class="line"><span>            cv2.imshow(&quot;Camera Feed&quot;, cv_image)</span></span>
<span class="line"><span>            cv2.waitKey(1)  # Wait for 1 ms to display the image</span></span>
<span class="line"><span>        except Exception as e:</span></span>
<span class="line"><span>            self.get_logger().error(f&quot;Error converting image: {e}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def camera_info_callback(self, msg):</span></span>
<span class="line"><span>        # Store the camera info (this is for debugging or future use)</span></span>
<span class="line"><span>        self.camera_info = msg</span></span>
<span class="line"><span>        self.get_logger().info(f&quot;Camera Info received: {msg}&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main(args=None):</span></span>
<span class="line"><span>    rclpy.init(args=args)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    camera_subscriber = CameraSubscriber()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rclpy.spin(camera_subscriber)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Destroy the node explicitly (optional but good practice)</span></span>
<span class="line"><span>    camera_subscriber.destroy_node()</span></span>
<span class="line"><span>    rclpy.shutdown()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><ul><li>Save it using <code>ctrl + x</code> -&gt; <code>Y</code> -&gt; <code>enter</code>.</li></ul><h2 id="_14-install-dependancies" tabindex="-1"><strong>14. Install dependancies</strong> <a class="header-anchor" href="#_14-install-dependancies" aria-label="Permalink to &quot;**14. Install dependancies**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip3 install opencv-python cv-bridge rclpy sensor-msgs</span></span></code></pre></div><h2 id="_15-run-the-file" tabindex="-1"><strong>15. Run the file</strong> <a class="header-anchor" href="#_15-run-the-file" aria-label="Permalink to &quot;**15. Run the file**&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python3 videoSubscriber.py</span></span></code></pre></div><ul><li>You can see the window pop up showing camera feed.</li></ul>`,46)]))}const k=s(h,[["render",u]]);export{y as __pageData,k as default};
