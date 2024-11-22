import Link from "next/link";

export default async function BlogSection() {
  let res = await fetch(`http://localhost:3000/api/blogs`);
  res = await res.json();

  // Limit to the first 3 blogs if there are more than 3
  const blogsToDisplay = res.data?.slice(0, 3) || [];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsToDisplay.map((data) => (
            <div  key={data._id} className="bg-blue-50 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-100 duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-blue-900">
              {data.title}
            </h3>
            <p className="mt-2 text-gray-600 line-clamp-3">
              {data.body || "No description available."}
            </p>
            <Link href={`/blogs/${data._id}`}>
                  <button className="text-blue-600 mt-4 text-sm">
                    Read More
                  </button>
                </Link>
          </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}
