import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";

export default function CreatePostPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background flex flex-col">
      <Card className="mt-4">
        <CardContent className="p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center">Create New Post</h2>
          <Input placeholder="Title" />
          <Textarea placeholder="Write your post..." />
          <Button variant="outline" className="flex gap-2 items-center">
            <ImagePlus size={18} /> Add Image
          </Button>
          <Button className="w-full mt-2">Post</Button>
        </CardContent>
      </Card>
    </div>
  );
} 