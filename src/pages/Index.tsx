const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground">The preview is working! Ready for your mobile app development.</p>
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-primary">If you can see this, the preview is loading correctly.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
