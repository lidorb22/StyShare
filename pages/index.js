import Post from '../components/post'

export default function Home() {
  return (
    <div className="bg-first w-full h-screen flex flex-col pt-[140px] overflow-y-auto pb-[40px] sm:pt-[180px] xl:pl-[360px] gap-[30px] xl:relative">
      <div className="hidden xl:block xl:absolute xl:w-full xl:h-[2px] xl:top-[115px] xl:right-0 pl-[350px]">
        <div className="w-full h-full bg-gradient-to-r from-third/0 via-third to-third/0 xl:flex xl:items-end xl:text-[50px] xl:font-bold xl:justify-end">
          <p className="hidden xl:block xl:mb-[20px] xl:mr-[20px] xl:text-second xl:tracking-[0.2em]">סתישר</p>
        </div>
      </div>
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
