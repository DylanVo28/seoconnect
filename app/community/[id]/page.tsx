import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MessageCircle, Heart } from "lucide-react";

export default function PostDetailPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <Card className="mt-4">
        <CardContent className="p-4">
          {/* Post Image */}
          <div className="w-full h-48 bg-muted rounded-lg mb-4" />
          {/* Like & Comment */}
          <div className="flex items-center gap-6 mb-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Heart size={18} /> <span>12</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MessageCircle size={18} /> <span>5</span>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Comments */}
      <div className="mt-4 px-2">
        <div className="font-semibold mb-2">Comment</div>
        <div className="flex items-center gap-2 mb-4">
          <Avatar className="w-8 h-8">
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div className="font-medium">Name</div>
        </div>
        {/* Add more comments here */}
        <Input placeholder="Add a comment..." />
      </div>
    </div>
  );
} 