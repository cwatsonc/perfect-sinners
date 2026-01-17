export default function Games() {

  return (<div className="flex flex-col w-80 justify-items-center text-white z-10 text-4xl">
    <div className="flex justify-center"><h1 >Game List</h1></div>
    <div className="flex flex-row w-80 space-x-3.5 justify-items-around">
      <button className="bg-blue">game 1</button>
      <button className="border-spacing-1.5">game 2</button>
      <button className="bg-auto" >game 3</button>
    </div>
  </div>);
}