import CreateBlogForm from "@/components/modules/Dashboard/CreateBlogForm";
import { getUserSession } from "@/helpers/getUserSession";


export default async function CreateBlogPage() {
  const session = await getUserSession();
  const user = session?.data?.user;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-center">
        <p className="text-lg font-medium text-gray-600">
          You must be logged in to create a blog.
        </p>
      </div>
    );
  }

  return <CreateBlogForm authorId={user.id} />;
}
