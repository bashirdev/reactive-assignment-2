
import { useState } from 'react';
import { data } from '../data';
import Card from './Card';
import Header from './Header';

const BookFinderSection = () =>{
    const [books, setBooks] =useState(data)
    const [search, setSearch] = useState('')
    const [sortingBooks, setSortingBooks] =useState([])
    const [findBooks, setFindBooks] = useState([])
   
    const handleSearchBook=()=>{
        
        const fetchBySearch=data?.filter(book=> book.title.toLowerCase().includes(search.toLowerCase()))
      if(search !== ""){
        setFindBooks([...fetchBySearch])
     
      }else if(findBooks.length> 0){
       setFindBooks([])
      }   

    }

    const handleFavorite=(favId)=>{
      const findIndex=books.findIndex(item=> item.id === favId)
      
      const existData=[...books] || [...sortingBooks] || [...findBooks]
      existData[findIndex].isFavorite = !existData[findIndex].isFavorite;
      setBooks(existData)
   
    }
  


   let content=null;
   if(books?.length > 0){
    content=books?.map((book)=> <Card key={book.id} book={book} handleFavorite={handleFavorite} />)
   }
   if(sortingBooks.length > 0 ){
    content=sortingBooks?.map((book)=> <Card key={book.id} book={book} handleFavorite={handleFavorite} /> )
   }

   if(findBooks.length > 0){
    content=findBooks?.map((book)=> <Card key={book.id} book={book} handleFavorite={handleFavorite} /> )
   }
 
    return (
        <>
     <main className="my-10 lg:my-14">
            <Header 
            onClickSearch={handleSearchBook} 
            setSearch={setSearch} 
            search={search} 
            books={data}
            setSortingBooks={setSortingBooks}

            />
   
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content}
       </div>
    
    </main>
        </>
    );
};

export default BookFinderSection;