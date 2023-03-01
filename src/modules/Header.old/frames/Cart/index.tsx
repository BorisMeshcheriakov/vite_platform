import SVG from 'react-inlinesvg';
import { useSelector, useDispatch } from 'react-redux';

// import { data } from 'library/redux/reducers/cart/selectors';

// import { openCart } from 'library/redux/reducers/cart/action';
import cart from 'resources/icons/cart/cart.svg';
import st from './index.module.scss';

const Cart = (): JSX.Element => {
	const dispatch = useDispatch();

	// const shoppingCart = useSelector(data);

	// const handleOpenCart = () => {
	// 	dispatch(openCart());
	// };

	return (
		<button
			className={st.cart}
			// onClick={() => handleOpenCart()}
		>
			<SVG className={st.icon} src={cart} />
			{/* {shoppingCart.items.length > 0 && <div className={st.productsInCartCount}>{shoppingCart.items.length}</div>} */}
		</button>
	);
};

export default Cart;
