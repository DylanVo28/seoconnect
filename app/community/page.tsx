import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

const posts = [
  {
    user: "User Name",
    title: "Post Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    likes: 10,
    comments: 2,
    image: null,
  },
  {
    user: "User Name",
    title: "",
    content: "How do I optimize page load speed?",
    likes: 8,
    comments: 3,
    image: null,
  },
  {
    user: "User Name",
    title: "",
    content: "Improving site architecture and internal linking",
    likes: 15,
    comments: 5,
    image: "/placeholder.png",
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background relative pb-20">
      <Tabs defaultValue="onpage" className="w-full">
        <TabsList className="w-full flex justify-between mb-2">
          <TabsTrigger value="onpage">On-Page</TabsTrigger>
          <TabsTrigger value="offpage">Off-Page</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>
        <TabsContent value="onpage">
          <div className="flex flex-col gap-3">
            {posts.map((post, idx) => (
              <Card key={idx}>
                <CardContent className="flex gap-3 py-3">
                  <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{post.user}</div>
                    {post.title && <div className="font-medium">{post.title}</div>}
                    <div className="text-sm text-muted-foreground">{post.content}</div>
                    {post.image && (
                      <div className="mt-2">
                        <div className="w-full h-32 bg-muted rounded-lg" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <Button
        className="rounded-full w-14 h-14 flex items-center justify-center fixed bottom-8 right-8 shadow-lg"
        size="icon"
      >
        <Plus size={28} />
      </Button>
    </div>
  );
} 