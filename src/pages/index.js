import React from "react";

import { useEffect } from "react";

export default function Cart() {

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const mount = import("cart/CartShow").then(module=>{
          console.log('module', module);
          module?.mount(document.querySelector('#cart-root'));
        });
      }
    })();
  }, []);

  return (
    <div>
      <h1>Cart MFE</h1>
    </div>
  );
}
