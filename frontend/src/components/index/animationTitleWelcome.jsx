export default function TitleAnimated(){
    return(
      <>
      <div className="flex flex-col lg:hidden text-white">
        <div className="ml-9">
          <div className="all2 flex items-center text-center">
            <h1 className="text-3xl font-semibold mb-3">
              <p className="text-[#ffffff] inline-block mr-2">Bienvenidos</p>
              <p className="text-[#E41FAE] inline-block mr-2"> | </p>
              <div className="rotating-words">
                <p className="inline-block mr-2">Alumnos</p>
                <p className="inline-block mr-2">Maestros</p>
                <p className="inline-block">SpollNet</p>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
    );
}