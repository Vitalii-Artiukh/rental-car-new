import Button from "../../components/ui/Button/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homeWrapper}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.paragraph}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Button type="button" to={"/catalog"} variant="long">
        View Catalog
      </Button>
    </div>
  );
};

export default HomePage;
