import Post from '../components/post'

export default function Home() {
  return (
    <div className="bg-first w-full h-screen pt-[140px] flex flex-col overflow-y-auto pb-[20px] sm:pt-[180px] xl:pl-[360px] gap-[30px] xl:relative">
      <div className="w-full h-full border-red-500 border-[2px] flex flex-col overflow-y-auto">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
