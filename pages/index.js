import Post from '../components/post'

export default function Home() {
  return (
    <div className="bg-first w-full h-[100vh] pt-[140px] overflow-hidden pb-[20px] sm:pt-[180px] xl:pl-[360px]">
        <div className="w-full h-full bg-yellow-500 border-[4px] border-red-500 max-h-full overflow-y-auto relative flex flex-col gap-[30px]">
        <Post/>
        <Post/>
        <Post/>
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
