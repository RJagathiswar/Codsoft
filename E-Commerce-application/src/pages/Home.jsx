
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const visible = filtered.slice(0, page * 10);

  return (
    <div style={{ padding:20 }}>
      <input placeholder="Search product"
        onChange={e => setSearch(e.target.value)} />
      <div style={{ display:"flex", flexWrap:"wrap" }}>
        {visible.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      {visible.length < filtered.length &&
        <button onClick={() => setPage(page + 1)}>Load More</button>
      }
    </div>
  );
}
