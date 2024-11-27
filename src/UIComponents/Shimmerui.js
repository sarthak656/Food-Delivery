const Shimmerui = (props) =>{
    const { bodyFlag, fooditemFlag } = props;
   return(
 <>
       { bodyFlag ?
            (
       <div className="flex flex-wrap justify-center">
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
        <div className="m-4 p-2 w-56 h-52 bg-slate-200 border rounded-2xl"></div>
       </div>
    
    ) : 
    <>
    <div className="flex justify-center mt-10">
        <div className="w-96 h-52 border rounded-2xl bg-slate-300"></div>
       
    </div>
    <div className=" justify-center mt-2">
    <div className="border rounded-2xl ml-60 w-[800px] h-24 bg-slate-300"></div>
    <div className="border rounded-2xl ml-60 w-[800px] mt-2 h-24 bg-slate-300"></div>
    <div className="border rounded-2xl ml-60 w-[800px] h-24 mt-2 bg-slate-300"></div>
    </div>
    </>

            }
            </>
   )
}

export default Shimmerui