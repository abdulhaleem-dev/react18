const Book = (props) => {
 return (
   <article className="book">
     <span className="booknumber">#{props.bookNumber + 1}</span>
     <img src={props.image} alt={props.title} />
     <h2>{props.title}</h2>
     <h4>{props.author}</h4>
   </article>
 );
}
export default Book