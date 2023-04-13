import React, { useState } from "react";

function Faq() {
  const [toggleFaq, SetToggleFaq] = useState(false);
  return (
    <div>
      <button onClick={() => SetToggleFaq(!toggleFaq)}>Tap</button>

      {toggleFaq && <p>Hello</p>}
    </div>
  );
}

export default Faq;
