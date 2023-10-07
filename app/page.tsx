import Hero from "@/components/Hero"
import Searchbar from "@/components/Searchbar"
import CustomFilter from "@/components/CustomFilter"
import { fetchCars } from "@/utils/index"
import CarCard from "@/components/CarCard"

export default async function Home() {

  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

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

        {!isDataEmpty ?
        (<section>
          <div className="home__cars-wrapper">
            {allCars.map(car => (
              <CarCard car={car}/>
            ))}
          </div>
        </section>) :
        (<div className="home__error-container">
          <h2>There are no results</h2>
        </div>)}

      </div>
    </div>
  )
}
