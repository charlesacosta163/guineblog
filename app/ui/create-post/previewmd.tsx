// React Markdown
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { AnimatePresence, motion } from "framer-motion";

export default function PreviewMD({content, showOutput}: {content: string, showOutput: Boolean}) {

    return (
        <AnimatePresence>
          {showOutput && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              className={`flex flex-col gap-4`}
            >
              <h1>Output</h1>
              <div className="w-full bg-white rounded-[25px] p-4">
                {/* REACT MARKDOWN RENDER TEST */}
                <ReactMarkdown
                  remarkPlugins={[remarkBreaks, remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  className="px-4"
                  children={content}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    )
}