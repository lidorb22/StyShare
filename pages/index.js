import Post from '../components/post'

export default function Home() {
  return (
    <div className="bg-first w-full h-screen flex flex-col pt-[140px] overflow-y-auto pb-[40px] sm:pt-[180px] xl:pl-[360px] gap-[30px]">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
