interface CatalogMoreButtonProps {
  handleClick: () => void;
}

function CatalogMoreButton({
  handleClick,
}: CatalogMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button onClick={handleClick} className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
}

export default CatalogMoreButton;
