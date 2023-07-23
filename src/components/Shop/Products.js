import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 32,
    title: "The Fitness Mindset: ",
    description:
      "Eat for Energy, Train for Tension, Manage Your Mindset, Reap the Results"
  },
  {
    id: "p2",
    price: 23,
    title: "Bigger Leaner Stronger: ",
    description: "The Simple Science of Building the Ultimate Male Body"
  },
  {
    id: "p2",
    price: 54,
    title: "Muscle for Life:",
    description: "Get Lean, Strong, and Healthy at Any Age!"
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
