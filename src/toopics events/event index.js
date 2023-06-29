function EventHandler()  {
    const handleClick=(arg)=>{
        alert("welcome"+arg);
    }
    function handleSubmit(event) {
   console.log(handleSubmit);
    }
return  ( 
<form className="card">
    <button className="btn-btn-primary" onClick={()=>handleClick('react')}>
        alert
        </button>

        <button className="btn-btn-primary" type="submit" onClick={handleSubmit}>
        submit
        </button>
</form>
);
}
export default EventHandler;