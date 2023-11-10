import { toast } from "react-toastify";

const SingleColor = props => {
  const { index, hex, weight } = props;

  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      toast.error("Clipboard access not available!");
      return;
    }

    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success("Color copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy colorto clipboard");
    }
  };

  return (
    <article
      onClick={copyToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
