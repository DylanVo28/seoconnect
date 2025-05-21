import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function MainLayout() {
  return (
    <Card className="main-layout w-full max-w-md mx-auto min-h-screen rounded-2xl shadow-xl flex flex-col">
      <header className="flex items-center justify-center gap-2 py-4 border-b">
        <Avatar className="w-8 h-8">
          <AvatarFallback>👤</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold m-0">SEO.Connect</h1>
      </header>
      <main className="flex-1 min-h-[60vh]"></main>
      <nav className="bottom-nav flex justify-around border-t py-3 bg-white">
        <a href="#" className="text-muted-foreground text-base font-medium">Home</a>
        <a href="#" className="text-muted-foreground text-base font-medium">Community</a>
        <a href="#" className="text-muted-foreground text-base font-medium">Suppliers</a>
        <a href="#" className="text-muted-foreground text-base font-medium">Events</a>
        <a href="#" className="text-muted-foreground text-base font-medium">Notifications</a>
      </nav>
    </Card>
  );
} 