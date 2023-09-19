import React from "react";
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef
} from 'react';
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../util/scrollAnimation';


gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);
  const canvasContainerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      canvasContainerRef.current.style.pointerEvents = "all";
      props.contentRef.current.style.opacity = "0";
      gsap.to(positionRef, {
        x: 13.04,
        y: 13.04,
        z: 13.04,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        }
      });

      gsap.to(targetnRef, {
        x: 0.11,
        y: 0.0,
        z: 0.0,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        }
      });

      viewerRef.scene.activeCamera.setCameraOptions ({controlsEnabled:true});
    }
  }));

  const memoizedScrollAnimation = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) scrollAnimation(position, target, onUpdate);
  }, []);

  const setupViewer = useCallback(async () => {
    /* 
    REF:: https://github.com/pixotronics/webgi-vanilla-starter/blob/master/src/index.ts 
    */
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = await viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    setViewerRef(viewer);
    setCameraRef(camera);
    setPositionRef(position);
    setTargetRef(target);

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32))
    // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm));  //-- hide topNav
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin)
    await viewer.addPlugin(SSRPlugin)
    await viewer.addPlugin(SSAOPlugin)
    await viewer.addPlugin(BloomPlugin)

    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await manager.addFromPath("scene-black.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true; //???//
    viewer.scene.activeCamera.setCameraOptions({
      controlsEnabled: false
    });

    window.scrollTo(0, 0);

    let needsUpdate = true;
    const onUpdate = () => {
      //-- camera and viewer need to be updated
      needsUpdate = true;
      viewer.setDirty();
    }
    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memoizedScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect( () => {
    setupViewer();
  }, []);

  return (
    <div ref={canvasContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
});

export default WebgiViewer;
