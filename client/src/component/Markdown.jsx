import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const Markdown = ({children}) => <ReactMarkdown plugins={[gfm]} children={children}/>;

export default Markdown;
