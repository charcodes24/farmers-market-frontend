export default function ItemCard({ item }) {
    const { id, name, image_url, price } = item 

    return (
      <div>
        <div>
          <h3>{name}</h3>
          <h4>${price}</h4>
          <button>Add Item</button>
        </div>
        <div>
          <img src={image_url} />
        </div>
      </div>
    );
}