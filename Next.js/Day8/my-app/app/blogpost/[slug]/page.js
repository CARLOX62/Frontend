export default async function Page({ params }) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)

  const languages = ["python", "javascript", "java", "cpp", "c++"]

  if (languages.includes(decodedSlug)) {
    return <div>My post: {decodedSlug}</div>
  }

  return <div>Post not found</div>
}
