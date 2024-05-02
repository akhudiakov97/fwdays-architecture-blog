import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "../../../_data/posts.json";

async function getPost() {
  return data.posts[0];
}

export default async function Page() {
  const post = await getPost();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card key={post.id} className="p-4">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.text}</p>
        </CardContent>
      </Card>
    </div>
  );
}
