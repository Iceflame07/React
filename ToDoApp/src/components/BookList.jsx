import React from "react";
import styles from "./BookList.module.css"

const BookList = () => {
    return(
        <div className = {styles.wrapper} >
	    <header>
	    	<div className={styles.page_banner}>
	    		<h1 class="title"> Book Collections</h1>
          <p>Books</p>
          <form className={styles.search_book}>
            <input type="text" placeholder="Search books..." />
          </form>
	    	</div>
	    </header>

	    <div className={styles.book_list}>
	    	<h2 class="title">Books to Read</h2>
	    	<ul>
	    		<li>
	    			<span class="name">Name of the Wind</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Wise Man's Fear</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">Kafka on the Shore</span>
	    			<span class="delete">delete</span>
	    		</li>
	    		<li>
	    			<span class="name">The Master and the Margarita</span>
	    			<span class="delete">delete</span>
	    		</li>
                <li>
                    <span class="name">The Old Man And The Sea</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">The Tempest</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">A Woman In Her Prime</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">Women Of Owu</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">It's Part Of The Gift</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">The Dish Washer</span>
                    <span class="delete">delete</span>
                </li>
	    	</ul>
	    </div>
	    <form className={styles.add_book}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
        </form>
    </div>
    )
}

export default BookList;