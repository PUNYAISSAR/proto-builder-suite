import * as React from "react";
import { Camera, CameraOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface CameraPreviewProps {
  isActive: boolean;
  onToggle: () => void;
  onCapture?: () => void;
  className?: string;
  showGuidance?: boolean;
}

export const CameraPreview = React.forwardRef<
  HTMLVideoElement,
  CameraPreviewProps
>(({ isActive, onToggle, onCapture, className, showGuidance = true }, ref) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [stream, setStream] = React.useState<MediaStream | null>(null);
  const [error, setError] = React.useState<string>("");

  // Combine refs
  React.useImperativeHandle(ref, () => videoRef.current!);

  const startCamera = async () => {
    try {
      setError("");
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: "user"
        }
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      setError("Camera access denied or unavailable");
      console.error("Camera error:", err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  React.useEffect(() => {
    if (isActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => stopCamera();
  }, [isActive]);

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "relative overflow-hidden rounded-lg bg-muted",
        showGuidance && "camera-overlay"
      )}>
        {error ? (
          <div className="flex h-64 w-full items-center justify-center bg-muted">
            <div className="text-center">
              <CameraOff className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={cn(
              "h-64 w-full object-cover",
              !isActive && "hidden"
            )}
          />
        )}
        
        {showGuidance && isActive && !error && (
          <div className="face-guide" />
        )}
      </div>

      <div className="mt-4 flex gap-2 justify-center">
        <Button
          variant={isActive ? "secondary" : "default"}
          onClick={onToggle}
          className="flex items-center gap-2"
        >
          {isActive ? <CameraOff className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
          {isActive ? "Stop Camera" : "Start Camera"}
        </Button>
        
        {onCapture && isActive && !error && (
          <Button onClick={onCapture} variant="accent">
            Capture
          </Button>
        )}
      </div>
    </div>
  );
});

CameraPreview.displayName = "CameraPreview";