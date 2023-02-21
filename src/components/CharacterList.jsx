import React, { useState, useEffect } from "react";
import Character from "./Character";

function NavPage(props){
    return (
        <div className="flex justify-between px-10 mt-5 items-center max-[600px]:p-0">
            <p>Page: {props.page}</p>
            <div className="flex gap-5 max-[600px]:flex-col max-[600px]:gap-2">
                <button className="border-none bg-blue-600 py-1 px-6 rounded-l hover:scale-[1.1] duration-200" onClick={()=>{
                    if(props.page == 1){
                        return
                    }else{
                        props.setPage(props.page-1)
                    }
                }}>
                    Previus Page {props.page - 1}
                </button>
                <button className="border-none bg-blue-600 py-1 px-6 rounded-l hover:scale-[1.1] duration-200" onClick={()=>props.setPage(props.page+1)}>
                    Next Page {props.page + 1}
                </button>
            </div>
        </div>
    )
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false)
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (<>
        <NavPage page={page} setPage={setPage}/>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
        {loading ? (
            <h1>Loading</h1>
        ) : (
            characters.map((perso) => {
            return <Character key={perso.id} perso={perso} />;
            })
        )}
        </div>
        <NavPage page={page} setPage={setPage}/>
    </>
  );
}

export default CharacterList;
