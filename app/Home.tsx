"use client";
import { Hero, CustomFilter, SearchBar, carCard } from '@/components';
import CarCard from '@/components/CarCard';
import { fetchCars } from '@/utils';


export default async function Home() {
    const allCars = await fetchCars();
    const isDataEmpty = !Array.isArray(allCars) || allCars.
        length < 1 || !allCars;
    return (
        <main className="overFlow-hedden">
            <Hero />
            <div className='mt-12 padding-x padding-y max-width' id='discover'>
                <div className=' home__text-container'>
                    <h1 className='text-4x1 font-extrabold'>
                        Car Catalogue
                    </h1>
                    <p>Explore the cars you might like</p>
                </div>

                <div className='home__filters'>
                    <SearchBar />
                    <div className='home__filter-container'>
                        <CustomFilter title="fuel" />
                        <CustomFilter title="year" />
                    </div>
                </div>
                {!isDataEmpty ? (
                    <section>
                        <div className='home__cars-wrapper'>
                            {allCars?.map((car) => (
                                <CarCard car={car} />
                            ))}

                        </div>
                    </section>
                ) : (
                    <div className='home__error-container'>
                        <h2 className='text-black-xl
            font-bold'>
                            Oops ,no res
                        </h2>
                        <p>{allCars?.messags}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
