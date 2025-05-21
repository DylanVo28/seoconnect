import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <h2 className="text-lg font-semibold my-4">Trending Posts</h2>
      <div className="flex flex-col gap-2">
        <Card>
          <CardContent className="p-3">Post Title <span className="text-xs text-muted-foreground">21 ❤️ 5 💬</span></CardContent>
        </Card>
      </div>
      <h2 className="text-lg font-semibold my-4">Bookmarked Posts</h2>
      <div className="flex flex-col gap-2">
        <Card>
          <CardContent className="p-3">Post Title <span className="text-xs text-muted-foreground">16 ❤️ 2 💬</span></CardContent>
        </Card>
      </div>
      <h2 className="text-lg font-semibold my-4">Upcoming Events</h2>
      <div className="flex flex-col gap-2">
        <Card>
          <CardContent className="p-3">Mark-tan August 3 <span className="text-xs text-muted-foreground">RSVP</span></CardContent>
        </Card>
      </div>
    </div>
  );
}
