import { nanoid } from "nanoid";

import SingleColor from "./SingleColor";

const ColorList = props => {
  const { colors } = props;

  return (
    <section className="colors">
      {colors.map((color, index) => (
        <SingleColor
          key={nanoid()}
          index={index}
          hex={color.hex}
          weight={color.weight}
        />
      ))}
    </section>
  );
};

export default ColorList;
