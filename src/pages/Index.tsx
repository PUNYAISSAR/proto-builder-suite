import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, GraduationCap, Camera, Shield } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">F</span>
            </div>
            <span className="text-xl font-semibold">FaceAttend</span>
          </div>
          <div className="flex gap-2">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Attendance Made Simple with Face Recognition
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Revolutionize attendance management in educational institutions through secure facial recognition technology. 
            No more manual roll calls or proxy attendance.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="px-8">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Face Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced biometric authentication using facial recognition technology for secure attendance marking.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Dual Role Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Separate interfaces for students and teachers with role-based permissions and monitoring capabilities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Real-time Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Live attendance monitoring with instant entry/exit recording and comprehensive analytics.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Secure & Private</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enterprise-grade security with encrypted biometric data storage and privacy compliance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Attendance System?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of educational institutions already using FaceAttend for efficient attendance management.
          </p>
          <Link to="/register">
            <Button size="lg" className="px-8">
              Create Your Account Today
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
