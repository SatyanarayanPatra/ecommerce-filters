import React from 'react';
import './Products.css';
import { FaStar, FaShoppingBag } from 'react-icons/fa';

const Products = () => {
	return (
		<>
			<section className='card-container'>
				<section className='card'>
					<img
						src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
						alt='Shoe'
						className='card-img'
					/>
					<div className='card-details'>
						<h3 className='card-title'>Shoe</h3>
						<section className='card-reviews'>
							<FaStar className='rating-star' />{' '}
							<FaStar className='rating-star' />{' '}
							<FaStar className='rating-star' />{' '}
							<FaStar className='rating-star' />
							<section className='total-reviews'>4</section>
						</section>
						<section className='card-price'>
							<div className='price'>
								$ <del>300</del> 200
							</div>
							<div className='bag'>
								<FaShoppingBag className='bag-icon' />
							</div>
						</section>
					</div>
				</section>
			</section>
		</>
	);
};

export default Products;
