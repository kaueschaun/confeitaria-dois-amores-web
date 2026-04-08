import Main from "../../shared/Main";
import ProductGrid from "../ProductGrid";

export default function HomeContainer() {
  return (
    <>
      <Main text="Escolha oque buscar">
        <ProductGrid />
      </Main>
    </>
  )
}
