import Hero from "@/components/Hero"
import Searchbar from "@/components/Searchbar"
import CustomFilter from "@/components/CustomFilter"

export default function Home() {
  return (
    <div className='overflow-hidden bg-cyan-50 text-black'>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>

        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
      </div>
    </div>
  )
}
