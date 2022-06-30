import { moviesData } from './moviesData'
import MovieCard from './MovieCard'

const Index = () => {
  return (
    <>
    <h3 className="text-3xl border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {moviesData.map((movie,index) => (
            <MovieCard key={index} movie={movie} />
        ))}
    </div>
    <div className="flex justify-center">
        <button className="btn hover:scale-125 transition ease-out duration-500">LOAD MORE</button>
    </div>
    </>
  )
}

export default Index
