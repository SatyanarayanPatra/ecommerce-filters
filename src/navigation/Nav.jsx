import React from 'react';
import './Nav.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Navigation = () => {
	return (
		<>
			<nav>
				<div className='nav-icon'>
					<a href='/'>
						<img
							src='https://www.zarla.com/images/zarla-shop-stock-1x1-2400x2400-20220124-whpcxxkhjbj4ppxxrycg.png?crop=1:1,smart&width=250&dpr=2'
							alt='Logo'
						/>
					</a>
				</div>
				<div className='nav-container'>
					<input
						type='text'
						className='search-input'
						placeholder='Enter your search query for Shoes'
					/>
				</div>
				<div className='profile-container'>
					<a href='#'>
						<FiHeart className='nav-icons' />
					</a>
					<a href=''>
						<AiOutlineShoppingCart className='nav-icons' />
					</a>
					<a href=''>
						<AiOutlineUserAdd className='nav-icons' />
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
