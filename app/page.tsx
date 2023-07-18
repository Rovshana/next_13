import Hero from '@/components/Hero/Hero'
import Search from '@/components/Search/search'
import CustomFilter from '@/components/customFilter/CustomFilter'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl ">Cars Catologue</h1>
          <p>Explore the cars you might interesting</p>
        </div>
        <div className="home__filters">
          <Search />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
