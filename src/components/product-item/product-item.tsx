import cn from 'classnames';
import { Button } from '../button/button';
import { Rating } from '../rating/rating';

export function ProductItem(props: {
  className?: string,
  price: number,
  name: string,
  previewImg: string,
  rating: number,
  alt: string
}) {
  return (
    <div className={cn('product-card', props.className)}>
      <img src={props.previewImg} width="75" height="190" alt={props.alt} />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <Rating rating={props.rating} />
          <span className="rate__count">9</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{props.name}</p>
        <p className="product-card__price">{props.price} ₽</p>
      </div>
      <div className="product-card__buttons">
        <Button isMiniButton title="Подробнее" type="more" />
        <Button isMiniButton title="Купить" type="buy" />
      </div>
    </div>
  );
}
