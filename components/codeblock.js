import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {ghcolors} from "react-syntax-highlighter/dist/cjs/styles/prism";
import rangeParser from 'parse-numeric-range'

export default ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    const hasMeta = node?.data?.meta

    const applyHighlights = (applyHighlights) => {
        if (hasMeta) {
            const RE = /{([\d,-]+)}/
            const metadata = node.data.meta?.replace(/\s/g, '')
            const strlineNumbers = RE?.test(metadata)
                ? RE?.exec(metadata)[1]
                : '0'
            const highlight = rangeParser(strlineNumbers)
            const data = highlight.includes(applyHighlights)
                ? 'highlight'
                : null
            return { data }
        } else {
            return {}
        }
    }

    return match ? (
        <SyntaxHighlighter
            style={ghcolors}
            language={match[1]}
            PreTag="div"
            className="codeStyle"
            showLineNumbers={true}
            wrapLines={!!hasMeta}
            useInlineStyles={true}
            lineProps={applyHighlights}
            children={children.map(child => child.trimEnd())}
            {...props}
        />
    ) : (
        <code
            className={className}
            children={children}
            {...props}
        />
    )
};