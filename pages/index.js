import Post from '../components/post'

export default function Home() {
  return (
    <div className="bg-first w-full h-[100vh] pt-[140px] flex flex-col overflow-y-auto pb-[20px] sm:pt-[180px] xl:pl-[360px] gap-[30px] relative">
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
