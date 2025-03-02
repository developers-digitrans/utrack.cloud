import React, { useEffect, useRef } from "react";
import { useTheme } from "../lib/theme";

interface TronLinesProps {
  color?: string;
  darkColor?: string;
  lineWidth?: number;
  speed?: number;
  density?: number;
  opacity?: number;
}

const TronLines: React.FC<TronLinesProps> = ({
  color = "#3b82f6", // Blue color for light theme
  darkColor = "#60a5fa", // Lighter blue for dark theme
  lineWidth = 2,
  speed = 0.7,
  density = 20,
  opacity = 0.25,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let horizontalLines: Line[] = [];
    let verticalLines: Line[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initLines();
    };

    // Line object
    class Line {
      x: number;
      y: number;
      length: number;
      direction: "horizontal" | "vertical";
      speed: number;

      constructor(
        x: number,
        y: number,
        length: number,
        direction: "horizontal" | "vertical",
        speed: number,
      ) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.direction = direction;
        this.speed = speed;
      }

      draw() {
        if (!ctx) return;

        const lineColor = theme === "dark" ? darkColor : color;

        // Create meteor-like glow effect
        const gradient =
          this.direction === "horizontal"
            ? ctx.createLinearGradient(
                this.x,
                this.y,
                this.x + this.length,
                this.y,
              )
            : ctx.createLinearGradient(
                this.x,
                this.y,
                this.x,
                this.y + this.length,
              );

        // Add gradient stops for meteor trail effect
        gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.1, "rgba(255, 255, 255, 0.05)");
        gradient.addColorStop(0.9, lineColor);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.8)");

        // Draw the line with glow effect
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = lineWidth;

        // Add shadow for glow effect
        ctx.shadowColor = lineColor;
        ctx.shadowBlur = 10;

        if (this.direction === "horizontal") {
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.length, this.y);
        } else {
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y + this.length);
        }

        ctx.stroke();

        // Reset shadow to avoid affecting other elements
        ctx.shadowBlur = 0;
      }

      update() {
        if (this.direction === "horizontal") {
          this.x += this.speed;
          if (this.x > canvas.width) {
            this.x = -this.length;
            this.y = Math.random() * canvas.height;
          }
        } else {
          this.y += this.speed;
          if (this.y > canvas.height) {
            this.y = -this.length;
            this.x = Math.random() * canvas.width;
          }
        }
      }
    }

    const initLines = () => {
      horizontalLines = [];
      verticalLines = [];

      // Create horizontal lines
      for (let i = 0; i < density; i++) {
        const y = Math.random() * canvas.height;
        const length = 80 + Math.random() * 200; // Longer lines for more dramatic effect
        const x = Math.random() * canvas.width;
        const lineSpeed = (0.5 + Math.random() * 1.5) * speed; // Slower speed for more subtle effect

        horizontalLines.push(new Line(x, y, length, "horizontal", lineSpeed));
      }

      // Create vertical lines
      for (let i = 0; i < density; i++) {
        const x = Math.random() * canvas.width;
        const length = 80 + Math.random() * 200; // Longer lines for more dramatic effect
        const y = Math.random() * canvas.height;
        const lineSpeed = (0.5 + Math.random() * 1.5) * speed; // Slower speed for more subtle effect

        verticalLines.push(new Line(x, y, length, "vertical", lineSpeed));
      }
    };

    const render = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update horizontal lines
      horizontalLines.forEach((line) => {
        line.draw();
        line.update();
      });

      // Draw and update vertical lines
      verticalLines.forEach((line) => {
        line.draw();
        line.update();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [color, darkColor, lineWidth, speed, density, opacity, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default TronLines;
