import { useState } from "react";




const Header = ({onClickSearch, setSearch, search,books,setSortingBooks }) => {
    //   const [booksData, setBooksData] = useState([])
      const [sortOrder, setSortOrder] = useState('' || Number);
 
  
      const handleSelectChange = (e) => {
        e.preventDefault()
        setSortOrder(e.target.value);
        
       const booksSorted= [...books].sort((a, b) => {
            
          if (sortOrder === 'asc') {
            return  a.title.localeCompare(b.title, "en", { ignorePunctuation: true })  
          } else if(sortOrder === 'desc') {
            return  b.title.localeCompare(a.title, "en", { ignorePunctuation: true }) 
          }else if(sortOrder === 'pubAsc'){
          
            return Number(a.PublicationYear) - Number(b.PublicationYear)
          }else if(sortOrder === 'pubDesc'){
            return Number(b.PublicationYear) - Number(a.PublicationYear)
          }else{
            return 0
          }
        });
       
        // setBooksData(booksSorted)
        setSortingBooks(booksSorted)
      };

   

const titleAdPublicYear="title" || "PublicationYear"
    return (
        <>
         <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div
          className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
        >
        
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2
              className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
            >
              Trending Books of the Year
            </h2>
        {/* Search form */}
            <form>
              <div className="flex">
                <div
                  className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]"
                >
                  <input
                    type="search"
                    // id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                    placeholder="Search Book"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    required
                  />
                  <div className="absolute right-0 top-0 flex h-full items-center">
                    <button
                      type="button"
                      className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                      onClick={()=>onClickSearch(search)}
                    >
                      <svg
                        className="h-[14px] w-[14px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
        {/* Search form End */}
          </div>

          <div className="flex items-stretch space-x-3">
       
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name={titleAdPublicYear}
              id="sortBy"
              value={sortOrder}
              onChange={handleSelectChange}
            >
              <option >Sort</option>
              <option value="asc">Name (A-Z)</option>
              <option value="desc">Name (Z-A)</option>
              <option value="pubAsc">Publication Year (Oldest)</option>
              <option value="pubDesc">Publication Year (Newest)</option>
            </select>

          </div>
        </div>
      </header>
            
        </>
    );
};

export default Header;