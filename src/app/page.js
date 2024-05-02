import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "../../_data/posts.json";
import Link from "next/link";

async function getPosts() {
  return data.posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => {
        return (
          <Card key={post.id} className="p-4">
            <CardHeader>
              <CardTitle>
                <Link href={`/${post.id}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.text}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
