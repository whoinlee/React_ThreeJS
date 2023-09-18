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
  CanvasSnipperPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const WebgiViewer = () => {
  const canvasRef = useRef(null);

  const setupViewer = useCallback(async () => {
    /* 
    REF:: https://github.com/pixotronics/webgi-vanilla-starter/blob/master/src/index.ts 
    */
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    await addBasePlugins(viewer);
    await viewer.addPlugin(CanvasSnipperPlugin);
    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await manager.addFromPath("scene-black.glb");
  }, []);

  useEffect( () => {
    setupViewer();
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
};

export default WebgiViewer;
