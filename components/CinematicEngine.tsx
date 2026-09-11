"use client";

import { useEffect } from "react";

/**
 * Moteur de scroll cinématique — même logique que la choreo "Mostar" :
 * - un scroll cible (targetScroll) est lissé vers une valeur affichée
 *   (smoothScroll) par interpolation linéaire (lerp) chaque frame ;
 * - le pointeur est lissé de la même façon pour un léger parallax ;
 * - chaque élément a une "apparentTop" (sa position absolue moins le
 *   scroll lissé) convertie en progression 0→1 via smoothstep, qui pilote
 *   ensuite opacité / translation / échelle / flou / rideau via variables
 *   CSS lues dans globals.css (.reveal, .reveal-img, .curtain) ;
 * - la boucle ne tourne que tant que le lissage n'a pas rattrapé sa cible.
 *
 * Ce composant ne rend rien : il attache juste le comportement au DOM
 * après montage. Placez-le une seule fois, en haut de la page.
 */
export default function CinematicEngine() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const state = {
      targetScroll: window.scrollY,
      smoothScroll: window.scrollY,
      targetMouseX: 0,
      targetMouseY: 0,
      mouseX: 0,
      mouseY: 0,
      rafPending: false,
    };

    const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
    const smoothstep = (e0: number, e1: number, v: number) => {
      const x = clamp((v - e0) / (e1 - e0));
      return x * x * (3 - 2 * x);
    };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let revealEls: { el: HTMLElement; top: number }[] = [];
    let imgEls: { el: HTMLElement; top: number }[] = [];
    let curtainEls: { el: HTMLElement; top: number }[] = [];

    function cacheOffsets() {
      const scrollNow = window.scrollY;
      revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal")).map(
        (el) => ({ el, top: el.getBoundingClientRect().top + scrollNow })
      );
      imgEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal-img")).map(
        (el) => ({ el, top: el.getBoundingClientRect().top + scrollNow })
      );
      curtainEls = Array.from(document.querySelectorAll<HTMLElement>(".curtain")).map(
        (el) => ({ el, top: el.getBoundingClientRect().top + scrollNow })
      );
    }

    function requestTick() {
      if (!state.rafPending) {
        state.rafPending = true;
        requestAnimationFrame(update);
      }
    }

    function update() {
      state.rafPending = false;
      const vh = window.innerHeight;
      const reduced = reduceMotion.matches;

      if (reduced) {
        state.smoothScroll = state.targetScroll;
        state.mouseX = 0;
        state.mouseY = 0;
      } else {
        state.smoothScroll = lerp(state.smoothScroll, state.targetScroll, 0.09);
        if (Math.abs(state.smoothScroll - state.targetScroll) < 0.08) {
          state.smoothScroll = state.targetScroll;
        }
        state.mouseX = lerp(state.mouseX, state.targetMouseX, 0.1);
        state.mouseY = lerp(state.mouseY, state.targetMouseY, 0.1);
      }

      revealEls.forEach(({ el, top }) => {
        const apparentTop = top - state.smoothScroll;
        const progress = reduced ? 1 : smoothstep(vh * 1.05, vh * 0.38, apparentTop);
        el.style.setProperty("--op", progress.toFixed(3));
        el.style.setProperty("--ty", `${lerp(72, 0, progress).toFixed(2)}px`);
        el.style.setProperty("--rscale", lerp(0.94, 1, progress).toFixed(4));
        el.style.setProperty("--rblur", `${lerp(9, 0, progress).toFixed(2)}px`);
      });

      imgEls.forEach(({ el, top }) => {
        const apparentTop = top - state.smoothScroll;
        const progress = reduced ? 1 : smoothstep(vh * 1.1, vh * 0.3, apparentTop);
        el.style.setProperty("--imgscale", (1.22 - progress * 0.22).toFixed(4));
      });

      curtainEls.forEach(({ el, top }) => {
        const apparentTop = top - state.smoothScroll;
        const progress = reduced ? 1 : smoothstep(vh * 1.0, vh * 0.2, apparentTop);
        el.style.setProperty("--curtain", `${(100 - progress * 100).toFixed(2)}%`);
        el.style.setProperty("--op2", progress.toFixed(3));
      });

      const leaf = document.querySelector<HTMLElement>(".hero-leaf");
      if (leaf && !reduced) {
        leaf.style.transform = `translate3d(${(state.mouseX * 46).toFixed(2)}px, ${(
          state.mouseY * 32
        ).toFixed(2)}px, 0)`;
      }

      const needsMore =
        !reduced &&
        (Math.abs(state.smoothScroll - state.targetScroll) > 0.08 ||
          Math.abs(state.mouseX - state.targetMouseX) > 0.001 ||
          Math.abs(state.mouseY - state.targetMouseY) > 0.001);
      if (needsMore) requestTick();
    }

    const onScroll = () => {
      state.targetScroll = window.scrollY;
      requestTick();
    };
    const onResize = () => {
      cacheOffsets();
      state.targetScroll = window.scrollY;
      requestTick();
    };
    const onPointerMove = (e: PointerEvent) => {
      state.targetMouseX = e.clientX / window.innerWidth - 0.5;
      state.targetMouseY = e.clientY / window.innerHeight - 0.5;
      requestTick();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Attendre que les images soient chargées pour un cache de position fiable.
    const onLoad = () => {
      cacheOffsets();
      state.targetScroll = window.scrollY;
      state.smoothScroll = window.scrollY;
      requestTick();
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
