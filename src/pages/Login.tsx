import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CameraPreview } from "@/components/ui/camera-preview";
import { Separator } from "@/components/ui/separator";
import { UserCheck, GraduationCap, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [isTeacher, setIsTeacher] = useState(false);
  const [useCamera, setUseCamera] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    pin: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const handleFaceRecognition = () => {
    setIsLoading(true);
    // Simulate face recognition processing
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <Card className="w-full max-w-md mx-auto shadow-elegant">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">F</span>
          </div>
          <CardTitle className="text-2xl">Welcome to FaceAttend</CardTitle>
          <CardDescription>
            Sign in to access your attendance dashboard
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Role Selection */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              {isTeacher ? (
                <UserCheck className="h-5 w-5 text-primary" />
              ) : (
                <GraduationCap className="h-5 w-5 text-primary" />
              )}
              <span className="font-medium">
                {isTeacher ? "Teacher" : "Student"}
              </span>
            </div>
            <Switch
              checked={isTeacher}
              onCheckedChange={setIsTeacher}
            />
          </div>

          {/* Authentication Method Toggle */}
          <div className="flex items-center justify-between">
            <Label htmlFor="camera-mode" className="text-sm font-medium">
              Use Face Recognition
            </Label>
            <Switch
              id="camera-mode"
              checked={useCamera}
              onCheckedChange={setUseCamera}
            />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {useCamera ? (
              /* Face Recognition Mode */
              <div className="space-y-4">
                <CameraPreview
                  isActive={true}
                  onToggle={() => setUseCamera(!useCamera)}
                  onCapture={handleFaceRecognition}
                />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Position your face within the guide and click capture
                  </p>
                </div>
              </div>
            ) : (
              /* Traditional Login Mode */
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <Label htmlFor="pin">PIN (Alternative)</Label>
                  <Input
                    id="pin"
                    type="password"
                    placeholder="Enter your 4-digit PIN"
                    value={formData.pin}
                    onChange={(e) => setFormData({...formData, pin: e.target.value})}
                    maxLength={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            )}
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              First time user?{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}