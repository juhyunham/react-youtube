import React , {useRef, memo} from 'react';
import styles from './search.module.css'

const Search = memo(({ onSearch }) => {
	const inputRef = useRef()
	
	const handleSearch = () => {
		const value = inputRef.current.value;
		onSearch(value)
	}

	const onClick = () => {
		handleSearch()
	}

	const onKeyPress = (event) => {
		if (event.key === `Enter`) {
			handleSearch()
		}
	}

	return (
	<header>
		<h1>
			<img src="/images/y-logo.png" alt="youtube" />
		</h1>
		<div className={styles.input_wrap}>
			<input ref={inputRef} type="text"  placeholder="검색어를 입력해보세요." onKeyPress={onKeyPress}/>
			<button type="submit" onClick={onClick}>
				<span>검색</span>
				<img src="/images/search-icon.png" alt="search" />
			</button>
		</div>
	</header>);
});

export default Search;